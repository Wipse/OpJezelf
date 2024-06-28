import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { KwartjeComponent } from './kwartje/kwartje.component';
import { FundBComponent } from './prijswijs/prijswijs.component'; 
import { PWOpdrachtComponent } from './pw-opdracht/pw-opdracht.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'prijswijs', component: FundBComponent},
    { path: 'valt-het-kwartje', component: KwartjeComponent },
    { path: 'prijswijs/:id', component: PWOpdrachtComponent }
] 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }