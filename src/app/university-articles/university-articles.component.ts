import { Component } from '@angular/core';
import { articlesBasedOnCountry } from '../common-utils/util';

@Component({
  selector: 'app-university-articles',
  templateUrl: './university-articles.component.html',
  styleUrls: ['./university-articles.component.css'],
})
export class UniversityArticlesComponent {
  mainTitle = 'Where should you study abroad?';
  subHeading =
    'Find the perfect study abroad destination for you with our range of helpful guides, comparisons and interviews.';

  card1 = articlesBasedOnCountry[2].articles[0];

  buttonText = 'Check More Countries';

  countries = [
    articlesBasedOnCountry[0].articles[0],
    articlesBasedOnCountry[1].articles[0],
  ];
}
