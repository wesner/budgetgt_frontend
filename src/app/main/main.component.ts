import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  openLefBar: boolean = true;

  constructor() { }

  ngOnInit() {
  }



  leftBar(){
    if(this.openLefBar){
      $('.left-bar, .content').removeClass('openBar');
      $('.left-bar, .content').addClass('closeBar');
      this.openLefBar = false;
    }
    else{
      $('.left-bar, .content').removeClass('closeBar');
      $('.left-bar, .content').addClass('openBar');
      this.openLefBar = true;
    }
  }

}
