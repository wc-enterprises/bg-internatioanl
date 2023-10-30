import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { IArticleBasedOnCountry } from '../country-details/country-details.component';

const articlesBasedOnCountry: IArticleBasedOnCountry[] = [
  {
    country: 'CA',
    educationTitle: 'Study In Canada',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaimg.svg',
    flagUrl: '/assets/canadalogo.svg',

    articles: [
      {
        id: 'a_1000',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/article-img.svg',
        author: 'Arun Kumar',

        date: 'October 24, 2023',
        authorImage: '/assets/article-writer-img.svg',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'Accounting',
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyze information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: [
              `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Once you’ve graduated you can choose to specialize in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
            ],
          },
          {
            type: 'heading',
            text: `Business management/administration`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Finance`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Marketing`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Supply chain management`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Business analytics`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
        ],
      },
      {
        id: 'a_1001',
        title: 'Ten exciting careers you can have with a STEM degree',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/article-img.svg',
        author: 'Arun Kumar',

        date: 'October 24, 2023',
        authorImage: '/assets/article-writer-img.svg',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'Accounting',
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyze information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: [
              `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Once you’ve graduated you can choose to specialize in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
            ],
          },
          {
            type: 'heading',
            text: `Business management/administration`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Finance`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Marketing`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Supply chain management`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Business analytics`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
        ],
      },
      {
        id: 'a_1002',
        title: 'Ten exciting careers you can have with a STEM degree',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/article-img.svg',
        author: 'Arun Kumar',

        date: 'October 24, 2023',
        authorImage: '/assets/article-writer-img.svg',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'Accounting',
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyze information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: [
              `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Once you’ve graduated you can choose to specialize in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
            ],
          },
          {
            type: 'heading',
            text: `Business management/administration`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Finance`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Marketing`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Supply chain management`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Business analytics`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
        ],
      },
      {
        id: 'a_1003',
        title: 'Ten exciting careers you can have with a STEM degree',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/article-img.svg',
        author: 'Arun Kumar',

        date: 'October 24, 2023',
        authorImage: '/assets/article-writer-img.svg',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'Accounting',
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyze information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: [
              `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Once you’ve graduated you can choose to specialize in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
            ],
          },
          {
            type: 'heading',
            text: `Business management/administration`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Finance`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Marketing`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Supply chain management`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
          {
            type: 'heading',
            text: `Business analytics`,
          },
          {
            type: 'list',
            text: [
              'Ideal if you enjoy working with numbers and data',
              'Requires an ability to analyse information carefully and be detail-oriented',
              'Communication skills also essential as your work must be understood clearly by others',
            ],
          },
          {
            type: 'paragraph',
            text: `If you enjoy crunching numbers, accounting could be the right business degree for you.
            However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.
            Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.
            Once you’ve graduated you can choose to specialise in roles that interest you such as bookkeeping, taxes, payroll services or you can start your own accounting business once you’ve gained enough experience.`,
          },
        ],
      },
    ],
  },
];
@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css'],
})
export class ArticlepageComponent {
  data: IArticle;

  constructor() {
    const articleId = 'a_1000';

    this.data = this.getArticleById(articleId);
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
    console.log('received request to get keep reading content', id);
    if (!id) return articlesBasedOnCountry[0].articles;
    return articlesBasedOnCountry[0].articles.filter((item) => {
      return item.id !== id;
    });
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
