import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListeventsComponent } from './listevents/listevents.component';
import { AddeventsComponent } from './addevents/addevents.component';
import { UpdateeventsComponent } from './updateevents/updateevents.component';
import { FormsModule } from '@angular/forms';
import { FilterEventsComponent } from './filter-events/filter-events.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListeventsComponent,
    AddeventsComponent,
    UpdateeventsComponent,
    FilterEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
