import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showMore: boolean = false;
  showMoreButtonText: string = "Show more...";

  toggleShowMore(): void {
    this.showMore = !this.showMore;

    if (this.showMore) {
      this.showMoreButtonText = "Show less...";
    }
    else {
      this.showMoreButtonText = "Show more...";
    }
  }
}
