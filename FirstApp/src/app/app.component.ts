import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['first-page']);
    sessionStorage.setItem("firstpagedata","first page data");
  }
}
