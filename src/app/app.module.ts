import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ActiviesComponent } from './components/activies/activies.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { ActivitiesAllComponent } from './components/activies/activities-all/activities-all.component';
import { ActivitySingleComponent } from './components/activies/activity-single/activity-single.component';
import { HeaderComponent } from './components/_partials/header/header.component';
import { PageHeaderComponent } from './components/_partials/page-header/page-header.component';
import { FooterComponent } from './components/_partials/footer/footer.component';
import { AlertComponent } from './components/_partials/alert/alert.component';
import { CdoComponent } from './components/actions/cdo/cdo.component';
import { SaComponent } from './components/actions/sa/sa.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActionsComponent,
    ActiviesComponent,
    GalleriesComponent,
    ContactsComponent,
    JoinUsComponent,
    ActivitiesAllComponent,
    ActivitySingleComponent,
    HeaderComponent,
    PageHeaderComponent,
    FooterComponent,
    AlertComponent,
    CdoComponent,
    SaComponent,
    NotFoundPageComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgxGoogleAnalyticsModule.forRoot(environment.ga)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
