import { Component, computed, signal } from '@angular/core';
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

  //isShowMore: boolean = false;
  isShowMoreWithSignal = signal<boolean>(false);
  clickCount = signal(0);
  clickCountComputed = computed(() => this.clickCount() * 2);

  showMore(): void {
    //this.isShowMore = true;
    this.isShowMoreWithSignal.set(true);

    // updating value by one by using value++ didn't work
    this.clickCount.update((value) => value + 1);
  }

  showLess(): void {
    //this.isShowMore = false;
    this.isShowMoreWithSignal.set(false);
  }

  // ----- NGXS store code
  // isShowMore$ = this.store.select(state => state.home);

  // constructor(private store: Store) {
  // }

  // showMore(): void {
  //   this.store.dispatch(new Show());
  // }

  // showLess(): void {
  //   this.store.dispatch(new Hide());
  // }
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
