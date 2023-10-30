import { Component } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent {
  data: IArticleBasedOnCountry | undefined;
  constructor() {
    this.data = this.getArticlesOfACountry(this.getCountryCode('usa'));
  }

  getCountryCode(country: string) {
    switch (country) {
      case 'canada':
        return 'CA';
      case 'usa':
        return 'US';
      case 'france':
        return 'FR';
      default:
        return 'CA';
    }
  }

  getCountry(countryCode: string) {
    switch (countryCode) {
      case 'CA':
        return 'Canada';
      case 'US':
        return 'USA';
      default:
        return 'India';
    }
  }

  getArticlesOfACountry(countryCode: string) {
    return articlesBasedOnCountry.find((item) => item.country === countryCode);
  }
}

export interface IArticleBasedOnCountry {
  country: 'UK' | 'US' | 'IE' | 'DE' | 'FR' | 'CA' | 'AU';
  countryHeroImageUrl: string;
  educationTitle: string;
  educationDescription: string;
  flagUrl: string;
  articles: IArticle[];
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

const articlesBasedOnCountry: IArticleBasedOnCountry[] = [
  {
    country: 'CA',
    educationTitle: 'Study In Canada',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '',
    flagUrl: '/assets/canadalogo.svg',

    articles: [
      {
        id: 'a_1000',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/what-type-of-business.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: ' string',
        authorRole: 'string',
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
        ],
      },
      {
        id: 'a_1001',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/what-type-of-business.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: ' string',
        authorRole: 'string',
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
        ],
      },
    ],
  },
  {
    country: 'US',
    educationTitle: 'Study In US',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/usalogo.svg',

    articles: [
      {
        id: 'a_1002',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/university-article-img2.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: ' string',
        authorRole: 'string',
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
        ],
      },
      {
        id: 'a_1003',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/university-article-img3.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: ' string',
        authorRole: 'string',
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
        ],
      },
      {
        id: 'a_1004',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
      Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
      As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/university-article-img4.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: ' string',
        authorRole: 'string',
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
        ],
      },
    ],
  },
];
