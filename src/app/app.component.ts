import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'componentClicker1';

  showClicks:number = 0;

  //  Get the clicks
  getClicks(tcm:number){
    this.showClicks = tcm;
  }

}
