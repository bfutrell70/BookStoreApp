import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hide, show } from 'src/app/ngrx-state/actions/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // isShowMore: boolean = false;
  showMoreButtonText: string = "Show more...";

  show$: Observable<boolean> = new Observable();


  
  constructor(private store: Store<{home: false}>) {
    this.show$ = this.store.select('home');
  }

  // toggleShowMore(): void {
  //   this.showMore = !this.showMore;

  //   if (this.showMore) {
  //     this.showMoreButtonText = "Show less...";
  //   }
  //   else {
  //     this.showMoreButtonText = "Show more...";
  //   }
  // }

  showMore(): void {
    this.store.dispatch(show());
  }

  showLess(): void {
    this.store.dispatch(hide());
  }


}
