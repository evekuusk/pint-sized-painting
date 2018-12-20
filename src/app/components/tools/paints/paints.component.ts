import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewChild } from '@angular/core';
import { PaintToolsService } from '../../../services/paint-tools.service';
import { FormToolsService } from '../../../services/form-tools.service';
import { JoinPipe } from 'angular-pipes';



@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss'],
  providers: [ PaintToolsService ]
})
export class PaintsComponent implements OnInit {
  types: string[];
  tags: string[];
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

  // @ViewChild('myCheckbox') private myCheckbox: MatCheckbox;

  allPaintTypesSelected: boolean;
  allPaintBrandsSelected: boolean;
  allPaintTagsSelected: boolean;
  allPaintColourFamiliesSelected: boolean;


  constructor(private paintToolsService: PaintToolsService, private formBuilder: FormBuilder, private formToolsService: FormToolsService) {
    // Create a new array with a form control for each order
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

    console.log(this.activeFilters)
    // console.log('selected paint types: ', selectedPaintTypes);
  }

  clearAll() {
    this.activeFilters = this.paintToolsService.filtersObj;
    this.form.reset();
  }

  selectAll() {
    this.selectAllTypes()
    this.selectAllTags()
    this.selectAllColourFamilies()
  }

  clearThis(category) {
    if (category === 'types') {
      this.form.controls.paintTypes.reset();
    } else if (category === 'tags') {
      this.form.controls.paintTags.reset();
    } else if (category === 'colours') {
      this.form.controls.paintColourFamilies.reset();
    }
  }

  selectAllTypes() {
    let arrLength = this.form.controls.paintTypes.value.length;
    let valuesArr = []
    for (let i = 0; i < arrLength; i++) {
      valuesArr.push(true)
    }
    this.form.controls.paintTypes.setValue(valuesArr);
  }

  selectAllTags() {
    let arrLength = this.form.controls.paintTags.value.length;
    let valuesArr = []
    for (let i = 0; i < arrLength; i++) {
      valuesArr.push(true)
    }
    this.form.controls.paintTags.setValue(valuesArr);
  }

  selectAllColourFamilies() {
    let arrLength = this.form.controls.paintColourFamilies.value.length;
    let valuesArr = []
    for (let i = 0; i < arrLength; i++) {
      valuesArr.push(true)
    }
    this.form.controls.paintColourFamilies.setValue(valuesArr);
  }

  selectThese(category) {
    // console.log(this.form)
    if (category === 'types') {
      this.selectAllTypes()
    } else if (category === 'tags') {
      this.selectAllTags()
    } else if (category === 'colours') {
      this.selectAllColourFamilies()
    }
  }

  ngOnInit() {

    this.types = this.paintToolsService.allTypes;
    this.tags = this.paintToolsService.allTags;
    this.activeFilters = this.paintToolsService.filtersObj;

  }

}
