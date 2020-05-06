import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EntryFormComponent} from './entry-form/entry-form.component';

const routes: Routes = [
  { path: 'entry', component: EntryFormComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
