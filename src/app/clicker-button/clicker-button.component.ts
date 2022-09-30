import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker-button',
  templateUrl: './clicker-button.component.html',
  styleUrls: ['./clicker-button.component.css']
})

export class ClickerButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tc:number = 0;
  @Output() timesClicked = new EventEmitter<number>();

  //  Increment the click 
  incrementClick(){
    this.tc += 1;
    this.sendTimesClicked(this.tc);
  }

  //  Send the click
  sendTimesClicked(tcm:number){
    this.timesClicked.emit(tcm);
  }

}
