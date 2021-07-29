import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  constructor() { }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }


  ngOnInit(): void {
  }

}
