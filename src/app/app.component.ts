import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NeominalCrm';
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.items = this.firestore.collection('employees').valueChanges();
  }

  ngOnInit(): void {
    
  }



}
