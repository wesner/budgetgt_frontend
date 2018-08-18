import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(private afAuth: AngularFireAuth ){
  }

  /* 
    Login con Google 
  */
  loginWhitGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }



  /* 
    Cerrar sesion 
  */
  logout(){
    return this.afAuth.auth.signOut();
  }



}