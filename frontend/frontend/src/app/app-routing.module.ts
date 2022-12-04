import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddeventsComponent } from './addevents/addevents.component';
import { UpdateeventsComponent } from './updateevents/updateevents.component';
import { ListeventsComponent } from './listevents/listevents.component';
const routes: Routes = [
  {path :'' , redirectTo:'/welcome', pathMatch:'full'} ,
  { path: 'list' , component: ListeventsComponent },
  { path: 'add' , component: AddeventsComponent},
  { path: 'update/:id' , component: UpdateeventsComponent },
  {path : 'welcome' , component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
