import { Component, OnInit } from '@angular/core';
import { AccordionsItem } from './../../base/base-interface';

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
        title: 'Projects',
        link: '#projects',
        icon: 'code.png'
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
  ngOnInit() {

  }
  // https://bmc.link/amiralirashidi
  // https://coffeete.ir/ali_rashidii
}
