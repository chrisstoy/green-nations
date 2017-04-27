import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { ICountry } from '../view-models/country';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.scss']
})
export class CountryMaintComponent implements OnInit {

  countries: Array<ICountry>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(
    private dataService: AppDataService,
    private router: Router,
  ) {
    dataService.getCountries().subscribe((data) => this.countries = data );
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  deleteCountry(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCountry(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
    );
  }

  deleteCountryQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);
  }

  showCountryDetails(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }
  ngOnInit() {
  }

}
