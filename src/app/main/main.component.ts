import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  text: string;

  constructor(public beakpointObserver: BreakpointObserver){
  }

  ngOnInit(){
    // this.beakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Tablet, Breakpoints.Web]).subscribe(x=>{ this.changeLayout(); });

  }

  changeLayout():void{
    if(this.beakpointObserver.isMatched(Breakpoints.XSmall)){ /** Movil */
      this.removeClass("content","", true);
      this.addClass("content","movil");
    }
    else if(this.beakpointObserver.isMatched(Breakpoints.Tablet)){ /** Tableta */
      this.removeClass("content","", true);
      this.addClass("content","tablet");
    }
    else if(this.beakpointObserver.isMatched(Breakpoints.Web)){ /** Web */
      this.removeClass("content","", true);
      this.addClass("content","web");
    }
  }

  addClass(_selector:string, _class:string):void{
    let content = document.getElementById(_selector);
    content.classList.add(_class);
  }
  removeClass(_selector:string, _class:string, all?:boolean):void{
    let content = document.getElementById(_selector);
    if(all){ content.className = ""; }
    else{ content.classList.remove(_class); }
  }
  

}
