import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
   
  }

  collapsemethod(){
    this.isCollapsed = true
  }

}
