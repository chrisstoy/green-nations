import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { ICountry } from '../view-models/country';
import { IFieldDefinition } from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: ICountry;
  countryDefinition: Array<IFieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true,
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Country Name',
      required: true,
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true,
    },
  ];

  errorMessage: string;
  operation: string;

  constructor(
    private dataService: AppDataService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.country = { id: 0, name: '', epiIndex: null };
    } else {
      this.dataService.getCountry(this.route.snapshot.params['id'])
        .subscribe((country: ICountry) => this.country = country);
    }
  }

  public createCountry(country: ICountry) {
    country.id = 0;
    this.errorMessage = null;
    this.dataService.createCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error creating country'
    );
  }

  public updateCountry(country: ICountry) {
    this.errorMessage = null;
    this.dataService.updateCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error updating country'
    );
  }

}
