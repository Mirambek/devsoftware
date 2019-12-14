import {Component} from '@angular/core';
import {UIRouterModule,StateService} from '../../../node_modules/@uirouter/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable } from 'rxjs/Observable';
export interface Message {
  Email:string;
  Tel:string;
  Message:string;
};

@Component ({
  templateUrl:'./app.contacts.html',
  styleUrls:['./app.contacts.css']
})
export class Contacts{
  authState: any=null;
  Message:Message;
  items: Observable<any[]>;
  constructor(private state:StateService,private afAuth: AngularFireAuth,
                private af: AngularFireDatabase ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
    this.Message={Email:"",Tel:"",Message:""};

    this.af.object("messages").set("nb");
  }
  sendEmail():void{
     this.state.go("/services");
  }
}
