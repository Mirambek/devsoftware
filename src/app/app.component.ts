import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import {CookieService} from 'ngx-cookie-service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authState: any=null;
  title = 'app works';
  constructor(private afAuth: AngularFireAuth, private af: AngularFireDatabase,
               translate: TranslateService) {
    translate.addLangs(['ru', 'en']);
    translate.setDefaultLang('en');
    
    if (navigator.language==='ru') {
      translate.use('ru');      
    } else {
      translate.use('en');
    }    
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
}
