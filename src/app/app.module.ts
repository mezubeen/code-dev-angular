import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';
import { EnquiriesComponent } from './enquiries/enquiries.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NotFoundComponent,
    PortfolioComponent,
    HomeComponent,
    EnquiriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
     {
        path: '', 
        component: HomeComponent
     },
     {
         path: 'portfolio', 
         component: PortfolioComponent 
     },
    {
        path: 'contact', 
        component: ContactComponent 
     },
     {
        path: 'enqury',
        component: EnquiriesComponent
     },
      {
        path: '**', 
        component: NotFoundComponent 
     }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
