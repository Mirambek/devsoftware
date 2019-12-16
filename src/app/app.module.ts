import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './lib/MaterialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule} from '@angular/common/http';
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
import { CookieService } from 'ngx-cookie-service';

const firebaseConfig =  {
  apiKey: "AIzaSyBLqoFRZjP1lAE3qZgA10EVgyeCddF2RrA",
  authDomain: "devsoftware-c14ff.firebaseapp.com",
  databaseURL: "https://devsoftware-c14ff.firebaseio.com",
  projectId: "devsoftware-c14ff",
  storageBucket: "devsoftware-c14ff.appspot.com",
  messagingSenderId: "989445348092"
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'assets/i18n/', '.json');
}
let urls = [
  // { name: 'app', url: '/' , component: AppComponent },
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, 
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
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
  providers: [    
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
