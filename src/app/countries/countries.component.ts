import { Component } from '@angular/core';
import { getCountry } from '../common-utils/util';

@Component({
  selector: 'app-university',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class UniversityComponent {
  getCountry(countryCode: string) {
    switch (countryCode) {
      case 'CA':
        return 'Canada';
      case 'USA':
        return 'USA';
      case 'IE':
        return 'Ireland';
      case 'AU':
        return 'Australia';
      case 'DE':
        return 'Germany';
      case 'UK':
        return 'United Kingdom';
      case 'FR':
        return 'France';
      default:
        return 'USA';
    }
  }

  countries = [
    {
      name: 'CA',
      imageUrl: '/assets/canadaimg.svg',
      iconUrl: '/assets/canadalogo.svg',
    },
    {
      name: 'FR',
      imageUrl: '/assets/franceimg.svg',
      iconUrl: '/assets/francelogo.svg',
    },
    {
      name: 'US',
      imageUrl: '/assets/usaimg.svg',
      iconUrl: '/assets/usalogo.svg',
    },
    {
      name: 'AU',
      imageUrl: '/assets/australiaimg.svg',
      iconUrl: '/assets/australialogo.svg',
    },
    {
      name: 'DE',
      imageUrl: '/assets/germanyimg.svg',
      iconUrl: '/assets/germanylogo.svg',
    },
    {
      name: 'UK',
      imageUrl: '/assets/ukimg.svg',
      iconUrl: '/assets/uklogo.svg',
    },
    {
      name: 'IE',
      imageUrl: '/assets/irelandimg.svg',
      iconUrl: '/assets/irelandlogo.svg',
    },
  ];
}
