import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FireServiceService } from './fire-service/fire-service.service';

/* Firebase */
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

/* Componentes */
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GeneralComponent } from './general/general.component';

/* Configuración de firebase */
export const firebaseConfig = {
  apiKey:           "AIzaSyDk3IDGI0KXdrbcpEZMjGVHBLdq5isuhHk",
  authDomain:       "budgetgt-c273d.firebaseapp.com",
  databaseURL:      "https://budgetgt-c273d.firebaseio.com",
  projectId:        "budgetgt-c273d",
  storageBucket:    "budgetgt-c273d.appspot.com",
  messagingSenderId:"76465743337"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [FireServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
