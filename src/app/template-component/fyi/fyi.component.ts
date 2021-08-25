import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/all-services/snackbar.service';
import { StatesService } from 'src/app/all-services/states.service';

@Component({
  selector: 'app-fyi',
  templateUrl: './fyi.component.html',
  styleUrls: ['./fyi.component.scss']
})
export class FyiComponent implements OnInit {
  readioSelected: any;
  showcontent: boolean = false;
  states: any;
  selectedState: any;
  id: any;
  showContent() {
    this.showcontent = this.readioSelected;
    console.log(this.readioSelected)
    console.log(this.selectedState)

    console.log(this.id);



    this.router.navigate(['/fyc/fyi/institute-list', this.route.snapshot.paramMap.get('id'), this.readioSelected, this.selectedState]);




  }

  someMethod(value: any) {
    console.log(value);
    this.selectedState = value
  }


  constructor(private route: ActivatedRoute, private router: Router, private stateServices: StatesService,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    if (this.id === null) {
      this.snackbar.openSnackBarWithoutTime("Please select your course again", 'close')
    }

    this.stateServices.getStates().subscribe(res => {

      this.states = res;

      console.log(this.states)

    })


  }


}
