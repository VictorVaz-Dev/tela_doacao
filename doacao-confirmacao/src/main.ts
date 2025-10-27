import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { Tela1Component } from './app/pages/tela1/tela1';
import { Tela2Component } from './app/pages/tela2/tela2';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'tela1', pathMatch: 'full' },
      { path: 'tela1', component: Tela1Component },
      { path: 'tela2', component: Tela2Component },
    ])
  ]
}).catch(err => console.error(err));
