import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.loadScript('http://www.some-library.com/library.js');

    this.loadScript('../assets/js/modernizr-2.6.2.min.js');
    this.loadScript('../assets/js/jquery.min.js');
    this.loadScript('../assets/js/jquery.easing.1.3.js');
    this.loadScript('../assets/js/bootstrap.min.js');
    this.loadScript('../assets/js/jquery.waypoints.min.js');
    this.loadScript('../assets/js/jquery.flexslider-min.js');
    this.loadScript('../assets/js/main.js');
    this.loadScript('../assets/js/sticky-kit.min.js');
  }


  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
