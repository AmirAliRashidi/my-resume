import { Component, OnInit } from '@angular/core';
import { AccordionsItem, ISkillsItem, IProjectItem } from './../../base/base-interface';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  sideList: AccordionsItem[] = [{
    title: 'Categories',
    open: true,
    content: [
      {
        title: 'About',
        link: '#about',
        icon: 'flag.png'
      },
      {
        title: 'Skills',
        link: '#skills',
        icon: 'angular.png'
      },
      {
        title: 'Projects',
        link: '#projects',
        icon: 'code.png'
      },
      {
        title: 'Coffee',
        link: '#coffee',
        icon: 'coffee.png'
      }
    ],
  },
  {
    title: 'Social Link',
    open: true,
    content: [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/amiralii-rashidii',
        icon: 'linkedin.png'
      },
      {
        title: 'GitHub',
        link: 'https://github.com/amiralirashidi',
        icon: 'github.png'
      },
      {
        title: 'GitLab',
        link: 'https://gitlab.com/ali_rashidi',
        icon: 'gitlab.png'
      },
      {
        title: 'Instagram',
        link: 'https://www.instagram.com/amirali_rashidii/',
        icon: 'instagram.png'
      },
      {
        title: 'Telegram',
        link: 'https://t.me/AmirAliRashidii',
        icon: 'telegram.png'
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
  }]

  skills: ISkillsItem[] = [
    {
      name: "Html",
      icon: "html.png",
      rating: 4.5,
    },
    {
      name: "CSS/SCSS",
      icon: "css.png",
      rating: 4.5,
    },
    {
      name: "JavaScript",
      icon: "javascript.png",
      rating: 4,
    },
    {
      name: "TypeScript",
      icon: "typescript.png",
      rating: 3.5,
    },
    {
      name: "Angular",
      icon: "angular.png",
      rating: 4,
    },
    {
      name: "Responsive Web Design",
      icon: "responsive.png",
      rating: 5,
    },
    {
      name: "Git",
      icon: "git.png",
      rating: 3,
    },
    {
      name: "Linux",
      icon: "linux.png",
      rating: 3,
    },
    {
      name: "Bootstrap",
      icon: "bootstrap.png",
      rating: 3,
    }
  ]

  projects: IProjectItem[] = [
    {
      name: "BourseTalent",
      detail: `BourseTalent is a job placement system in the field of the stock market, developed
        in HyvaTech Company for the Iran Financial Center. One of the notable features of this system
        is its resume builder.`,
      link: "https://boursetalent.ifc.ir/",
    },
    {
      name: "DadGam",
      detail: `Dadgam is a judicial system where users can easily seek legal advice from attorneys
        within the system regarding their legal cases. Additionally, it provides intelligent capabilities
        for creating contracts and legal petitions. Developed in HyvaTech Company.`,
      link: "https://daadgam.com/",
    },
    {
      name: "OnlineMenu",
      detail: `In this online menu, restaurant owners have full access to all menu items, allowing them
        to edit or delete them as needed. Additionally, there is a feature that allows them to view daily
        menu visits.`,
      link: "https://sky-lounge.ir/",
    }
  ]
  ngOnInit() {

  }
  // https://bmc.link/amiralirashidi
  // https://coffeete.ir/ali_rashidii
}
