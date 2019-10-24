import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  constructor() { }
  showSkip = true;

  ngOnInit() {
  }

  startApp() {
    // this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true })
    //   .then(() => this.storage.set('ion_did_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

}
