import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EntryFormComponent} from './entry-form/entry-form.component';
import {AccountComponent} from './account/account.component';
import {ChatsComponent} from './chats/chats.component';
import {ChecksComponent} from './checks/checks.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DocsComponent} from './docs/docs.component';
import {SettingsComponent} from './settings/settings.component';
import {WorkspaceComponent} from './workspace/workspace.component';

const routes: Routes = [
  { path: 'entry', component: EntryFormComponent},
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'checks', component: ChecksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
