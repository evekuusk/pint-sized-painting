import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewChild } from '@angular/core';
import { PaintToolsService } from '../../../services/paint-tools.service';
import { FormToolsService } from '../../../services/form-tools.service';
import { JoinPipe } from 'angular-pipes';
import * as $ from 'jquery';



@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss'],
  providers: [ PaintToolsService ]
})
export class PaintsComponent implements OnInit {
  types: string[];
  tags: string[];
  colourFamilies: string[];
  activeFilters: object;
  activeFiltersArr = this.paintToolsService.filtersArr;

  // filtering selections form
  form: FormGroup;
  paintTypes = this.paintToolsService.allTypesFilterSelections;
  filteredPaintTypesInclude: string[];
  paintBrands = this.paintToolsService.allBrandsFilterSelections;
  filteredPaintBrandsInclude: string[];
  paintTags = this.paintToolsService.allTagsFilterSelections;
  filteredPaintTagsInclude: string[];
  paintColourFamilies = this.paintToolsService.allColourFamiliesFilterSelections;
  filteredPaintColourFamiliesInclude: string[];

  // selection booleans
  allPaintsSelected: boolean;
  zeroPaintsSelected: boolean;
  allPaintTypesSelected: boolean;
  allPaintBrandsSelected: boolean;
  allPaintTagsSelected: boolean;
  allPaintColourFamiliesSelected: boolean;
  zeroPaintTypesSelected: boolean;
  zeroPaintTagsSelected: boolean;
  zeroPaintColourFamiliesSelected: boolean;

  constructor(private paintToolsService: PaintToolsService, private formBuilder: FormBuilder, private formToolsService: FormToolsService) {
    const paintTypeControls = this.paintTypes.map(c => new FormControl(false));
    const paintBrandControls = this.paintBrands.map(c => new FormControl(false));
    const paintTagControls = this.paintTags.map(c => new FormControl(false));
    const paintColourFamilyControls = this.paintColourFamilies.map(c => new FormControl(false));

    this.form = this.formBuilder.group({
      paintTypes: new FormArray(paintTypeControls),
      paintBrands: new FormArray(paintBrandControls),
      paintTags: new FormArray(paintTagControls),
      paintColourFamilies: new FormArray(paintColourFamilyControls)
    });
  }

