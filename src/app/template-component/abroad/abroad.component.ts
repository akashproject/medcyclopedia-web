import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/all-services/countries.service';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-abroad',
  templateUrl: './abroad.component.html',
  styleUrls: ['./abroad.component.scss']
})
export class AbroadComponent implements OnInit {

  countries: any;
  access_token: any = [];

  constructor(private countryService: CountriesService,
    private signinservice: SigninService,
    private router: Router) { }

  ngOnInit(): void {

    this.access_token = this.signinservice.getCurrentUser();

    console.log(this.access_token);

    if (this.access_token !== null) {


      this.countryService.getCountries().subscribe(res => {
        this.countries = res;
        console.log(this.countries)
      })
    }

  }
  getCountryId(country_id: string) {

    this.router.navigate(['/country-info/' + country_id], { state: { country_id: country_id } })

  }

  // routerLink="/country-info/{{item.id}}"



}
