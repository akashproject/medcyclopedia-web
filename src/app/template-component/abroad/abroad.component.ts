import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/all-services/countries.service';

@Component({
  selector: 'app-abroad',
  templateUrl: './abroad.component.html',
  styleUrls: ['./abroad.component.scss']
})
export class AbroadComponent implements OnInit {

  countries:any;

  constructor(private countryService:CountriesService) { }

  ngOnInit(): void {

    this.countryService.getCountries().subscribe(res=>{
      this.countries = res;
      console.log(this.countries)
    })

  }

}
