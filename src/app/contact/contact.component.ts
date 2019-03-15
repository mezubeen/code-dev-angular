import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data$: FirebaseListObservable<any[]>;
  submitted: boolean = false;
  // submittedHeading: true;

  constructor(db: AngularFireDatabase) {
    this.data$ = db.list('/enquiries');
  }


  submit(x) {
    console.log(x.value.email);
    this.data$.push(x.value);

    this.submitted = true;
    

  }

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
