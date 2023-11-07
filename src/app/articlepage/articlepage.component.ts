import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { T_COUNTRY_CODES, articlesBasedOnCountry } from '../common-utils/util';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css'],
})
export class ArticlepageComponent {
  data!: IArticle;
  countryCode!: T_COUNTRY_CODES;
  articleId!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      this.articleId = param.get('id') as string;
    });
    this.countryCode = this.route.snapshot.paramMap.get(
      'countryCode'
    ) as T_COUNTRY_CODES;

    if (this.articleId) {
      this.data = this.getArticleById(this.articleId);
    }
  }

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

  getArticleById(articleId: string): IArticle {
    return articlesBasedOnCountry
      .map((country) => country.articles)
      .reduce((acc, articles) => acc.concat(articles), [])
      .find((article) => article.id === articleId) as IArticle;
  }

  getListMap(data: string | string[]): string[] {
    if (!Array.isArray(data)) return [];
    return data;
  }

  getKeepReadingContents(id: string | undefined) {
    const countryArticles = articlesBasedOnCountry.filter((item) => {
      return item.country === this.countryCode;
    });

    if (!id) return countryArticles[0].articles;

    return countryArticles[0].articles.filter((item) => {
      return item.id !== id;
    });
  }

  navigateRoute(articleId: string) {
    console.log('called navigate route', articleId);
    this.router.navigateByUrl(
      `/country/${this.countryCode}/article/${articleId}`
    );
  }
}
export interface IArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  authorImage: string;
  authorRole: string;
  content: IArticleContent[];
  flagUrl: string;
}
export interface IArticleContent {
  type: 'heading' | 'subHeading' | 'paragraph' | 'list';
  text: string | string[];
}
