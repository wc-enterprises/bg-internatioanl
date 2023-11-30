export function getCountry(countryCode: string) {
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

export type T_COUNTRY_CODES = 'UK' | 'US' | 'IE' | 'DE' | 'FR' | 'CA' | 'AU';

export interface IArticleBasedOnCountry {
  country: T_COUNTRY_CODES;
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

export const articlesBasedOnCountry: IArticleBasedOnCountry[] = [
  {
    country: 'CA',
    educationTitle: 'Study In Canada',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/canadalogo.svg',

    articles: [
      {
        id: 'a_1000',
        title: 'What type of business degree should you study?',
        description: `Often described as a versatile discipline, studying business will teach you in-demand skills that can be applied to almost any industry.
        Whether you want to start your own company or use your analytical skills to make smart investment decisions, a business degree can provide you with the foundation to pursue your career aspirations.
        As one of the most popular subjects offered at higher education institutions, it’s unsurprising that there are many different types of business degrees you can choose – but which one is right for you?`,
        imageUrl: '/assets/university-article-img2.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: '/assets/user-icon.png',
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
        imageUrl: '/assets/university-article-img2.svg',
        author: 'Arun Kumar',
        date: 'October 24, 2023',
        authorImage: '/assets/user-icon.png',
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
    educationTitle: 'Study In USA',
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
        authorImage: '/assets/user-icon.png',
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
        authorImage: '/assets/user-icon.png',
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
        authorImage: '/assets/user-icon.png',
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
    country: 'UK',
    educationTitle: 'Study In UK',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/uklogo.svg',

    articles: [
      {
        id: 'a_1003',
        title: 'Seven reasons to study Accounting & Finance',
        description: `There are many good reasons to study Accounting & Finance at university. Find out how this path can help you, both while you’re studying at uni and with your future career.`,
        imageUrl: '/assets/accounts&finance-img.svg',
        author: 'Tamsin Mosse',

        date: '03 Nov 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Excellent graduate prospects',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              // `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              // `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              // `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Look at our Accounting & Finance subject table, and you can see that the graduate prospects scores are pretty high. This means that students stand a decent chance of being professionally employed within six months of graduating`,
            ],
          },
          {
            type: 'heading',
            text: `The world needs accountants`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The world of money is constantly evolving, so accountants and financial professionals must move with the times to stay up to date. Despite this, money isn't going anywhere, and it's likely that there will always be a demand for professional number crunchers. `,
          },
          {
            type: 'heading',
            text: `You could work in any industry`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accountants record, classify, summarise, interpret and communicate the financial information about a business. You can apply this to any company, in any field, industry and sector. In many jobs, you could be working with a variety of clients, thus working across several different industries. `,
          },
          {
            type: 'heading',
            text: `Internationally diverse cohort`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Subjects that fall under the broad spectrum of business and administrative studies, including Accounting & Finance, benefit from the most culturally diverse student cohort of all. Over 55,000 of the UK's students in this area come from overseas. A diverse cohort will not only expose you to people of different cultures but can provide you with an international network of contacts. `,
          },
          {
            type: 'heading',
            text: `Joint honours`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance complements other subject areas well, particularly those that fall under the large umbrella of business. Several universities offer Accounting & Finance joint honours degree courses, so you have the option to explore other passions. Whether you want to become a broad businessperson or an accountant with knowledge of a foreign language (useful in a global marketplace), there are plenty of combinations to choose from. 
  
              `,
          },
          {
            type: 'heading',
            text: `Real-life application`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance courses often take a highly practical approach. Universities ensure their students learn by doing through simulated and real-life opportunities where you get to manage genuine business accounts.  `,
          },
          {
            type: 'heading',
            text: `Year-abroad opportunities`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Many Accounting & Finance courses have an optional placement year, so you could come out of university with a degree and a year of industry experience. Overseas experience could provide you with a deeper understanding of the global economy, an experience of other cultures, and extra language skills.   `,
          },
        ],
      },
      {
        id: 'a_101',
        title: 'Cost of living in London as a student',
        description: `The cost of living in London can be significantly higher than the rest of the UK. This includes accommodation, groceries, travel and the cost of a night out.`,
        imageUrl: '/assets/lifestyle-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Living in London ',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `As the home of many internationally renowned universities, London welcomes hundreds of thousands of students each year. While the capital has a lot going for it, the higher cost of living can put some students off.`,
              `However, through careful planning and strict budgeting, you can still enjoy a fulfilling university experience in one of the best cities in the world. Living in London can be affordable if you know how.`,
            ],
          },
          {
            type: 'heading',
            text: `Cost of living crisis`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The cost-of-living crisis is creating significant challenges for students studying in the UK, making it increasingly difficult to balance academic and financial responsibilities. Rising prices and stagnant wages mean many students are struggling to cover the high costs of rent, food and course materials. It can also make it difficult to afford extracurricular activities and travel. These issues are exasperated in London because it’s a more expensive place to live anyway. In a recent survey, the National Union of Students found that 92% of students felt the cost of living crisis was affecting their mental health and urged the government to do more to support students financially. `,
          },
          {
            type: 'heading',
            text: `Student accommodation costs`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Where you'll live should be one of your first considerations when you accept your place at a university. The cost of accommodation is elevated in London, with the National Union of Students (NUS) estimating an average increased rent spend of around £1,200 per year when compared with the rest of the UK.`,
              `The cost of housing in London varies depending on the area you choose, with furnished accommodation in an expensive area costing around £2,500 per month and a furnished studio flat in an average area costing around £1,200 per month`,
              `Many of London’s top universities are in central London, so living in an average area can incur extra travel costs. It may be worth looking at university halls, at least for the first year. This will still be more expensive than other parts of the country at £178 per week on average, but significantly cheaper than private rented accommodation.`,
              `Remember that you can apply for a maintenance loan to help you with these living costs. How much you get willl depend on your household income. Due to London's inflated rent prices, students living away from home in London can borrow more money than others. These students can borrow up to £12,382 in the 2021/22 academic year.`,
            ],
          },
          {
            type: 'heading',
            text: `Getting around`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `London caters very well for students in terms of discounts and special offers on public transport, with most favouring either buses or the London Underground.`,
              `You can register for a student Oyster card online to get a 30% discount on all your journeys throughout the year. To do so, you must be aged 18 or over, be living at a London address during term time, and provide proof of your university acceptance.`,
              `Oyster cards must be ‘touched in’ and ‘touched out’ at the beginning and end of each trip and can be topped up when necessary to ensure you have enough money to cover your journeys.`,
              `Of course, if you're living near your university, you can always walk or cycle in, even receiving a 20% student discount on Londons hire bikes. You should be able to find this and many other discounted offers at your freshers' week or on the NUS website. `,
            ],
          },
          {
            type: 'heading',
            text: `Student living costs in London`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `How much you spend on food, drinks and socialising is completely down to you, but to get the most out of your time and money, budgeting is important.`,
              `When you arrive at your accommodation, you should look around to find where you'll get the best value on your weekly shopping. Many of the cheaper supermarkets where you live will also be relatively cheaper in London too.`,
              `As far as going out is concerned, as a general rule, things will get more expensive the closer you get to the city centre. A night out, or even going to the cinema, can get very pricey so it’s your choice whether you want to have the occasional fancy evening in Central London, or opt for socialising more often but sticking to the cheaper areas.`,
              `Discount code websites and checking out city listings can help you find affordable, and sometimes free, nights out.
  
                `,
            ],
          },
        ],
      },
      {
        id: 'a_102',
        title: 'Whats a university open day?',
        description: `University open days are an opportunity to gather more information about an institution, experience the campus, and meet current students and staff.`,
        imageUrl: '/assets/collegelife-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'What are university open days all about?',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Open days are organised by universities to give you the chance to visit and experience the university first hand. They help you to make decisions on what and where you'd like to study and can usually tell you more about a uni than a prospectus.`,
              `Universities run open days throughout the year and can occur any day of the week, even on weekends. Many universities will hold their open days on campus this year but may offer virtual open days and events as well.  `,
            ],
          },
          {
            type: 'heading',
            text: `What’s there to do at an open day?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `You have the opportunity to see what the campus and local area is like. You can also talk to staff and current students to discover what university life is like. Open days also give parents and guardians the chance to visit universities so they can help students make the right decisions. `,
              `You can attend talks and presentations about the university, departments, courses, student finance and more. Many universities host workshops and taster sessions so you can have an idea of what the course will be like. There’ll also be tours around the campus, whether the open day is in person or virtual, which often include visits to available student accommodation.`,
            ],
          },
          {
            type: 'heading',
            text: `When do universities have open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Dates for university open days will vary from uni to uni. Open days and virtual events can take place throughout the whole year, but most are held between June and October. You can find any upcoming university open days or virtual events on our website, or visit the university's website.`,
            ],
          },
          {
            type: 'heading',
            text: `Do parents go to university open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Usually students will bring either a parent, both parents or a guardian to an open day. Having someone accompany you is very worthwhile, as they may notice things about the campus or course that you don't. They can also take down notes in any talks or seminars you attend, picking up any key information you may miss.`,
            ],
          },
          {
            type: 'heading',
            text: `Are there postgraduate open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Many universities run dedicated open days for postgraduate applicants, giving you a great opportunity to inspect the campus and facilities. You’ll also get the chance to ask any specific questions you have about the university's research credentials, tutors and course leaders, funding options, or the type of course you’re interested in studying.`,
            ],
          },
        ],
      },
    ],
  },
  {
    country: 'FR',
    educationTitle: 'Study In France',
    educationDescription: `The france is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/uklogo.svg',

    articles: [
      {
        id: 'fr_001',
        title: 'Seven reasons to study Accounting & Finance',
        description: `There are many good reasons to study Accounting & Finance at university. Find out how this path can help you, both while you’re studying at uni and with your future career.`,
        imageUrl: '/assets/accounts&finance-img.svg',
        author: 'Tamsin Mosse',

        date: '03 Nov 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Excellent graduate prospects',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              // `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              // `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              // `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Look at our Accounting & Finance subject table, and you can see that the graduate prospects scores are pretty high. This means that students stand a decent chance of being professionally employed within six months of graduating`,
            ],
          },
          {
            type: 'heading',
            text: `The world needs accountants`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The world of money is constantly evolving, so accountants and financial professionals must move with the times to stay up to date. Despite this, money isn't going anywhere, and it's likely that there will always be a demand for professional number crunchers. `,
          },
          {
            type: 'heading',
            text: `You could work in any industry`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accountants record, classify, summarise, interpret and communicate the financial information about a business. You can apply this to any company, in any field, industry and sector. In many jobs, you could be working with a variety of clients, thus working across several different industries. `,
          },
          {
            type: 'heading',
            text: `Internationally diverse cohort`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Subjects that fall under the broad spectrum of business and administrative studies, including Accounting & Finance, benefit from the most culturally diverse student cohort of all. Over 55,000 of the UK's students in this area come from overseas. A diverse cohort will not only expose you to people of different cultures but can provide you with an international network of contacts. `,
          },
          {
            type: 'heading',
            text: `Joint honours`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance complements other subject areas well, particularly those that fall under the large umbrella of business. Several universities offer Accounting & Finance joint honours degree courses, so you have the option to explore other passions. Whether you want to become a broad businessperson or an accountant with knowledge of a foreign language (useful in a global marketplace), there are plenty of combinations to choose from. 
  
              `,
          },
          {
            type: 'heading',
            text: `Real-life application`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance courses often take a highly practical approach. Universities ensure their students learn by doing through simulated and real-life opportunities where you get to manage genuine business accounts.  `,
          },
          {
            type: 'heading',
            text: `Year-abroad opportunities`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Many Accounting & Finance courses have an optional placement year, so you could come out of university with a degree and a year of industry experience. Overseas experience could provide you with a deeper understanding of the global economy, an experience of other cultures, and extra language skills.   `,
          },
        ],
      },
      {
        id: 'fr_002',
        title: 'Cost of living in London as a student',
        description: `The cost of living in London can be significantly higher than the rest of the UK. This includes accommodation, groceries, travel and the cost of a night out.`,
        imageUrl: '/assets/lifestyle-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Living in London ',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `As the home of many internationally renowned universities, London welcomes hundreds of thousands of students each year. While the capital has a lot going for it, the higher cost of living can put some students off.`,
              `However, through careful planning and strict budgeting, you can still enjoy a fulfilling university experience in one of the best cities in the world. Living in London can be affordable if you know how.`,
            ],
          },
          {
            type: 'heading',
            text: `Cost of living crisis`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The cost-of-living crisis is creating significant challenges for students studying in the UK, making it increasingly difficult to balance academic and financial responsibilities. Rising prices and stagnant wages mean many students are struggling to cover the high costs of rent, food and course materials. It can also make it difficult to afford extracurricular activities and travel. These issues are exasperated in London because it’s a more expensive place to live anyway. In a recent survey, the National Union of Students found that 92% of students felt the cost of living crisis was affecting their mental health and urged the government to do more to support students financially. `,
          },
          {
            type: 'heading',
            text: `Student accommodation costs`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Where you'll live should be one of your first considerations when you accept your place at a university. The cost of accommodation is elevated in London, with the National Union of Students (NUS) estimating an average increased rent spend of around £1,200 per year when compared with the rest of the UK.`,
              `The cost of housing in London varies depending on the area you choose, with furnished accommodation in an expensive area costing around £2,500 per month and a furnished studio flat in an average area costing around £1,200 per month`,
              `Many of London’s top universities are in central London, so living in an average area can incur extra travel costs. It may be worth looking at university halls, at least for the first year. This will still be more expensive than other parts of the country at £178 per week on average, but significantly cheaper than private rented accommodation.`,
              `Remember that you can apply for a maintenance loan to help you with these living costs. How much you get willl depend on your household income. Due to London's inflated rent prices, students living away from home in London can borrow more money than others. These students can borrow up to £12,382 in the 2021/22 academic year.`,
            ],
          },
          {
            type: 'heading',
            text: `Getting around`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `London caters very well for students in terms of discounts and special offers on public transport, with most favouring either buses or the London Underground.`,
              `You can register for a student Oyster card online to get a 30% discount on all your journeys throughout the year. To do so, you must be aged 18 or over, be living at a London address during term time, and provide proof of your university acceptance.`,
              `Oyster cards must be ‘touched in’ and ‘touched out’ at the beginning and end of each trip and can be topped up when necessary to ensure you have enough money to cover your journeys.`,
              `Of course, if you're living near your university, you can always walk or cycle in, even receiving a 20% student discount on Londons hire bikes. You should be able to find this and many other discounted offers at your freshers' week or on the NUS website. `,
            ],
          },
          {
            type: 'heading',
            text: `Student living costs in London`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `How much you spend on food, drinks and socialising is completely down to you, but to get the most out of your time and money, budgeting is important.`,
              `When you arrive at your accommodation, you should look around to find where you'll get the best value on your weekly shopping. Many of the cheaper supermarkets where you live will also be relatively cheaper in London too.`,
              `As far as going out is concerned, as a general rule, things will get more expensive the closer you get to the city centre. A night out, or even going to the cinema, can get very pricey so it’s your choice whether you want to have the occasional fancy evening in Central London, or opt for socialising more often but sticking to the cheaper areas.`,
              `Discount code websites and checking out city listings can help you find affordable, and sometimes free, nights out.
  
                `,
            ],
          },
        ],
      },
      {
        id: 'fr_003',
        title: 'Whats a university open day?',
        description: `University open days are an opportunity to gather more information about an institution, experience the campus, and meet current students and staff.`,
        imageUrl: '/assets/collegelife-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'What are university open days all about?',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Open days are organised by universities to give you the chance to visit and experience the university first hand. They help you to make decisions on what and where you'd like to study and can usually tell you more about a uni than a prospectus.`,
              `Universities run open days throughout the year and can occur any day of the week, even on weekends. Many universities will hold their open days on campus this year but may offer virtual open days and events as well.  `,
            ],
          },
          {
            type: 'heading',
            text: `What’s there to do at an open day?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `You have the opportunity to see what the campus and local area is like. You can also talk to staff and current students to discover what university life is like. Open days also give parents and guardians the chance to visit universities so they can help students make the right decisions. `,
              `You can attend talks and presentations about the university, departments, courses, student finance and more. Many universities host workshops and taster sessions so you can have an idea of what the course will be like. There’ll also be tours around the campus, whether the open day is in person or virtual, which often include visits to available student accommodation.`,
            ],
          },
          {
            type: 'heading',
            text: `When do universities have open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Dates for university open days will vary from uni to uni. Open days and virtual events can take place throughout the whole year, but most are held between June and October. You can find any upcoming university open days or virtual events on our website, or visit the university's website.`,
            ],
          },
          {
            type: 'heading',
            text: `Do parents go to university open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Usually students will bring either a parent, both parents or a guardian to an open day. Having someone accompany you is very worthwhile, as they may notice things about the campus or course that you don't. They can also take down notes in any talks or seminars you attend, picking up any key information you may miss.`,
            ],
          },
          {
            type: 'heading',
            text: `Are there postgraduate open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Many universities run dedicated open days for postgraduate applicants, giving you a great opportunity to inspect the campus and facilities. You’ll also get the chance to ask any specific questions you have about the university's research credentials, tutors and course leaders, funding options, or the type of course you’re interested in studying.`,
            ],
          },
        ],
      },
    ],
  },
  {
    country: 'DE',
    educationTitle: 'Study In Germany',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/uklogo.svg',

    articles: [
      {
        id: 'de_001',
        title: 'Seven reasons to study Accounting & Finance',
        description: `There are many good reasons to study Accounting & Finance at university. Find out how this path can help you, both while you’re studying at uni and with your future career.`,
        imageUrl: '/assets/accounts&finance-img.svg',
        author: 'Tamsin Mosse',

        date: '03 Nov 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Excellent graduate prospects',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              // `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              // `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              // `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Look at our Accounting & Finance subject table, and you can see that the graduate prospects scores are pretty high. This means that students stand a decent chance of being professionally employed within six months of graduating`,
            ],
          },
          {
            type: 'heading',
            text: `The world needs accountants`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The world of money is constantly evolving, so accountants and financial professionals must move with the times to stay up to date. Despite this, money isn't going anywhere, and it's likely that there will always be a demand for professional number crunchers. `,
          },
          {
            type: 'heading',
            text: `You could work in any industry`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accountants record, classify, summarise, interpret and communicate the financial information about a business. You can apply this to any company, in any field, industry and sector. In many jobs, you could be working with a variety of clients, thus working across several different industries. `,
          },
          {
            type: 'heading',
            text: `Internationally diverse cohort`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Subjects that fall under the broad spectrum of business and administrative studies, including Accounting & Finance, benefit from the most culturally diverse student cohort of all. Over 55,000 of the UK's students in this area come from overseas. A diverse cohort will not only expose you to people of different cultures but can provide you with an international network of contacts. `,
          },
          {
            type: 'heading',
            text: `Joint honours`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance complements other subject areas well, particularly those that fall under the large umbrella of business. Several universities offer Accounting & Finance joint honours degree courses, so you have the option to explore other passions. Whether you want to become a broad businessperson or an accountant with knowledge of a foreign language (useful in a global marketplace), there are plenty of combinations to choose from. 
  
              `,
          },
          {
            type: 'heading',
            text: `Real-life application`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance courses often take a highly practical approach. Universities ensure their students learn by doing through simulated and real-life opportunities where you get to manage genuine business accounts.  `,
          },
          {
            type: 'heading',
            text: `Year-abroad opportunities`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Many Accounting & Finance courses have an optional placement year, so you could come out of university with a degree and a year of industry experience. Overseas experience could provide you with a deeper understanding of the global economy, an experience of other cultures, and extra language skills.   `,
          },
        ],
      },
      {
        id: 'de_002',
        title: 'Cost of living in London as a student',
        description: `The cost of living in London can be significantly higher than the rest of the UK. This includes accommodation, groceries, travel and the cost of a night out.`,
        imageUrl: '/assets/lifestyle-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Living in London ',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `As the home of many internationally renowned universities, London welcomes hundreds of thousands of students each year. While the capital has a lot going for it, the higher cost of living can put some students off.`,
              `However, through careful planning and strict budgeting, you can still enjoy a fulfilling university experience in one of the best cities in the world. Living in London can be affordable if you know how.`,
            ],
          },
          {
            type: 'heading',
            text: `Cost of living crisis`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The cost-of-living crisis is creating significant challenges for students studying in the UK, making it increasingly difficult to balance academic and financial responsibilities. Rising prices and stagnant wages mean many students are struggling to cover the high costs of rent, food and course materials. It can also make it difficult to afford extracurricular activities and travel. These issues are exasperated in London because it’s a more expensive place to live anyway. In a recent survey, the National Union of Students found that 92% of students felt the cost of living crisis was affecting their mental health and urged the government to do more to support students financially. `,
          },
          {
            type: 'heading',
            text: `Student accommodation costs`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Where you'll live should be one of your first considerations when you accept your place at a university. The cost of accommodation is elevated in London, with the National Union of Students (NUS) estimating an average increased rent spend of around £1,200 per year when compared with the rest of the UK.`,
              `The cost of housing in London varies depending on the area you choose, with furnished accommodation in an expensive area costing around £2,500 per month and a furnished studio flat in an average area costing around £1,200 per month`,
              `Many of London’s top universities are in central London, so living in an average area can incur extra travel costs. It may be worth looking at university halls, at least for the first year. This will still be more expensive than other parts of the country at £178 per week on average, but significantly cheaper than private rented accommodation.`,
              `Remember that you can apply for a maintenance loan to help you with these living costs. How much you get willl depend on your household income. Due to London's inflated rent prices, students living away from home in London can borrow more money than others. These students can borrow up to £12,382 in the 2021/22 academic year.`,
            ],
          },
          {
            type: 'heading',
            text: `Getting around`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `London caters very well for students in terms of discounts and special offers on public transport, with most favouring either buses or the London Underground.`,
              `You can register for a student Oyster card online to get a 30% discount on all your journeys throughout the year. To do so, you must be aged 18 or over, be living at a London address during term time, and provide proof of your university acceptance.`,
              `Oyster cards must be ‘touched in’ and ‘touched out’ at the beginning and end of each trip and can be topped up when necessary to ensure you have enough money to cover your journeys.`,
              `Of course, if you're living near your university, you can always walk or cycle in, even receiving a 20% student discount on Londons hire bikes. You should be able to find this and many other discounted offers at your freshers' week or on the NUS website. `,
            ],
          },
          {
            type: 'heading',
            text: `Student living costs in London`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `How much you spend on food, drinks and socialising is completely down to you, but to get the most out of your time and money, budgeting is important.`,
              `When you arrive at your accommodation, you should look around to find where you'll get the best value on your weekly shopping. Many of the cheaper supermarkets where you live will also be relatively cheaper in London too.`,
              `As far as going out is concerned, as a general rule, things will get more expensive the closer you get to the city centre. A night out, or even going to the cinema, can get very pricey so it’s your choice whether you want to have the occasional fancy evening in Central London, or opt for socialising more often but sticking to the cheaper areas.`,
              `Discount code websites and checking out city listings can help you find affordable, and sometimes free, nights out.
  
                `,
            ],
          },
        ],
      },
      {
        id: 'de_003',
        title: 'Whats a university open day?',
        description: `University open days are an opportunity to gather more information about an institution, experience the campus, and meet current students and staff.`,
        imageUrl: '/assets/collegelife-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'What are university open days all about?',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Open days are organised by universities to give you the chance to visit and experience the university first hand. They help you to make decisions on what and where you'd like to study and can usually tell you more about a uni than a prospectus.`,
              `Universities run open days throughout the year and can occur any day of the week, even on weekends. Many universities will hold their open days on campus this year but may offer virtual open days and events as well.  `,
            ],
          },
          {
            type: 'heading',
            text: `What’s there to do at an open day?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `You have the opportunity to see what the campus and local area is like. You can also talk to staff and current students to discover what university life is like. Open days also give parents and guardians the chance to visit universities so they can help students make the right decisions. `,
              `You can attend talks and presentations about the university, departments, courses, student finance and more. Many universities host workshops and taster sessions so you can have an idea of what the course will be like. There’ll also be tours around the campus, whether the open day is in person or virtual, which often include visits to available student accommodation.`,
            ],
          },
          {
            type: 'heading',
            text: `When do universities have open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Dates for university open days will vary from uni to uni. Open days and virtual events can take place throughout the whole year, but most are held between June and October. You can find any upcoming university open days or virtual events on our website, or visit the university's website.`,
            ],
          },
          {
            type: 'heading',
            text: `Do parents go to university open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Usually students will bring either a parent, both parents or a guardian to an open day. Having someone accompany you is very worthwhile, as they may notice things about the campus or course that you don't. They can also take down notes in any talks or seminars you attend, picking up any key information you may miss.`,
            ],
          },
          {
            type: 'heading',
            text: `Are there postgraduate open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Many universities run dedicated open days for postgraduate applicants, giving you a great opportunity to inspect the campus and facilities. You’ll also get the chance to ask any specific questions you have about the university's research credentials, tutors and course leaders, funding options, or the type of course you’re interested in studying.`,
            ],
          },
        ],
      },
    ],
  },
  {
    country: 'IE',
    educationTitle: 'Study In Ireland',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/uklogo.svg',

    articles: [
      {
        id: 'ie_001',
        title: 'Seven reasons to study Accounting & Finance',
        description: `There are many good reasons to study Accounting & Finance at university. Find out how this path can help you, both while you’re studying at uni and with your future career.`,
        imageUrl: '/assets/accounts&finance-img.svg',
        author: 'Tamsin Mosse',

        date: '03 Nov 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Excellent graduate prospects',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              // `If you enjoy crunching numbers, accounting could be the right business degree for you.`,
              // `However, it’s not just number crunching on your own all day - accountants also need solid communication and critical thinking skills to talk about what the numbers mean and suggest areas of improvement in the business.`,
              // `Earning a bachelor’s degree in accounting is one way to become a certified chartered accountant. Examples of modules you may study include principles of taxation, financial reporting and microeconomics.`,
              `Look at our Accounting & Finance subject table, and you can see that the graduate prospects scores are pretty high. This means that students stand a decent chance of being professionally employed within six months of graduating`,
            ],
          },
          {
            type: 'heading',
            text: `The world needs accountants`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The world of money is constantly evolving, so accountants and financial professionals must move with the times to stay up to date. Despite this, money isn't going anywhere, and it's likely that there will always be a demand for professional number crunchers. `,
          },
          {
            type: 'heading',
            text: `You could work in any industry`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accountants record, classify, summarise, interpret and communicate the financial information about a business. You can apply this to any company, in any field, industry and sector. In many jobs, you could be working with a variety of clients, thus working across several different industries. `,
          },
          {
            type: 'heading',
            text: `Internationally diverse cohort`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Subjects that fall under the broad spectrum of business and administrative studies, including Accounting & Finance, benefit from the most culturally diverse student cohort of all. Over 55,000 of the UK's students in this area come from overseas. A diverse cohort will not only expose you to people of different cultures but can provide you with an international network of contacts. `,
          },
          {
            type: 'heading',
            text: `Joint honours`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance complements other subject areas well, particularly those that fall under the large umbrella of business. Several universities offer Accounting & Finance joint honours degree courses, so you have the option to explore other passions. Whether you want to become a broad businessperson or an accountant with knowledge of a foreign language (useful in a global marketplace), there are plenty of combinations to choose from. 
  
              `,
          },
          {
            type: 'heading',
            text: `Real-life application`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Accounting & Finance courses often take a highly practical approach. Universities ensure their students learn by doing through simulated and real-life opportunities where you get to manage genuine business accounts.  `,
          },
          {
            type: 'heading',
            text: `Year-abroad opportunities`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `Many Accounting & Finance courses have an optional placement year, so you could come out of university with a degree and a year of industry experience. Overseas experience could provide you with a deeper understanding of the global economy, an experience of other cultures, and extra language skills.   `,
          },
        ],
      },
      {
        id: 'ie_002',
        title: 'Cost of living in London as a student',
        description: `The cost of living in London can be significantly higher than the rest of the UK. This includes accommodation, groceries, travel and the cost of a night out.`,
        imageUrl: '/assets/lifestyle-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Living in London ',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `As the home of many internationally renowned universities, London welcomes hundreds of thousands of students each year. While the capital has a lot going for it, the higher cost of living can put some students off.`,
              `However, through careful planning and strict budgeting, you can still enjoy a fulfilling university experience in one of the best cities in the world. Living in London can be affordable if you know how.`,
            ],
          },
          {
            type: 'heading',
            text: `Cost of living crisis`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The cost-of-living crisis is creating significant challenges for students studying in the UK, making it increasingly difficult to balance academic and financial responsibilities. Rising prices and stagnant wages mean many students are struggling to cover the high costs of rent, food and course materials. It can also make it difficult to afford extracurricular activities and travel. These issues are exasperated in London because it’s a more expensive place to live anyway. In a recent survey, the National Union of Students found that 92% of students felt the cost of living crisis was affecting their mental health and urged the government to do more to support students financially. `,
          },
          {
            type: 'heading',
            text: `Student accommodation costs`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Where you'll live should be one of your first considerations when you accept your place at a university. The cost of accommodation is elevated in London, with the National Union of Students (NUS) estimating an average increased rent spend of around £1,200 per year when compared with the rest of the UK.`,
              `The cost of housing in London varies depending on the area you choose, with furnished accommodation in an expensive area costing around £2,500 per month and a furnished studio flat in an average area costing around £1,200 per month`,
              `Many of London’s top universities are in central London, so living in an average area can incur extra travel costs. It may be worth looking at university halls, at least for the first year. This will still be more expensive than other parts of the country at £178 per week on average, but significantly cheaper than private rented accommodation.`,
              `Remember that you can apply for a maintenance loan to help you with these living costs. How much you get willl depend on your household income. Due to London's inflated rent prices, students living away from home in London can borrow more money than others. These students can borrow up to £12,382 in the 2021/22 academic year.`,
            ],
          },
          {
            type: 'heading',
            text: `Getting around`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `London caters very well for students in terms of discounts and special offers on public transport, with most favouring either buses or the London Underground.`,
              `You can register for a student Oyster card online to get a 30% discount on all your journeys throughout the year. To do so, you must be aged 18 or over, be living at a London address during term time, and provide proof of your university acceptance.`,
              `Oyster cards must be ‘touched in’ and ‘touched out’ at the beginning and end of each trip and can be topped up when necessary to ensure you have enough money to cover your journeys.`,
              `Of course, if you're living near your university, you can always walk or cycle in, even receiving a 20% student discount on Londons hire bikes. You should be able to find this and many other discounted offers at your freshers' week or on the NUS website. `,
            ],
          },
          {
            type: 'heading',
            text: `Student living costs in London`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `How much you spend on food, drinks and socialising is completely down to you, but to get the most out of your time and money, budgeting is important.`,
              `When you arrive at your accommodation, you should look around to find where you'll get the best value on your weekly shopping. Many of the cheaper supermarkets where you live will also be relatively cheaper in London too.`,
              `As far as going out is concerned, as a general rule, things will get more expensive the closer you get to the city centre. A night out, or even going to the cinema, can get very pricey so it’s your choice whether you want to have the occasional fancy evening in Central London, or opt for socialising more often but sticking to the cheaper areas.`,
              `Discount code websites and checking out city listings can help you find affordable, and sometimes free, nights out.
  
                `,
            ],
          },
        ],
      },
      {
        id: 'ie_003',
        title: 'Whats a university open day?',
        description: `University open days are an opportunity to gather more information about an institution, experience the campus, and meet current students and staff.`,
        imageUrl: '/assets/collegelife-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'What are university open days all about?',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Open days are organised by universities to give you the chance to visit and experience the university first hand. They help you to make decisions on what and where you'd like to study and can usually tell you more about a uni than a prospectus.`,
              `Universities run open days throughout the year and can occur any day of the week, even on weekends. Many universities will hold their open days on campus this year but may offer virtual open days and events as well.  `,
            ],
          },
          {
            type: 'heading',
            text: `What’s there to do at an open day?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `You have the opportunity to see what the campus and local area is like. You can also talk to staff and current students to discover what university life is like. Open days also give parents and guardians the chance to visit universities so they can help students make the right decisions. `,
              `You can attend talks and presentations about the university, departments, courses, student finance and more. Many universities host workshops and taster sessions so you can have an idea of what the course will be like. There’ll also be tours around the campus, whether the open day is in person or virtual, which often include visits to available student accommodation.`,
            ],
          },
          {
            type: 'heading',
            text: `When do universities have open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Dates for university open days will vary from uni to uni. Open days and virtual events can take place throughout the whole year, but most are held between June and October. You can find any upcoming university open days or virtual events on our website, or visit the university's website.`,
            ],
          },
          {
            type: 'heading',
            text: `Do parents go to university open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Usually students will bring either a parent, both parents or a guardian to an open day. Having someone accompany you is very worthwhile, as they may notice things about the campus or course that you don't. They can also take down notes in any talks or seminars you attend, picking up any key information you may miss.`,
            ],
          },
          {
            type: 'heading',
            text: `Are there postgraduate open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Many universities run dedicated open days for postgraduate applicants, giving you a great opportunity to inspect the campus and facilities. You’ll also get the chance to ask any specific questions you have about the university's research credentials, tutors and course leaders, funding options, or the type of course you’re interested in studying.`,
            ],
          },
        ],
      },
    ],
  },
  {
    country: 'AU',
    educationTitle: 'Study In Australia',
    educationDescription: `The USA is an educational hub with over 4500 institutions offering undergraduate, postgraduate and doctorate degrees. Study in USA for Indian students has continued to been an attractive prospective, this can be attributed to the quality education, cutting edge technology, work opportunities, excellent funding options and flexible curriculum. Higher education in USA for Indian students offers a mind-boggling range of universities with highly sophisticated and enlightening educational environments. Study in USA also provides phenomenally higher returns over a students' investment. USA education is the best investment for the future. Study in USA is affordable as its institutions provide a wide spectrum of tuition fees, accommodation options and financial help in the form of scholarships, fee waivers, aids, etc. The U.S.A pride themselves on being at the forefront of technology, research and techniques as they make the best possible equipment and resources available to their students.`,
    countryHeroImageUrl: '/assets/canadaintroimg.svg',
    flagUrl: '/assets/uklogo.svg',

    articles: [
      {
        id: 'au_001',
        title:
          'The Australian Universities Accord Interim Report: 5 Key Takeaways For International Students',
        description: `The Australian Universities Accord recently released an interim report, a hefty 144-page document discussing the current and future state of Australian higher education. We’ve done the reading so you don’t have to. 

        While a lot of the report revolves around domestic policies and issues, it also covers important information that may affect you as an international student in Australia. Many of the report’s findings have already led to action, so it’s a good sign that we’ll see even further improvements in the years to come. 
        
        So, don’t worry about sifting through the entire document; we’ve picked out the top five points that matter most to you as an international student in Australia. Let’s dive in!`,
        imageUrl: '/assets/accounts&finance-img.svg',
        author: 'Insider Guides',

        date: '20 July 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: '-',
        flagUrl: '/assets/australialogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Expansion of post-study work rights and fast-tracked permanent residency',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `The report underscores how vital international students like you are in filling Australia’s skills gaps. Starting 1 July 2023, if your degree falls into high-demand areas, you can enjoy extended post-study work rights. This move not only helps address Australia’s skills shortages but also deepens its global relationships.`,
              `Additionally, the Government’s Migration Review proposes faster routes to permanent residency for skilled graduates. This reflects a strong commitment to fostering education in line with key sectors and government priorities. So, if you’re hoping to settle in Australia after your studies, you may be one step closer!`,
            ],
          },
          {
            type: 'heading',
            text: `Universities to connect international students with industry`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The report also highlights the need for universities to take a more active role in bridging the gap between industry and international students. The report calls upon universities to help promote the benefits of hiring international students and guide them toward employment opportunities during and after their studies.

            This aims to create a seamless pathway from education to employment, particularly for international students in fields where Australia faces skill shortages. By supporting their transition into the workforce, universities can empower international students to contribute to the growth of these industries.`,
          },
          {
            type: 'heading',
            text: `Improved online education `,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Accountants record, classify, summarise, interpret and communicate the financial information about a business. You can apply this to any company, in any field, industry and sector. In many jobs, you could be working with a variety of clients, thus working across several different industries. `,
              `Leveraging platforms like Zoom and Microsoft Teams presents opportunities for a more immersive online learning experience, especially for offshore international students unable to attend on-campus classes. The report mentions the “Embedded Tutors Program” at Charles Sturt University as a successful example of effective online learning, offering support to all students regardless of their location.`,
            ],
          },
          {
            type: 'heading',
            text: `Addressing mental health and safety concerns`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The interim report highlights key issues facing students, particularly around mental health and safety. The impact of the pandemic on students’ mental health, safety concerns on campuses, and the specific challenges faced by international students are all recognised. The report also points out the high costs and inaccessibility of mental health support for international students. This recognition is a promising sign that we can expect initiatives and changes to address these concerns in the near future, thus enhancing the support systems within Australian universities.`,
          },
          {
            type: 'heading',
            text: `Enhancing international students’ rights and protections:`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The report stresses the need to improve how universities inform international students about their rights and protections under Australian law. This is crucial, especially in light of issues such as workplace exploitation and unfair practices that put students at risk of visa cancellations. For instance, the Assurance Protocol, an agreement between the Department of Home Affairs and the Fair Work Ombudsman, provides a safety net for students to report exploitation without fear of visa repercussions. The review’s focus on these areas suggests a likely improvement of these protective measures in the future, ensuring a safer and more secure environment for international students. `,
          },
        ],
      },
      {
        id: 'au_002',
        title: 'Cost of living in London as a student',
        description: `The cost of living in London can be significantly higher than the rest of the UK. This includes accommodation, groceries, travel and the cost of a night out.`,
        imageUrl: '/assets/lifestyle-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: ' Living in London ',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `As the home of many internationally renowned universities, London welcomes hundreds of thousands of students each year. While the capital has a lot going for it, the higher cost of living can put some students off.`,
              `However, through careful planning and strict budgeting, you can still enjoy a fulfilling university experience in one of the best cities in the world. Living in London can be affordable if you know how.`,
            ],
          },
          {
            type: 'heading',
            text: `Cost of living crisis`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: `The cost-of-living crisis is creating significant challenges for students studying in the UK, making it increasingly difficult to balance academic and financial responsibilities. Rising prices and stagnant wages mean many students are struggling to cover the high costs of rent, food and course materials. It can also make it difficult to afford extracurricular activities and travel. These issues are exasperated in London because it’s a more expensive place to live anyway. In a recent survey, the National Union of Students found that 92% of students felt the cost of living crisis was affecting their mental health and urged the government to do more to support students financially. `,
          },
          {
            type: 'heading',
            text: `Student accommodation costs`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Where you'll live should be one of your first considerations when you accept your place at a university. The cost of accommodation is elevated in London, with the National Union of Students (NUS) estimating an average increased rent spend of around £1,200 per year when compared with the rest of the UK.`,
              `The cost of housing in London varies depending on the area you choose, with furnished accommodation in an expensive area costing around £2,500 per month and a furnished studio flat in an average area costing around £1,200 per month`,
              `Many of London’s top universities are in central London, so living in an average area can incur extra travel costs. It may be worth looking at university halls, at least for the first year. This will still be more expensive than other parts of the country at £178 per week on average, but significantly cheaper than private rented accommodation.`,
              `Remember that you can apply for a maintenance loan to help you with these living costs. How much you get willl depend on your household income. Due to London's inflated rent prices, students living away from home in London can borrow more money than others. These students can borrow up to £12,382 in the 2021/22 academic year.`,
            ],
          },
          {
            type: 'heading',
            text: `Getting around`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `London caters very well for students in terms of discounts and special offers on public transport, with most favouring either buses or the London Underground.`,
              `You can register for a student Oyster card online to get a 30% discount on all your journeys throughout the year. To do so, you must be aged 18 or over, be living at a London address during term time, and provide proof of your university acceptance.`,
              `Oyster cards must be ‘touched in’ and ‘touched out’ at the beginning and end of each trip and can be topped up when necessary to ensure you have enough money to cover your journeys.`,
              `Of course, if you're living near your university, you can always walk or cycle in, even receiving a 20% student discount on Londons hire bikes. You should be able to find this and many other discounted offers at your freshers' week or on the NUS website. `,
            ],
          },
          {
            type: 'heading',
            text: `Student living costs in London`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `How much you spend on food, drinks and socialising is completely down to you, but to get the most out of your time and money, budgeting is important.`,
              `When you arrive at your accommodation, you should look around to find where you'll get the best value on your weekly shopping. Many of the cheaper supermarkets where you live will also be relatively cheaper in London too.`,
              `As far as going out is concerned, as a general rule, things will get more expensive the closer you get to the city centre. A night out, or even going to the cinema, can get very pricey so it’s your choice whether you want to have the occasional fancy evening in Central London, or opt for socialising more often but sticking to the cheaper areas.`,
              `Discount code websites and checking out city listings can help you find affordable, and sometimes free, nights out.
  
                `,
            ],
          },
        ],
      },
      {
        id: 'au_003',
        title: 'Whats a university open day?',
        description: `University open days are an opportunity to gather more information about an institution, experience the campus, and meet current students and staff.`,
        imageUrl: '/assets/collegelife-uk.svg',
        author: 'Tamsin Mosse',

        date: '30 Oct 2023',
        authorImage: '/assets/user-icon.png',
        authorRole: 'Content writer',
        flagUrl: '/assets/canadalogo.svg',
        content: [
          {
            type: 'heading',
            text: 'What are university open days all about?',
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyze information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Open days are organised by universities to give you the chance to visit and experience the university first hand. They help you to make decisions on what and where you'd like to study and can usually tell you more about a uni than a prospectus.`,
              `Universities run open days throughout the year and can occur any day of the week, even on weekends. Many universities will hold their open days on campus this year but may offer virtual open days and events as well.  `,
            ],
          },
          {
            type: 'heading',
            text: `What’s there to do at an open day?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `You have the opportunity to see what the campus and local area is like. You can also talk to staff and current students to discover what university life is like. Open days also give parents and guardians the chance to visit universities so they can help students make the right decisions. `,
              `You can attend talks and presentations about the university, departments, courses, student finance and more. Many universities host workshops and taster sessions so you can have an idea of what the course will be like. There’ll also be tours around the campus, whether the open day is in person or virtual, which often include visits to available student accommodation.`,
            ],
          },
          {
            type: 'heading',
            text: `When do universities have open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Dates for university open days will vary from uni to uni. Open days and virtual events can take place throughout the whole year, but most are held between June and October. You can find any upcoming university open days or virtual events on our website, or visit the university's website.`,
            ],
          },
          {
            type: 'heading',
            text: `Do parents go to university open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Usually students will bring either a parent, both parents or a guardian to an open day. Having someone accompany you is very worthwhile, as they may notice things about the campus or course that you don't. They can also take down notes in any talks or seminars you attend, picking up any key information you may miss.`,
            ],
          },
          {
            type: 'heading',
            text: `Are there postgraduate open days?`,
          },
          // {
          //   type: 'list',
          //   text: [
          //     'Ideal if you enjoy working with numbers and data',
          //     'Requires an ability to analyse information carefully and be detail-oriented',
          //     'Communication skills also essential as your work must be understood clearly by others',
          //   ],
          // },
          {
            type: 'paragraph',
            text: [
              `Many universities run dedicated open days for postgraduate applicants, giving you a great opportunity to inspect the campus and facilities. You’ll also get the chance to ask any specific questions you have about the university's research credentials, tutors and course leaders, funding options, or the type of course you’re interested in studying.`,
            ],
          },
        ],
      },
    ],
  },
];
