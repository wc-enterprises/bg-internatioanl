import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IArticleBasedOnCountry,
  T_COUNTRY_CODES,
  articlesBasedOnCountry,
  getCountry,
} from '../common-utils/util';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent {
  data: IArticleBasedOnCountry | undefined;
  getCountry: any;
  countryCode!: T_COUNTRY_CODES;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getCountry = getCountry;

    this.countryCode = this.route.snapshot.paramMap.get(
      'countryCode'
    ) as T_COUNTRY_CODES;
    if (this.countryCode)
      this.data = this.getArticlesOfACountry(this.countryCode);
  }

  getCountryCode(country: string) {
    switch (country) {
      case 'canada':
        return 'CA';
      case 'united-states-of-america':
        return 'USA';
      case 'france':
        return 'FR';
      case 'australia':
        return 'AU';
      case 'germany':
        return 'DE';
      case 'ireland':
        return 'IE';
      case 'united-kingdom':
        return 'UK';
      default:
        return 'CA';
    }
  }

  getArticlesOfACountry(countryCode: string) {
    return articlesBasedOnCountry.find((item) => item.country === countryCode);
  }
}
