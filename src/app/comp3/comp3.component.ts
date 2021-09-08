import { Component, OnInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y' 
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  html1 = 'Template <script>alert("Attacked")</script> <b>Syntax</b>';
  version = VERSION;
  ngOnInit() {
  }
  constructor(private announcer: LiveAnnouncer) {
    announcer.announce("Hey Google");
  }
  


  public announce() {
    console.log(" in an")
    this.announcer.announce("Hello world!");
  }
}

