import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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


}
