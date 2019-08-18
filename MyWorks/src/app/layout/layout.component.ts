import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../helpers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements AfterViewInit{

  constructor() { }

  ngAfterViewInit() {

    // initialize layout: handlers, menu ...
    Helpers.initLayout();

  }
}
