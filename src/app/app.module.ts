import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListSinistersComponent } from './components/list-sinisters/list-sinisters.component';
import { AddSinisterComponent } from './components/add-sinister/add-sinister.component';
import { RouterModule ,Routes } from "@angular/router"; 
import {FormsModule} from "@angular/forms"

const routers:Routes = [
{path:'sinisters', component: ListSinistersComponent},
{path:'addsinister', component:AddSinisterComponent},
{path:'editsinister/:id', component:AddSinisterComponent},
{path:'', redirectTo: '/sinisters', pathMatch: 'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    ListSinistersComponent,
    AddSinisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
