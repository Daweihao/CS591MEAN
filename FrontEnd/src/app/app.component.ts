import {Component, Inject, Injectable, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FrontEnd';
  goToUrl(): void {
     this.document.location.href = 'http://localhost:3000/auth/google';
  }
  constructor(@Inject(DOCUMENT) private document: any) { }
  ngOnInit(): void {
  }
}

