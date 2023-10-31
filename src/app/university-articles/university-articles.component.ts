import { Component } from '@angular/core';

@Component({
  selector: 'app-university-articles',
  templateUrl: './university-articles.component.html',
  styleUrls: ['./university-articles.component.css'],
})
export class UniversityArticlesComponent {
  mainTitle = 'Where should you study abroad?';
  subHeading =
    'Find the perfect study abroad destination for you with our range of helpful guides, comparisons and interviews.';

  card1 = {
    title: 'Ten exciting careers you can have with a STEM degree',
    description:
      'With a degree in science, technology, engineering or mathematics, you’ll have a huge range of career options available to you. ',
    image: '/assets/university-article-img1.svg',
    logo: '/assets/francelogo.svg',
  };

  buttonText = 'Check More Countries';

  countries = [
    {
      title: 'Ten exciting careers you can have with a STEM degree',
      image: '/assets/university-article-img2.svg',
      logo: '/assets/australialogo.svg',
    },
    {
      title: 'Ten exciting careers you can have with a STEM degree',
      image: '/assets/university-article-img3.svg',
      logo: '/assets/canadalogo.svg',
    },
  ];
}
