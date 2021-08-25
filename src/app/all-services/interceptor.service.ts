import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(private spinnerservice : SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    this.spinnerservice.show();

    return next.handle(req).pipe(
      finalize(() =>{
        this.spinnerservice.hide();
      })
    )

  }
}
