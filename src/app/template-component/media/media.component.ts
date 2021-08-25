import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/all-services/media.service';
import { SpinnerService } from 'src/app/all-services/spinner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  medias : any = [];
  uploadsUrl : any;

  constructor(private mediaService: MediaService,
    private spinner: SpinnerService,
    private router : Router) {
      this.uploadsUrl = environment.uploadsUrl;
     }

  ngOnInit(): void {

    this.spinner.show();
    this.mediaService.getMedia().subscribe(data =>{
      this.spinner.hide();
      this.medias = data;
      console.log(data);
    })
  }

  viewMedia(media : any){

    // this.router.navigate(['/media-inner'], {state : {media : media}})
  }

}
