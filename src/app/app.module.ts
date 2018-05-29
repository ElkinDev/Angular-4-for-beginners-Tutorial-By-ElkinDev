import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA9QseRYo323Z2xno4kbVlRCidmSMjQRVM",
  authDomain: "tutorial-notas-app.firebaseapp.com",
  databaseURL: "https://tutorial-notas-app.firebaseio.com",
  projectId: "tutorial-notas-app",
  storageBucket: "tutorial-notas-app.appspot.com",
  messagingSenderId: '708510022177'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
