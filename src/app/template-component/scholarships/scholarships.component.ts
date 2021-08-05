import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/all-services/scholarship.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {

  scholarships : any =[];
  constructor(private scholarshipservice : ScholarshipService) { }

  ngOnInit(): void {

    this.scholarshipservice.getShcolarships().subscribe((data : any) =>{
      console.log(data);
      this.scholarships = data;
    })

  }

}
