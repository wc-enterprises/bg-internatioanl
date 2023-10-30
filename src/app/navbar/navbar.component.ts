import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sidenavWidth: number = 0;
  viewportScroller: any;

  openNav(): void {
    this.sidenavWidth = 250; // Set the width when opening the side nav
  }

  closeNav(): void {
    this.sidenavWidth = 0; // Set the width to 0 when closing the side nav
  }
}
