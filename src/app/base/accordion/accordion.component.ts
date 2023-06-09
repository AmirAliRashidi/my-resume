import { Component, Input } from '@angular/core';
import { AccordionsItem } from '../base-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: AccordionsItem[] = []

  toggleAccordion(item: any) {
    item.open = !item.open;
  }
}