  submit() {
    // paint types
    const selectedPaintTypes = this.form.value.paintTypes
      .map((v, i) => v ? this.paintTypes[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintTypesInclude = selectedPaintTypes;

    // paint brands
    const selectedPaintBrands = this.form.value.paintBrands
      .map((v, i) => v ? this.paintBrands[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintBrandsInclude = selectedPaintBrands;

    // paint tags
    const selectedPaintTags = this.form.value.paintTags
      .map((v, i) => v ? this.paintTags[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintTagsInclude = selectedPaintTags;

    // paint colour families
    const selectedPaintColourFamilies = this.form.value.paintColourFamilies
      .map((v, i) => v ? this.paintColourFamilies[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintColourFamiliesInclude = selectedPaintColourFamilies;

    this.activeFilters = {
      filteredBrandsResult: this.filteredPaintBrandsInclude,
      filteredTypesResult: this.filteredPaintTypesInclude,
      filteredTagsResult: this.filteredPaintTagsInclude,
      filteredColourFamiliesResult: this.filteredPaintColourFamiliesInclude
    }

    this.paintToolsService.updateFilteredPaints(this.activeFilters);

  }

  clearAll() {
    // this.activeFilters = this.paintToolsService.filtersObj;
    this.clearThis('types')
    this.clearThis('tags')
    this.clearThis('colour')
    this.allPaintsSelected = false;
    this.zeroPaintsSelected = true;
  }

  selectAll() {
    this.selectAllTypes()
    this.selectAllTags()
    this.selectAllColourFamilies()
    this.allPaintsSelected = true;
  }

  getCheckboxSiblings(elem) {
  	var siblings = [];
  	var sibling = elem.parentNode.firstChild;
  	for (; sibling; sibling = sibling.nextSibling) {
  		if (sibling.nodeType !== 1 || sibling === elem) continue;
  		siblings.push(sibling);
  	}
  	return siblings;
  };

  updateArrWithChangedValue(keepChecked, changedCheckboxName, formGroupNamesArr) {
    // *** PROBLEM IS HERE...NOT WORKING AS EXPECTED...MUST RETURN ARRAY OF ONLY MATCHING CHECKED ITEMS IN THE RESPECTIVE ARRAY GROUP *** //
    if (keepChecked === false) {
      for (let i = 0; i < formGroupNamesArr.length; i++) {
        if ( formGroupNamesArr[i] === changedCheckboxName) {
          formGroupNamesArr.splice(i, 1);
        }
      }
    }
    console.log('updateArrWithChangedValue() formGroupNamesArr: ', formGroupNamesArr)
    return formGroupNamesArr
  }

  onChange(e) {
    let targetCategory = e.source.id
    let targetCategoryArr = targetCategory.split('-')
    targetCategory = targetCategoryArr[1]
    let changedCheckValue = e.checked;
    let targetElementId = e.source.id
    let targetElement = document.getElementById(targetElementId)
    let formArrayName = targetElement.parentNode
    let formArrayNameStr
    formArrayNameStr = $(formArrayName).attr('formarrayname')

    let parentNode = targetElement.parentNode.parentNode
    let targetGroupSiblings = $(parentNode).children("label[formarrayname='" + formArrayNameStr + "']")
    let targetElementName = $(targetElement).find('span.mat-checkbox-label').text()
    let groupSiblingNamesArr = []
    for (let i = 0; i < targetGroupSiblings.length; i++) {
      let siblingName = $(targetGroupSiblings[i]).find('span.mat-checkbox-label').text()
      groupSiblingNamesArr.push(siblingName)
    }

    console.log('maximum available items from this filter: ', groupSiblingNamesArr)
    let updatedCheckedNamesArr = this.updateArrWithChangedValue(changedCheckValue, targetElementName, groupSiblingNamesArr)
    console.log('selected from this filter: ', updatedCheckedNamesArr)
    this.checkSelectedBoolsInCategory(formArrayNameStr, updatedCheckedNamesArr, groupSiblingNamesArr, changedCheckValue)
  }

  checkSelectedBoolsInCategory(category, checkedItemsOfGroup, allItemsOfGroup, changedValue) {
    console.log('checkSelectedBoolsInCategory checkedItemsOfGroup length: ', checkedItemsOfGroup.length)
    if (category === 'types') {
      if (changedValue === false) {
        this.allPaintTypesSelected = false;
      } else {
        this.zeroPaintTypesSelected = false;
      }
      if (checkedItemsOfGroup === allItemsOfGroup) {
        this.allPaintTypesSelected = true;
        this.zeroPaintsSelected = false;
        if ((this.allPaintTagsSelected === true) && (this.allPaintColourFamiliesSelected === true)) {
          this.allPaintsSelected = true;
        }
      } else if (checkedItemsOfGroup.length === 0) {
        this.zeroPaintTypesSelected = true;
        this.allPaintsSelected = false;
        if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintColourFamiliesSelected === true)) {
          this.zeroPaintsSelected = true;
        }
      } else {
        this.allPaintTypesSelected = false;
        this.zeroPaintTypesSelected = false;
      }
    } else if (category === 'tags') {
      if (changedValue === false) {
        this.allPaintTagsSelected = false;
      } else {
        this.zeroPaintTagsSelected = false;
      }
      if (checkedItemsOfGroup === allItemsOfGroup) {
        this.allPaintTagsSelected = true;
        this.zeroPaintsSelected = false;
        if ((this.allPaintTypesSelected === true) && (this.allPaintColourFamiliesSelected === true)) {
          this.allPaintsSelected = true;
        }
      } else if (checkedItemsOfGroup.length === 0) {
        this.zeroPaintTagsSelected = true;
        this.allPaintsSelected = false;
        if ((this.zeroPaintTypesSelected === true) && (this.zeroPaintTypesSelected === true)) {
          this.zeroPaintsSelected = true;
        }
      }  else {
        this.allPaintTagsSelected = false;
        this.zeroPaintTagsSelected = false;
      }
    } else if (category === 'colour') {
      if (changedValue === false) {
        this.allPaintColourFamiliesSelected = false;
      } else {
        this.zeroPaintColourFamiliesSelected = false;
      }
      if (checkedItemsOfGroup === allItemsOfGroup) {
        this.allPaintColourFamiliesSelected = true;
        this.zeroPaintsSelected = false;
        if ((this.allPaintTagsSelected === true) && (this.allPaintTypesSelected === true)) {
          this.allPaintsSelected = true;
        }
      } else if (checkedItemsOfGroup.length === 0) {
        this.zeroPaintColourFamiliesSelected = true;
        this.allPaintsSelected = false;
        if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintTypesSelected === true)) {
          this.zeroPaintsSelected = true;
        }
      } else {
        this.allPaintColourFamiliesSelected = false;
        this.zeroPaintColourFamiliesSelected = false;
      }
    }
  }

  clearThis(category) {
    this.allPaintsSelected = false;
    if (category === 'types') {
      this.form.controls.paintTypes.reset();
      this.allPaintTypesSelected = false;
      this.zeroPaintTypesSelected = true;
      if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintColourFamiliesSelected === true)) {
        this.zeroPaintsSelected = true;
      }
    } else if (category === 'tags') {
      this.form.controls.paintTags.reset();
      this.allPaintTagsSelected = false;
      this.zeroPaintTagsSelected = true;
      if ((this.zeroPaintTypesSelected === true) && (this.zeroPaintColourFamiliesSelected === true)) {
        this.zeroPaintsSelected = true;
      }
    } else if (category === 'colour') {
      this.form.controls.paintColourFamilies.reset();
      this.allPaintColourFamiliesSelected = false;
      this.zeroPaintColourFamiliesSelected = true;
      if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintTypesSelected === true)) {
        this.zeroPaintsSelected = true;
      }
    }
  }

