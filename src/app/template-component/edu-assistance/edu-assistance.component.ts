import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/all-services/bank.service';

@Component({
  selector: 'app-edu-assistance',
  templateUrl: './edu-assistance.component.html',
  styleUrls: ['./edu-assistance.component.scss']
})
export class EduAssistanceComponent implements OnInit {


  allbanks : any = [];
  bankdetails : any = [];

  pop:boolean = false;

  popOpen(bank : any){
    console.log(bank);
    this.bankdetails = bank;
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  constructor(private bankservice : BankService) { }

  ngOnInit(): void {

    this.bankservice.getBanks().subscribe((res) =>{
      console.log(res);
      this.allbanks = res;
    })

  }

}
