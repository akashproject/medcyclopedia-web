import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StatesService } from 'src/app/all-services/states.service';

@Component({
  selector: 'app-fyi',
  templateUrl: './fyi.component.html',
  styleUrls: ['./fyi.component.scss']
})
export class FyiComponent implements OnInit {
  readioSelected:any;
  showcontent:boolean=false;
  states:any;
  selectedState:any;
  showContent(){
    this.showcontent=this.readioSelected;
    console.log(this.readioSelected)
    console.log(this.selectedState)

    this.router.navigate(['/fyc/fyi/institute-list', this.route.snapshot.paramMap.get('id'),this.readioSelected,this.selectedState]);

  }

  someMethod(value: any){
    console.log(value);
    this.selectedState = value
  }


  constructor(private route: ActivatedRoute,private router:Router,private stateServices:StatesService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    this.stateServices.getStates().subscribe(res=>{

      this.states = res;

      console.log(this.states)

    })


  }


}
