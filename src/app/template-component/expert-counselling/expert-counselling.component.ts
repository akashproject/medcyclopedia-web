import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/all-services/order.service';
import { WindowRefService } from 'src/app/window-ref.service';



@Component({
  selector: 'app-expert-counselling',
  templateUrl: './expert-counselling.component.html',
  styleUrls: ['./expert-counselling.component.scss'],

})
export class ExpertCounsellingComponent implements OnInit {
  readioSelected:any;
  readioSelected2:any;
  readioSelected3:any;
  startdate:any;
  enddate:any;

  constructor(private winRef: WindowRefService,private orderservice:OrderService) { }

  ngOnInit(): void {
    //this.createRzpayOrder()
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.startdate = dateRangeStart.value;
    this.enddate = dateRangeEnd.value;
  }

  createRzpayOrder() {

    console.log(this.readioSelected)
    console.log(this.readioSelected2)
    console.log(this.readioSelected3)
    console.log(this.startdate)
    console.log(this.enddate)
    this.payWithRazor(12);
  }

  payWithRazor(val:any) {
    const options: any = {
      key: 'rzp_test_Ii0YAZ0ccSrcLs',
      key_secret: 'uI4QCdMjvVTQQJ1LGMVauW8R',
      amount: 49900, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: './assets/logo.png', // company logo or product image

      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response:any, error:any) => {
      options.response = response;
      console.log(response);
      let date = this.startdate;
      let time = this.readioSelected;
      let media = this.readioSelected2;
      let order_id = response.razorpay_payment_id;
      let language = this.readioSelected3;
      let payment_id = response.razorpay_payment_id;
      let payment_status = 'success';

      this.orderservice.createOrder(date,time,media,order_id,language,payment_id,payment_status).subscribe(res=>{
        console.log(res);
      })

    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }



}
