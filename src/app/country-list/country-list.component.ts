import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { ICountry } from '../view-models/Country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  allCountries: Array<ICountry>;
  count = 0;
  countries: Array<ICountry>;

  constructor(
    private dataService: AppDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.dataService.getCountries().subscribe(
      countries => {
        this.allCountries = countries;

        this.count = this.route.snapshot.params['count'];
        this.updateList();
      });

    // subscribe to changes in the route params so we can update our display
    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
    });
  }

  updateList() {
    this.countries = this.count > 0 ? this.allCountries.slice(0, this.count) : this.allCountries;
  }

}
