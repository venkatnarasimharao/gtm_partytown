import { Component } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gtmPartytown';

  postGtm() {
    if (window && window['dataLayer']) {
      window.dataLayer.push({
        event: 'buttonClicked',
        buttonName: 'MyButton',
        // Additional data you want to pass to GTM
      });
      console.log(window['dataLayer'], 'check')
    }
  }
}
