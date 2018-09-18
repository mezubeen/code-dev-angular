import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {
  enquiries: any[];
  enq$;

  constructor(db: AngularFireDatabase) {
    db.list('/enquiries')
      .subscribe(data => {
        this.enquiries = data;
        console.log(this.enquiries);
        
      })
  }

  ngOnInit() {
  }

}
