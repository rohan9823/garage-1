import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule,FirestoreSettingsToken} from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path:'garage',component: GarageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
