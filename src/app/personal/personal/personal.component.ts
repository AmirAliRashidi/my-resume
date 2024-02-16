import { Component } from '@angular/core';
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
          title: 'Projects',
          link: 'projects',
          icon: 'code.png',
        },
        {
          title: 'Jobs',
          link: 'jobs',
          icon: 'work.png',
        },
        {
          title: 'Educations',
          link: 'uni',
          icon: 'university.png',
        },
        {
          title: 'Github Projects',
          link: 'github-projects',
          icon: 'github.png',
        },
        {
          title: 'Coffee',
          link: 'coffee',
          icon: 'coffee.png',
        },
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
      rating: 4,
    },
    {
      name: 'CSS/SCSS',
      icon: 'css.png',
      rating: 4,
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
      rating: 4,
    },
    {
      name: 'TypeScript',
      icon: 'typescript.png',
      rating: 4,
    },
    {
      name: 'Angular',
      icon: 'angular.png',
      rating: 4,
    },
    {
      name: 'React',
      icon: 'react.png',
      rating: 2,
    },
    // {
    //   name: "Vue",
    //   icon: "vuejs.png",
    //   rating: 2,
    // },
    {
      name: 'Bootstrap',
      icon: 'bootstrap.png',
      rating: 4,
    },
    {
      name: 'Git',
      icon: 'git.png',
      rating: 3,
    },
    {
      name: 'Linux',
      icon: 'linux.png',
      rating: 3,
    },
    {
      name: 'Responsive',
      icon: 'responsive.png',
      rating: 5,
    },
  ];

  projects: IProjectItem[] = [
    {
      name: 'BourseTalent',
      detail: `Iran Financial Center, Job Placement Platform.`,
      link: 'https://boursetalent.ifc.ir/',
      achievements: [
        'Using Vue.js scripts instead of Django templates to Increase development speed and readability',
      ],
    },
    {
      name: 'DadGam',
      detail: `Legal Consultancy Platform`,
      link: 'https://daadgam.com/',
      achievements: [
        'Developing custom formbuilder, resulting in a 50% improvement in consistency in developing.',
        'Add nebular UI library to Angular and create theming.',
        'Using cookie to handle user data in subdomains.',
      ],
    },
    {
      name: 'Sky-Lounge',
      detail: `Online Menu`,
      link: 'https://sky-lounge.ir/',
      achievements: [
        'Custom UI/UX elements.',
        'Responsive web design with Angular.',
        'Use JSON database to reduse development and host costs.',
      ],
    },
    {
      name: 'NMS',
      detail: `Node Monitoring System`,
      achievements: [
        'Developed custom DatePicker instead AngularMaterial for better UI/UX',
        'Increase website load time by 20% by reducing loops.',
      ],
    },
    {
      name: 'BesazBam',
      detail: `Building Services Platform`,
      link: 'https://besazbam.ir/',
      achievements: [
        'Using TypeScript in React for better development',
        'Customize Ant Design UI Library',
      ],
    },
  ];

  jobs: IJobItem[] = [
    {
      title: 'FaraaBeen',
      logo: 'faraabeen.png',
      website: 'https://faraabeen.ir/',
      date: 'Apr 2023 - Present',
      achievements: [
        'Collaborated with the teams of 6 people to improve the application.',
        'Refactor codes and increase website load time by 40% by reducing loops.',
        'Improved website design based on implement UI element.',
      ],
    },
    {
      title: 'HyvaTech',
      logo: 'hyvatech.png',
      website: 'https://hyvatech.com/',
      date: 'Jun 2021 - Apr 2023 · 1 yr 11 mos',
      achievements: [
        'Mentored 5 junior and intern Angular developers, fostering their growth within the software development lifecycle.',
        'Developed a comprehensive employment and judgical application.',
        'Made sure the code was really good by following strict rules such as code reviews, pair programming, and knowledge sharing.',
        'Comminucate effectively with the backend developers team to swiftly address and resolve critical issues.',
        'by using scss added theme to change colors by customer opinion.',
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
      x?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
