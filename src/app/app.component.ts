import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

// import firebase from 'firebase/app';
// import 'firebase/app';
// import 'firebase/firestore';
// import { AngularFirestore } from 'angularfire2/firestore';

// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }
}
