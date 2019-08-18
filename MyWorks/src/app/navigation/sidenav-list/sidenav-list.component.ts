import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  showMenuTab = false;
  showMenuAte = false;
  constructor() { }
  
  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  toggleMenuTab() {
    this.showMenuTab = !this.showMenuTab;
 }
 toggleMenuAte() {
  this.showMenuAte = !this.showMenuAte;
}
}
