import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './lib/MaterialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';

// for AngularFireAuth
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UIRouterModule} from '@uirouter/angular';
import {Services} from './services/app.services';
import {Works} from './work/app.works';
import {WorkDialog} from './dialog/app.work.dialog';
import {Contacts} from './contacts/app.contacts';

const firebaseConfig =  {
  apiKey: "AIzaSyBLqoFRZjP1lAE3qZgA10EVgyeCddF2RrA",
  authDomain: "devsoftware-c14ff.firebaseapp.com",
  databaseURL: "https://devsoftware-c14ff.firebaseio.com",
  projectId: "devsoftware-c14ff",
  storageBucket: "devsoftware-c14ff.appspot.com",
  messagingSenderId: "989445348092"
};


let urls = [
  { name: 'app', url: '/' , component: AppComponent },
  { name: 'works', url: '/works', component: Works },
  { name: 'services', url: '/services', component: Services },
  { name: 'contacts', url: '/contacts', component: Contacts }
];

@NgModule({
  declarations: [
    AppComponent,
    Services,
    Works,
    WorkDialog,
    Contacts
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    FormsModule,

    BrowserAnimationsModule,    FlexLayoutModule
    ,UIRouterModule.forRoot({ otherwise: '/services',
                            states: urls,
                            useHash: true })
  ],
  entryComponents: [
    WorkDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
