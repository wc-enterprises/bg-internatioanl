import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  services = [
    {
      title: 'Career guidance',
      description:
        'Our expert teams are here to help start your academic journey by guiding you through the application process.',
      image: '/assets/careerservice.svg',
      buttonText: 'Enquire now',
    },
    {
      title: 'College planning',
      description:
        'Our expert teams are here to help start your academic journey by guiding you through the application process.',
      image: '/assets/collegeplanning.svg',
      buttonText: 'Enquire now',
    },
    {
      title: 'Admission support',
      description:
        'Our expert teams are here to help start your academic journey by guiding you through the application process.',
      image: '/assets/admissionsupport.svg',
      buttonText: 'Enquire now',
    },
    {
      title: 'Test preparation',
      description:
        'Our expert teams are here to help start your academic journey by guiding you through the application process.',
      image: '/assets/testpreparation.svg',
      buttonText: 'Enquire now',
    },
    {
      title: 'Loan assistance',
      description:
        'Our expert teams are here to help start your academic journey by guiding you through the application process.',
      image: '/assets/loanassistance.svg',
      buttonText: 'Enquire now',
    },
    {
      title: 'Visa assistance',
      description:
        'Our expert teams are here to help start your academic journey by guiding you through the application process.',
      image: '/assets/visaassistance.svg',
      buttonText: 'Enquire now',
    },
  ];

  eventSectionTitle = 'Latest events';

  events = [
    {
      image: '/assets/event1.svg',
      date: '22 August 2023 ',
      title: 'Students life in UK',
      buttonText: 'Read more',
    },
    {
      image: '/assets/event2.svg',
      date: '22 August 2023 ',
      title: 'Study in UK',
      buttonText: 'Read more',
    },
    {
      image: '/assets/event3.svg',
      date: '22 August 2023 ',
      title: 'Education cost in the US',
      buttonText: 'Read more',
    },
  ];

  bottomButtonText = 'View All Events';

  counselingTitle = 'The counselling process';
  counselingDescription =
    'We have a structured counseling process to guide you through every step of your journey.100% professional and simple';

  counselingSteps = [
    {
      image: '/assets/counsellingimg1.svg',
      description: 'Free expert counselling service',
    },
    {
      image: '/assets/counsellingimg2.svg',
      description: 'Identify course, country & university',
    },
    {
      image: '/assets/counsellingimg3.svg',
      description: 'International test preparation',
    },
    {
      image: '/assets/counsellingimg4.svg',
      description: 'Application editing & processing',
    },
    {
      image: '/assets/counsellingimg5.svg',
      description: 'Funding, visa & pre-departure prep.',
    },
  ];
}
