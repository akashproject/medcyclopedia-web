import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/all-services/order.service';
import { WindowRefService } from 'src/app/window-ref.service';
import { DatePipe } from '@angular/common';
import { SnackbarService } from 'src/app/all-services/snackbar.service';




@Component({
  selector: 'app-expert-counselling',
  templateUrl: './expert-counselling.component.html',
  styleUrls: ['./expert-counselling.component.scss'],

})
export class ExpertCounsellingComponent implements OnInit {
  readioSelected: any;
  readioSelected2: any;
  readioSelected3: any;
  startdate: any;
  enddate: any;

  date: any;
  // time_flag : boolean = false;
  time_flag1: boolean = false;
  time_flag2: boolean = false;
  time_flag3: boolean = false;
  transform: any;
  disable_all: boolean = false;
  enterred_date: any;
  today: any;

  constructor(private winRef: WindowRefService, private orderservice: OrderService,
    public datepipe: DatePipe, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    //this.createRzpayOrder()
  }

  // dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
  //   this.startdate = dateRangeStart.value;
  //   this.enddate = dateRangeEnd.value;
  // }

  checkDateAndTime() {
    console.log(this.date);
    this.enterred_date = this.datepipe.transform(this.date, 'yyMMdd');
    console.log(this.enterred_date)

    let today_date = new Date();
    this.today = this.datepipe.transform(today_date, 'yyMMdd');
    console.log(this.today)

    if (this.enterred_date === this.today) {
      this.transform = this.datepipe.transform(today_date, 'HHMM');
      console.log(this.transform)
      if (Number.parseInt(this.transform) >= 1000) {
        this.time_flag1 = true;
        console.log("1")

      } else {
        this.time_flag1 = false; 

      }
      if (Number.parseInt(this.transform) >= 1300) {
        this.time_flag2 = true;
        console.log("2")


      } else {
        this.time_flag2 = false; 

      }
      if (Number.parseInt(this.transform) >= 2000) {
        this.time_flag3 = true;
        console.log("3")


      } else {
        this.time_flag3 = false; 
        

      }

      if(this.time_flag1 === false || this.time_flag2 === false || this.time_flag3 === false){
        this.disable_all = false;
      }else{
        this.disable_all = true;
      }
     
    }
    else if (this.enterred_date < this.today) {
      // console.log("this date is long gone")
      this.time_flag3 = true;
      this.time_flag3 = true;
      this.time_flag3 = true;
      this.disable_all = true;
      this.snackbar.openSnackBarWithTime("You have enterred a past date", 'close')

    } else if (this.enterred_date > this.today) {
      console.log("Future date")
      this.time_flag1 = false;
      this.time_flag2 = false;
      this.time_flag3 = false;
      this.disable_all = false;

    }



  }

  createRzpayOrder() {


    if (this.disable_all != true) {
      console.log(this.readioSelected)
      console.log(this.readioSelected2)
      console.log(this.readioSelected3)
      console.log("DAte ", this.date)
      console.log(this.enddate)
      this.payWithRazor(12);
    }
  }

  payWithRazor(val: any) {
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
    options.handler = ((response: any, error: any) => {
      options.response = response;
      console.log(response);
      let date = this.startdate;
      let time = this.readioSelected;
      let media = this.readioSelected2;
      let order_id = response.razorpay_payment_id;
      let language = this.readioSelected3;
      let payment_id = response.razorpay_payment_id;
      let payment_status = 'success';

      console.log(date, time, media, order_id, language, payment_id, payment_status);

      this.orderservice.createOrder(date, time, media, order_id, language, payment_id, payment_status).subscribe(res => {
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
