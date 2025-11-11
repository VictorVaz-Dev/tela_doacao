import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela2',
  standalone: true,
  template: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <div class="container">
      <button class="botao" (click)="voltarPainel()">Voltar ao Painel</button>
    </div>
  `,
  styles: [`
    
    .container{
      font-family: arial, helvitica, sans-seriff;
    }

    .botao {
      background: #d62828;
      color: white;
      border: none;
      padding: 0.9rem 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
      width: 100%;
      font-weight: 500;
    }

    .botao:hover {
      background: #b81f1f;
    }
  `]
})
export class Tela2Component {
  constructor(private router: Router) {}
  voltarPainel() {
    this.router.navigate(['/tela1']);
  }
}
