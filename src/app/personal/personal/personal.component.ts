import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

import {
  AccordionsItem,
  ISkillsItem,
  IProjectItem,
  IJobItem,
  IGitProjects,
} from '../../base-interface';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [
    trigger('accordionAnimation', [
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('closed <=> open', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class PersonalComponent {
  sideList: AccordionsItem[] = [
    {
      title: 'Categories',
      open: true,
      link: false,
      content: [
        {
          title: 'About',
          link: 'about',
          icon: 'flag.png',
        },
        {
          title: 'Skills',
          link: 'skills',
          icon: 'angular.png',
        },
        {
          title: 'Jobs',
          link: 'jobs',
          icon: 'work.png',
        },
        {
          title: 'Projects',
          link: 'projects',
          icon: 'code.png',
        },
        {
          title: 'Educations',
          link: 'uni',
          icon: 'university.png',
        },
        // {
        //   title: 'Github Projects',
        //   link: 'github-projects',
        //   icon: 'github.png',
        // },
        // {
        //   title: 'Coffee',
        //   link: 'coffee',
        //   icon: 'coffee.png',
        // },
      ],
    },
    {
      title: 'Social Link',
      open: true,
      link: true,
      content: [
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/amiralii-rashidii',
          icon: 'linkedin.png',
        },
        {
          title: 'GitHub',
          link: 'https://github.com/amiralirashidi',
          icon: 'github.png',
        },
        // {
        //   title: 'GitLab',
        //   link: 'https://gitlab.com/ali_rashidi',
        //   icon: 'gitlab.png',
        // },
        // {
        //   title: 'Instagram',
        //   link: 'https://www.instagram.com/amirali_rashidii/',
        //   icon: 'instagram.png',
        // },
        {
          title: 'Telegram',
          link: 'https://t.me/amirali_rashidii',
          icon: 'telegram.png',
        },
        {
          title: 'Phone',
          link: 'tel:+989135282615',
          icon: 'phone.png',
        },
        {
          title: 'Email',
          link: 'mailto:amiralii.rashidii@gmail.com',
          icon: 'email.png',
        },
      ],
    },
  ];

  skills: ISkillsItem[] = [
    {
      name: 'Html',
      icon: 'html.png',
    },
    {
      name: 'CSS/SCSS',
      icon: 'css.png',
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
    },
    {
      name: 'TypeScript',
      icon: 'typescript.png',
    },
    {
      name: 'Angular',
      icon: 'angular.png',
    },
    {
      name: 'React',
      icon: 'react.png',
    },
    // {
    //   name: 'Rest API',
    //   icon: 'api.png',
    // },
    {
      name: 'Vue',
      icon: 'vuejs.png',
    },
    // {
    //   name: 'Bootstrap',
    //   icon: 'bootstrap.png',
    // },
    // {
    //   name: 'Responsive',
    //   icon: 'responsive.png',
    //   rating: 5,
    // },
    {
      name: 'Git',
      icon: 'git.png',
    },
    {
      name: 'Linux',
      icon: 'linux.png',
    },
  ];

  projects: IProjectItem[] = [
    // {
    //   name: 'BourseTalent',
    //   detail: `Iran Financial Center, Job Placement Platform.`,
    //   link: 'https://boursetalent.ifc.ir/',
    //   achievements: [
    //     'Using Vue.js scripts instead of Django templates to Increase development speed and readability',
    //   ],
    // },
    // {
    //   name: 'DadGam',
    //   detail: `Legal Consultancy Platform`,
    //   link: 'https://daadgam.com/',
    //   achievements: [
    //     'Developing custom formbuilder, resulting in a 50% improvement in consistency in developing.',
    //     'Add nebular UI library to Angular and create theming.',
    //     'Using cookie to handle user data in subdomains.',
    //   ],
    // },
    // {
    //   name: 'Sky-Lounge',
    //   detail: `Online Menu`,
    //   link: 'https://sky-lounge.ir/',
    //   achievements: [
    //     'Custom UI/UX elements.',
    //     'Responsive web design with Angular.',
    //     'Use JSON database to reduse development and host costs.',
    //   ],
    // },
    // {
    //   name: 'NMS',
    //   detail: `Node Monitoring System`,
    //   achievements: [
    //     'Developed custom DatePicker instead AngularMaterial for better UI/UX',
    //     'Increase website load time by 20% by reducing loops.',
    //   ],
    // },
    // {
    //   name: 'BesazBam',
    //   detail: `Building Services Platform`,
    //   link: 'https://besazbam.ir/',
    //   achievements: [
    //     'Using TypeScript in React for better development',
    //     'Customize Ant Design UI Library',
    //   ],
    // },
    {
      name: 'Alpha Medical Assistant',
      detail:
        'Developed a smart medical assistant platform for doctors and students, focusing on diagnostic support and X-ray image processing. Redesigned default PrimeNG components to align with brand guidelines, enhancing visual consistency and user satisfaction. Integrated PrimeNG’s Organization Chart to visualize hierarchical medical workflows. Built a fully responsive Angular-based interface, improving mobile engagement and establishing a seamless experience across devices.',
      link: 'https://www.alphamedical.ir',
    },
    {
      name: 'RoadTrust',
      detail:
        'Designed and developed a cryptocurrency staking platform enabling users to manage high-yield crypto investments. Leveraged Angular and PrimeNG to create an intuitive interface for staking and asset management, resulting in a 25% increase in user registrations within the first quarter. Implemented responsive design principles to ensure cross-device compatibility, reducing mobile bounce rates by 15%. Balanced aesthetic appeal with functional usability to drive investor retention and platform scalability.',
      link: 'https://roadtrust.net/',
    },
  ];

  jobs: IJobItem[] = [
    {
      title: 'i4Twins',
      logo: 'i4twins.jpeg',
      website: 'https://i4twins.com/',
      date: 'Apr 2024 - Present',
      detail:
        'i4Twins is an IIoT No-Code Platform for industry 4.0 solutions, this platform helps non-programmer users to design customizable dashboards.',
      achievements: [
        'Built core platform features including an application builder, report engine, and rule engine, enabling non-technical users to design custom dashboards and automate workflows.',
        'Developed dynamic data visualization tools (charts, graphs, heatmaps) to simplify analysis of industrial datasets, improving decision-making.',
        'Engineered drag-and-drop interfaces, reducing user onboarding time and increasing platform adoption.',
      ],
    },
    {
      title: 'FaraaBeen',
      logo: 'faraabeen.png',
      website: 'https://faraabeen.ir/',
      date: 'Apr 2023 - Apr 2024 · 1 yr 1 mo',
      detail:
        'Development of Communication Networks and Industrial Smart Solutions.',
      achievements: [
        'Optimized front-end performance by 50%, enabling real-time monitoring of 1,500+ communication base stations.',
        'Integrated Highcharts and Leaflet.js for real-time KPI tracking and geolocation mapping, reducing client-reported issues by 40%.',
        'Delivered a customizable and user-friendly interface aligned with client specifications and responsive UI/UX for monitoring communication base stations.',
      ],
    },
    {
      title: 'HyvaTech',
      logo: 'hyvatech.png',
      website: 'https://hyvatech.com/',
      date: 'Mar 2021 – Apr 2023 · 2 yr 2 mo',
      achievements: [
        'Mentored 5 junior developers, advancing their skills in Angular and SDLC.',
        'Developed a comprehensive employment and judicial application.',
        'Ensured code quality through rigorous practices including code reviews, pair programming, and knowledge sharing.',
        'Used SCSS to add a theme to change colors based on customer preferences.',
      ],
    },
  ];

  github: IGitProjects[] = [
    {
      title: 'Live Menu',
      link: 'https://amiralirashidi.github.io/live-menu/',
      icon: 'https://amiralirashidi.github.io/live-menu/assets/img/logo.png',
      achievements: [
        'Custom UI/UX elements.',
        'Responsive web design with Angular.',
        'Use JSON database.',
      ],
    },
    {
      title: 'Online Shop',
      description:
        'OnlineShop is a Template with home, login and signup page proggrammed by Angular',
      link: 'https://amiralirashidi.github.io/online-shop/',
      icon: 'https://amiralirashidi.github.io/online-shop/assets/image/logo.png',
      achievements: ['Using owl carousel.', 'Custom web design.'],
    },
    {
      title: 'Learnify',
      description: 'A simple course management application built with Angular.',
      link: 'https://amiralirashidi.github.io/learnify/',
      icon: 'https://amiralirashidi.github.io/learnify/assets/img/learnify.jpg',
      achievements: [
        'Using modules, components and services.',
        'Responsive web design.',
        'Angular Matrial.',
      ],
    },
    {
      title: 'Custom DatePicker',
      description: `A custom date picker component for Angular that includes both date and date-time pickers built with Angular.`,
      link: 'https://amiralirashidi.github.io/custom-datepicker/',
      icon: 'https://amiralirashidi.github.io/custom-datepicker/assets/img/logo.png',
      achievements: ['Creating custom UI elements.', 'Support timepicker.'],
    },
  ];

  goTo(element: any, type: boolean) {
    if (type) {
      window.open(element, '_blank');
    } else {
      let x = document.getElementById(element);
      x?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleAccordion(item: any) {
    item.open = !item.open;
  }

  fulllscreen() {
    const doc = window.document as any; // Use type assertion to 'any'
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const exitFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      exitFullScreen.call(doc);
    }
  }
}
