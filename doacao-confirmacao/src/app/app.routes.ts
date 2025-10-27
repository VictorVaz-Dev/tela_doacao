import { Routes } from '@angular/router';
import { Tela1Component } from './pages/tela1/tela1';
import { Tela2Component } from './pages/tela2/tela2';

export const routes: Routes = [
  { path: '', redirectTo: 'tela1', pathMatch: 'full' },
  { path: 'tela1', component: Tela1Component },
  { path: 'tela2', component: Tela2Component },
];
