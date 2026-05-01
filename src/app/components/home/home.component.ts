import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { hide, show } from 'src/app/ngrx-state/actions/home.actions';
import { Hide, Show } from 'src/app/state-ngxs/actions/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // isShowMore: boolean = false;
  isShowMore$ = this.store.select(state => state.home);

  constructor(private store: Store) {
  }

  showMore(): void {
    this.store.dispatch(new Show());
  }

  showLess(): void {
    this.store.dispatch(new Hide());
  }
}

// ---- original code using @ngrx/store ----
// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { hide, show } from 'src/app/ngrx-state/actions/home.actions';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {

//   // isShowMore: boolean = false;
//   showMoreButtonText: string = "Show more...";

//   show$: Observable<boolean> = new Observable();

//   constructor(private store: Store<{home: false}>) {
//     this.show$ = this.store.select('home');
//   }

//   // toggleShowMore(): void {
//   //   this.showMore = !this.showMore;

//   //   if (this.showMore) {
//   //     this.showMoreButtonText = "Show less...";
//   //   }
//   //   else {
//   //     this.showMoreButtonText = "Show more...";
//   //   }
//   // }

//   showMore(): void {
//     this.store.dispatch(show());
//   }

//   showLess(): void {
//     this.store.dispatch(hide());
//   }
// }
