import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { MeuchatComponent } from './components/meuchat/meuchat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'chat', component:MeuchatComponent},
  {path: '**', component:HomeComponent }
];
