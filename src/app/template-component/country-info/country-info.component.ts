import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountriesService } from 'src/app/all-services/countries.service';


@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  currentId:any;
  loc : any;
  country_id: string = "";
  allCountry: any = [];
  country : any = [];

  constructor(private route: ActivatedRoute,private router:Router,
    private location : Location,
    private countryservice : CountriesService) { }

  ngOnInit(): void {

    this.loc = this.location.getState();

    this.country_id = this.loc.country_id;

    console.log("The country id in country info is "+this.country_id);
    this.countryservice.getCountries().subscribe((data) => {
      console.log(data);
      // this.loaderservice.hideLoading();
      this.allCountry = data;
      // console.log(typeof(this.allCountry.id)+" "+typeof(this.country_id));
      this.country = this.allCountry.find((x : any) => x.id === this.country_id);
      console.log(this.country);
    });

    let id = this.route.snapshot.paramMap.get('id');
    this.currentId = id;

  }

  redirect(){
    this.router.navigate(['/fyc/fyi/abroad-ins-list', this.currentId]);
  }

}
