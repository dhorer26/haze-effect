import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  viewHeight: any;
  event: any;
  divHeight: number;
  scrollHeight: number;
  hazeEffectBottom = false;
  hazeEffectTop = false;

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.divHeight = document.getElementById('content-box').offsetHeight;
    this.scrollHeight = document.getElementById('content-box').scrollHeight;

    if (this.scrollHeight > this.divHeight) {
      this.hazeEffectBottom = true;
    }
  }

  public handleScroll(event: ScrollEvent) {
    // On scroll both effect added
    this.hazeEffectTop = true;
    this.hazeEffectBottom = true;

    // On scroll if scroll top position is 0
    if (document.getElementById('content-box').scrollTop === 0) {
      this.hazeEffectTop = false;
    }

    // On scroll if scroll bottom position is 0
    // tslint:disable-next-line: max-line-length
    if (
      document.getElementById('content-box').scrollTop >=
      document.getElementById('content-box').scrollHeight -
        document.getElementById('content-box').offsetHeight
    ) {
      this.hazeEffectBottom = false;
    }
  }
}
