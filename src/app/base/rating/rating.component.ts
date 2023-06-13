import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(star: number) {
    this.rating = star;
  }
}
