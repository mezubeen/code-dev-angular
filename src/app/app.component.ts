import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    onActivate(event) {

        if (event.constructor.name==="PortfolioComponent" || event.constructor.name==="ContactComponent"){

            let scrollToTop = window.setInterval(() => {
                let pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20);
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);

        }


    }
}
