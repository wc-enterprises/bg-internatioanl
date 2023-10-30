import { Component } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent {
  countries = [
    {
      name: 'Canada',
      imageUrl: '/assets/canadaimg.svg',
      iconUrl: '/assets/canadalogo.svg',
    },
    {
      name: ' France',
      imageUrl: '/assets/franceimg.svg',
      iconUrl: '/assets/francelogo.svg',
    },
    {
      name: 'USA',
      imageUrl: '/assets/usaimg.svg',
      iconUrl: '/assets/usalogo.svg',
    },
    {
      name: 'Australia',
      imageUrl: '/assets/australiaimg.svg',
      iconUrl: '/assets/australialogo.svg',
    },
    {
      name: 'Germany',
      imageUrl: '/assets/germanyimg.svg',
      iconUrl: '/assets/germanylogo.svg',
    },
    {
      name: 'UK',
      imageUrl: '/assets/ukimg.svg',
      iconUrl: '/assets/uklogo.svg',
    },
    {
      name: 'Ireland',
      imageUrl: '/assets/irelandimg.svg',
      iconUrl: '/assets/irelandlogo.svg',
    },
  ];
}
