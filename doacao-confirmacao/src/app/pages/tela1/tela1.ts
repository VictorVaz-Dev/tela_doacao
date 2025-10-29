import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela1',
  standalone: true,
  template: `
    <div class="container">
      <h1 class="titulo">Doação de Roupas</h1>
      <p class="subtitulo">Compartilhe o calor da solidariedade</p>

      <div class="formulario">
        <label>Tipo de roupa</label>
        <input placeholder="Ex: Camiseta, Calça...">

        <label>Condição</label>
        <input placeholder="Ex: Nova, Usada...">

        <label>Quantidade</label>
        <input placeholder="Ex: 5 peças">
      </div>

      <button class="botao" (click)="irConfirmacao()">Confirmar Doação</button>
    </div>
  `,
  styles: [`
    .container {
      font-family: arial, helvica, sans-seriff;
      max-width: 500px;
      margin: 4rem auto;
      padding: 2rem;
      text-align: center;
      background: #fff;
      border-radius: 1rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .titulo {
      color: #d62828;
      margin-bottom: 0.5rem;
    }
    .subtitulo {
      color: #555;
      margin-bottom: 2rem;
    }
    .formulario {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
    }
    .botao {
      margin-top: 2rem;
      background: #d62828;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s;
    }
    .botao:hover {
      background: #a61e1e;
    }
  `]
})
export class Tela1Component {
  constructor(private router: Router) {}
  irConfirmacao() {
    this.router.navigate(['/tela2']);
  }
}
