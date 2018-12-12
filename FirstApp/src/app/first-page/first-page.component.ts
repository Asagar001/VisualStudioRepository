import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
first:string;
ssnInput:String;
maxLength:number;
  constructor(private router: Router) {}

  ngOnInit() {
    this.first = sessionStorage.getItem("firstpagedata");
  }
  onSearchChange(value) {
var res = value, //grabs the value
len = res.length, //grabs the length
max = 7, //sets a max chars
stars = len>4?'XXX-':'', //this provides the masking and formatting
result = stars+res.substring(5); //this is the result
this.maxLength=max; //setting the max length
this.ssnInput=result; //spits the value into the input
  }

}