  selectAllTypes() {
    let arrLength = this.form.controls.paintTypes.value.length;
    let valuesArr = []
    for (let i = 0; i < arrLength; i++) {
      valuesArr.push(true)
    }
    this.form.controls.paintTypes.setValue(valuesArr);
    this.allPaintTypesSelected = true;
    this.zeroPaintTypesSelected = false;
    this.zeroPaintsSelected = false;
    if ((this.allPaintTagsSelected === true) && (this.allPaintColourFamiliesSelected === true)) {
      this.allPaintsSelected = true;
    }
  }

  selectAllTags() {
    let arrLength = this.form.controls.paintTags.value.length;
    let valuesArr = []
    for (let i = 0; i < arrLength; i++) {
      valuesArr.push(true)
    }
    this.form.controls.paintTags.setValue(valuesArr);
    this.allPaintTagsSelected = true;
    this.zeroPaintTagsSelected = false;
    this.zeroPaintsSelected = false;
    if ((this.allPaintTypesSelected === true) && (this.allPaintColourFamiliesSelected === true)) {
      this.allPaintsSelected = true;
    }
  }

  selectAllColourFamilies() {
    let arrLength = this.form.controls.paintColourFamilies.value.length;
    let valuesArr = []
    for (let i = 0; i < arrLength; i++) {
      valuesArr.push(true)
    }
    this.form.controls.paintColourFamilies.setValue(valuesArr);
    this.allPaintColourFamiliesSelected = true;
    this.zeroPaintColourFamiliesSelected = false;
    this.zeroPaintsSelected = false;
    if ((this.allPaintTagsSelected === true) && (this.allPaintTypesSelected === true)) {
      this.allPaintsSelected = true;
    }
  }

  selectThese(category) {
    if (category === 'types') {
      this.selectAllTypes()
    } else if (category === 'tags') {
      this.selectAllTags()
    } else if (category === 'colour') {
      this.selectAllColourFamilies()
    }
  }

  checkIfSubmittable() {
    // (allPaintsSelected === true) || (zeroPaintsSelected === true) || (allPaintTypesSelected === true) || (allPaintTagsSelected === true) || (allPaintColourFamiliesSelected === true) || (zeroPaintTypesSelected === true) || (zeroPaintTagsSelected === true) || (zeroPaintColourFamiliesSelected === true)
  }

  ngOnInit() {
    this.types = this.paintToolsService.allTypes;
    this.tags = this.paintToolsService.allTags;
    this.colourFamilies = this.paintToolsService.allColourFamilies;
    this.activeFilters = this.paintToolsService.filtersObj;
    this.allPaintsSelected = true;
    this.allPaintTypesSelected = true;
    this.allPaintTagsSelected = true;
    this.allPaintColourFamiliesSelected = true;
    this.zeroPaintsSelected = false;
    this.zeroPaintTypesSelected = false;
    this.zeroPaintTagsSelected = false;
    this.zeroPaintColourFamiliesSelected = false;

    // all checked by default
    this.selectAll()
    this.submit()
  }

}
