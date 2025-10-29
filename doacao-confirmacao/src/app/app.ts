import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Tela1Component } from './pages/tela1/tela1';
import { Tela2Component } from './pages/tela2/tela2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'tela1', pathMatch: 'full' },
      { path: 'tela1', component: Tela1Component },
      { path: 'tela2', component: Tela2Component },
    ]),
  ],
});
