import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
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
  allPaintTypes: string[];
  allPaintTags: string[];
  allPaintColourFamilies: string[];
  activeFilters: object;
  activeFiltersArr = this.paintToolsService.filtersArr;
  isFilteredListTitle: string;
  showAllPaints: boolean;
  scrollToList: boolean;

  // filtering selections form
  form: FormGroup;
  paintTypes = this.paintToolsService.allTypesFilterSelections;
  paintTags = this.paintToolsService.allTagsFilterSelections;
  paintColourFamilies = this.paintToolsService.allColourFamiliesFilterSelections;

  // temporary filter arrays
  filteredPaintTagsBucket: string[];
  filteredPaintTypesBucket: string[];
  filteredPaintColourFamiliesBucket: string[];

  // submitted values
  filteredPaintTagsSubmitted: string[];
  filteredPaintTypesSubmitted: string[];
  filteredPaintColourFamiliesSubmitted: string[];

  // selection booleans
  allPaintsSelected: boolean;
  zeroPaintsSelected: boolean;
  allPaintTypesSelected: boolean;
  allPaintTagsSelected: boolean;
  allPaintColourFamiliesSelected: boolean;
  zeroPaintTypesSelected: boolean;
  zeroPaintTagsSelected: boolean;
  zeroPaintColourFamiliesSelected: boolean;

  // *** PROCESS AND DOM HANDLING *** //
  getCheckboxSiblings(elem) {
  	var siblings = [];
  	var sibling = elem.parentNode.firstChild;
  	for (; sibling; sibling = sibling.nextSibling) {
  		if (sibling.nodeType !== 1 || sibling === elem) continue;
  		siblings.push(sibling);
  	}
  	return siblings;
  };

  checkSelectedBoolsInCategory(category, changedValue) {
    if (category === 'types') {
      if (this.filteredPaintTypesBucket.length > 0) {
        // types filter is not empty
        this.zeroPaintTypesSelected = false;
        this.zeroPaintsSelected = false;
        let bucketSize = this.filteredPaintTypesBucket.length
        if (bucketSize === this.allPaintTypes.length) {
          // all paint types selected
          this.allPaintTypesSelected = true;
          // check if this checked was the last needed for all paint selections to fulfill
          if ((this.allPaintTagsSelected === true) && (this.allPaintColourFamiliesSelected === true)) {
            this.allPaintsSelected = true;
          }
        } else {
          // some paint types selected but not all
          this.allPaintTypesSelected = false;
          this.allPaintsSelected = false;
        }
      } else {
        // types filter is empty
        this.zeroPaintTypesSelected = true;
        if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintColourFamiliesSelected === true)) {
          this.zeroPaintsSelected = true;
        }
      }

    } else if (category === 'tags') {
      if (this.filteredPaintTagsBucket.length > 0) {
        // tags filter is not empty
        this.zeroPaintTagsSelected = false;
        this.zeroPaintsSelected = false;
        let bucketSize = this.filteredPaintTagsBucket.length
        if (bucketSize === this.allPaintTags.length) {
          // all paint tags selected
          this.allPaintTagsSelected = true;
          // check if this checked was the last needed for all paint selections to fulfill
          if ((this.allPaintTypesSelected === true) && (this.allPaintColourFamiliesSelected === true)) {
            this.allPaintsSelected = true;
          }
        } else {
          // some paint tags selected but not all
          this.allPaintTagsSelected = false;
          this.allPaintsSelected = false;
        }
      } else {
        // tags filter is empty
        this.zeroPaintTagsSelected = true;
        if ((this.zeroPaintTypesSelected === true) && (this.zeroPaintColourFamiliesSelected === true)) {
          this.zeroPaintsSelected = true;
        }
      }

    } else if (category === 'colour') {
      if (this.filteredPaintColourFamiliesBucket.length > 0) {
        // colours filter is not empty
        this.zeroPaintColourFamiliesSelected = false;
        this.zeroPaintsSelected = false;
        let bucketSize = this.filteredPaintColourFamiliesBucket.length
        if (bucketSize === this.allPaintColourFamilies.length) {
          // all paint colours selected
          this.allPaintColourFamiliesSelected = true;
          // check if this checked was the last needed for all paint selections to fulfill
          if ((this.allPaintTagsSelected === true) && (this.allPaintTypesSelected === true)) {
            this.allPaintsSelected = true;
          }
        } else {
          // some paint colours selected but not all
          this.allPaintColourFamiliesSelected = false;
          this.allPaintsSelected = false;
        }
      } else {
        // colours filter is empty
        this.zeroPaintColourFamiliesSelected = true;
        if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintTypesSelected === true)) {
          this.zeroPaintsSelected = true;
        }
      }
    }
  }

  submit() {
    // paint types
    const selectedPaintTypes = this.form.value.paintTypes
      .map((v, i) => v ? this.paintTypes[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintTypesSubmitted = selectedPaintTypes;

    // paint tags
    const selectedPaintTags = this.form.value.paintTags
      .map((v, i) => v ? this.paintTags[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintTagsSubmitted = selectedPaintTags;

    // paint colour families
    const selectedPaintColourFamilies = this.form.value.paintColourFamilies
      .map((v, i) => v ? this.paintColourFamilies[i]["name"] : null)
      .filter(v => v !== null);
    this.filteredPaintColourFamiliesSubmitted = selectedPaintColourFamilies;

    this.activeFilters = {
      filteredTypes: this.filteredPaintTypesSubmitted,
      filteredTags: this.filteredPaintTagsSubmitted,
      filteredColourFamilies: this.filteredPaintColourFamiliesSubmitted
    }
    this.paintToolsService.updateFilteredPaints(this.activeFilters);

    if (this.allPaintsSelected === true) {
      this.isFilteredListTitle = "All"
      this.showAllPaints = true;
    } else {
      this.isFilteredListTitle = "Filtered"
      this.showAllPaints = false;
    }
    if (this.scrollToList === true) {
      $('html, body').animate({
        scrollTop: $('#paints-list').offset().top
      }, 300);
    }
    this.scrollToList = true;
  }


  // *** CLEAR SELECTIONS *** //
  clearAll() {
    this.clearThis('types')
    this.clearThis('tags')
    this.clearThis('colour')
    this.allPaintsSelected = false;
    this.zeroPaintsSelected = true;
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
      this.emptyThisBucket('types')
    } else if (category === 'tags') {
      this.form.controls.paintTags.reset();
      this.allPaintTagsSelected = false;
      this.zeroPaintTagsSelected = true;
      if ((this.zeroPaintTypesSelected === true) && (this.zeroPaintColourFamiliesSelected === true)) {
        this.zeroPaintsSelected = true;
      }
      this.emptyThisBucket('tags')
    } else if (category === 'colour') {
      this.form.controls.paintColourFamilies.reset();
      this.allPaintColourFamiliesSelected = false;
      this.zeroPaintColourFamiliesSelected = true;
      if ((this.zeroPaintTagsSelected === true) && (this.zeroPaintTypesSelected === true)) {
        this.zeroPaintsSelected = true;
      }
      this.emptyThisBucket('colour')
    }
  }


// *** SELECTIONS *** //
  selectAll() {
    this.selectAllTypes()
    this.selectAllTags()
    this.selectAllColourFamilies()
    this.allPaintsSelected = true;
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
    this.fillThisBucket('types')
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
    this.fillThisBucket('tags')
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
    this.fillThisBucket('colour')
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

// *** UPDATE TEMP BUCKETS *** //
  addThisToBucket(category, value) {
    if (category === 'types') {
      this.filteredPaintTypesBucket.push(value)
    } else if (category === 'tags') {
      this.filteredPaintTagsBucket.push(value)
    } else if (category === 'colour') {
      this.filteredPaintColourFamiliesBucket.push(value)
    }
  }

  removeThisFromBucket(category, value) {
    if (category === 'types') {
      this.filteredPaintTypesBucket = this.paintToolsService.removeValueFromArray(this.filteredPaintTypesBucket, value)
    } else if (category === 'tags') {
      this.filteredPaintTagsBucket = this.paintToolsService.removeValueFromArray(this.filteredPaintTagsBucket, value)
    } else if (category === 'colour') {
      this.filteredPaintColourFamiliesBucket = this.paintToolsService.removeValueFromArray(this.filteredPaintColourFamiliesBucket, value)
    }
  }

  fillThisBucket(category) {
    if (category === 'types') {
      this.filteredPaintTypesBucket = this.allPaintTypes;
    } else if (category === 'tags') {
      this.filteredPaintTagsBucket = this.allPaintTags;
    } else if (category === 'colour') {
      this.filteredPaintColourFamiliesBucket = this.allPaintColourFamilies;
    }
  }

  emptyThisBucket(category) {
    if (category === 'types') {
      this.filteredPaintTypesBucket = [];
    } else if (category === 'tags') {
      this.filteredPaintTagsBucket = [];
    } else if (category === 'colour') {
      this.filteredPaintColourFamiliesBucket = [];
    }
  }

  // *** STATUS HANDLERS *** //

  onToggleFilter(e) {
    this.selectAll()
    this.submit()

    let filterBool = e.checked;
    if (filterBool === true) {
      this.showFilterOptions()
    } else {
      this.hideFilterOptions()
    }
  }

  onToggleStrictFiltering(e) {
    let strictFilterBool = e.checked;
    if (strictFilterBool === true) {
      this.paintToolsService.strictFiltering = true;
    } else {
      this.paintToolsService.strictFiltering = false;
    }
    console.log(this.paintToolsService.strictFiltering)
  }

  showFilterOptions() {
    this.scrollToList = false;
    $('#filterPaintsForm').slideDown(200)
    this.clearAll()
    this.submit()
  }

  hideFilterOptions() {
    this.scrollToList = false;
    $('#filterPaintsForm').slideUp(200)
    this.selectAll()
    this.submit()
    $('html, body').animate({
      scrollTop: $('#main-nav').offset().top
    }, 0);
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

    // REVISE ARRAY STRING NAME
    if (formArrayNameStr === 'paintTypes') {
      formArrayNameStr = 'types'
    } else if (formArrayNameStr === 'paintTags') {
      formArrayNameStr = 'tags'
    } else if (formArrayNameStr === 'paintColourFamilies') {
      formArrayNameStr = 'colour'
    }

    // ADJUST RESPECTIVE BUCKET
    if (changedCheckValue === false) {
      this.removeThisFromBucket(formArrayNameStr, targetElementName)
    } else {
      this.addThisToBucket(formArrayNameStr, targetElementName)
    }

    this.checkSelectedBoolsInCategory(formArrayNameStr, changedCheckValue)
  }

  constructor(private paintToolsService: PaintToolsService, private formBuilder: FormBuilder, private formToolsService: FormToolsService) {
    const paintTypeControls = this.paintTypes.map(c => new FormControl(false));
    const paintTagControls = this.paintTags.map(c => new FormControl(false));
    const paintColourFamilyControls = this.paintColourFamilies.map(c => new FormControl(false));

    this.form = this.formBuilder.group({
      paintTypes: new FormArray(paintTypeControls),
      paintTags: new FormArray(paintTagControls),
      paintColourFamilies: new FormArray(paintColourFamilyControls)
    });
  }

  ngOnInit() {
    // set constants
    this.allPaintTypes = this.paintToolsService.allTypes;
    this.allPaintTags = this.paintToolsService.allTags;
    this.allPaintColourFamilies = this.paintToolsService.allColourFamilies;

    // set variables
    this.activeFilters = this.paintToolsService.filtersObj;

    // all select booleans
    this.allPaintsSelected = true;
    this.allPaintTypesSelected = true;
    this.allPaintTagsSelected = true;
    this.allPaintColourFamiliesSelected = true;

    // zero select booleans
    this.zeroPaintsSelected = false;
    this.zeroPaintTypesSelected = false;
    this.zeroPaintTagsSelected = false;
    this.zeroPaintColourFamiliesSelected = false;

    // set initial temporary buckets
    this.filteredPaintTagsBucket = this.allPaintTags;
    this.filteredPaintTypesBucket = this.allPaintTypes;
    this.filteredPaintColourFamiliesBucket = this.allPaintColourFamilies;

    // set all checked by default
    this.selectAll()
    this.submit()
    this.isFilteredListTitle = 'All';
    this.showAllPaints = true;
    this.scrollToList = false;
  }

}
