import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NotFoundComponent,
    PortfolioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
        path: '**', 
        component: NotFoundComponent 
     }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
