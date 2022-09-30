import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-viewer-panel',
  templateUrl: './viewer-panel.component.html',
  styleUrls: ['./viewer-panel.component.css']
})

export class ViewerPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() timesBeenClicked:number = 0;

}
