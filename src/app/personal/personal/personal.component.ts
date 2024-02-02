import { Component, OnInit } from '@angular/core';
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
export class PersonalComponent implements OnInit {
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
        {
          title: 'GitLab',
          link: 'https://gitlab.com/ali_rashidi',
          icon: 'gitlab.png',
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/amirali_rashidii/',
          icon: 'instagram.png',
        },
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
      detail: `BourseTalent is a job placement system in the field of the stock market, developed
        in HyvaTech Company for the Iran Financial Center. One of the notable features of this system
        is its resume builder using VueJS.`,
      link: 'https://boursetalent.ifc.ir/',
    },
    {
      name: 'DadGam',
      detail: `Dadgam is a judicial system where users can easily seek legal advice from attorneys
        within the system regarding their legal cases. Additionally, it provides intelligent capabilities
        for creating contracts and legal petitions. Developed in HyvaTech Company using Angular.`,
      link: 'https://daadgam.com/',
    },
    {
      name: 'OnlineMenu',
      detail: `In this online menu, restaurant owners have full access to all menu items, allowing them
        to edit or delete them as needed. Additionally, there is a feature that allows them to view daily
        menu visits using Angular`,
      link: 'https://sky-lounge.ir/',
    },
    {
      name: 'BesazBam',
      detail: `BesazBam is a Building services platform between construction masters and civil engineers, to 
        people and construction contractors to introduce them to each other and also there is a social media
        for everyone working in building construction to provide theire skill with each other. using React`,
      link: 'https://besazbam.ir/',
    },
    {
      name: 'NMS',
      detail: `Debugging and developed new features for node monitoring system in faraabeen company
        using Angular.`,
    },
  ];

  jobs: IJobItem[] = [
    {
      title: 'HyvaTech',
      detail:
        'Lead a team of frontend developers, providing guidance, support, and technical leadership to drive successful project executaion. frameworks: Angular, VueJs',
      logo: 'hyvatech.png',
      website: 'https://hyvatech.com/',
      date: 'Jun 2021 - Apr 2023 · 1 yr 11 mos',
    },
    {
      title: 'FaraaBeen',
      detail:
        'Developer and maintained monitoring web application using Angular.',
      logo: 'faraabeen.png',
      website: 'https://faraabeen.ir/',
      date: 'Apr 2023 - Present',
    },
  ];

  github: IGitProjects[] = [
    {
      title: 'Live Menu',
      description:
        'LiveMenu is a online menu with JSON database programmed by Angular',
      link: 'https://amiralirashidi.github.io/live-menu/',
      icon: 'https://amiralirashidi.github.io/live-menu/assets/img/logo.png',
    },
    {
      title: 'Online Shop',
      description:
        'OnlineShop is a Template with home, login and signup page proggrammed by Angular',
      link: 'https://amiralirashidi.github.io/online-shop/',
      icon: 'https://amiralirashidi.github.io/online-shop/assets/image/logo.png',
    },
    {
      title: 'Learnify',
      description: 'A simple course management application built with Angular.',
      link: 'https://amiralirashidi.github.io/learnify/',
      icon: 'https://amiralirashidi.github.io/learnify/assets/img/learnify.jpg',
    },
    {
      title: 'Custom DatePicker',
      description: `A custom date picker component for Angular that includes both date and date-time pickers built with Angular.`,
      link: 'https://amiralirashidi.github.io/custom-datepicker/',
      icon: 'https://amiralirashidi.github.io/custom-datepicker/assets/img/logo.png',
    },
  ];

  ngOnInit() {}

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
}
