import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela2',
  standalone: true,
  template: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <div class="container">
      <h1 class="titulo">Agendamento Confirmado!</h1>
      <p class="mensagem">Agradecemos sua solidariedade.</p>

      <div class="detalhes">
        <h2>Detalhes da sua Doação de Alimentos</h2>

        <div class="linha">
          <span class="material-icons">calendar_today</span>
          <p><strong>Data:</strong> 27 de Outubro, 2025</p>
        </div>

        <div class="linha">
          <span class="material-icons">access_time</span>
          <p><strong>Horário:</strong> 14h às 16h</p>
        </div>

        <div class="linha">
          <span class="material-icons">local_shipping</span>
          <p><strong>Método:</strong> Coleta no endereço informado</p>
        </div>

        <div class="linha">
          <span class="material-icons">place</span>
          <p><strong>Local:</strong><br> Rua das flores, 123, Bairro Alegria<br>São Paulo, SP - CEP 01234-567</p>
        </div>

        <div class="linha">
          <span class="material-icons">inventory_2</span>
          <p><strong>Itens:</strong><br> 5 kg de arroz (não perecível), 2L de leite (não perecível)</p>
        </div>
      </div>


      <div class="botoes">
        <button class="botao-secundario">
          <span class="material-icons">event_note</span>
          Gerenciar Agendamento
        </button>
        <button class="botao-secundario">
          <span class="material-icons">history</span>
          Ver Histórico
        </button>
      </div>


      <button class="botao" (click)="voltarPainel()">Voltar ao Painel</button>
    </div>
  `,
  styles: [`
    /* ===== Container Principal ===== */
    .container {
      max-width: 600px;
      margin: 4rem auto;
      padding: 2rem;
      font-family: 'Arial', sans-serif;
      text-align: center;
      background: #fff;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .icone-confirmacao {
      font-size: 3rem;
      color: #2ecc71;
      margin-bottom: 1rem;
    }

    .titulo {
      font-size: 1.8rem;
      color: #111;
      margin-bottom: 0.5rem;
    }

    .mensagem {
      color: #666;
      margin-bottom: 2rem;
    }

    /* ===== Bloco de Detalhes ===== */
    .detalhes {
      background: #fff6f6;
      border: 1px solid #f7d7d7;
      border-radius: 0.75rem;
      padding: 1.5rem;
      text-align: left;
      margin-bottom: 2rem;
    }

    .detalhes h2 {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #222;
    }

    .linha {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 1rem;
    }

    .linha span.material-icons {
      color: #d62828;
      font-size: 24px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .linha p {
      margin: 0;
      color: #333;
      font-size: 0.95rem;
    }

    .linha strong {
      color: #111;
    }

    /* ===== Botões ===== */
    .botoes {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .botoes button{
      cursor: pointer;
      width: 200px;
      padding: 6px;
      border-radius: 20px;
      border: none; 
      background-color: #bbbabaff;
      display: flex;
      justify-content: center;
      align-items: center;
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

    @media (max-width:768px){
      .botoes {
        display: flex;
        flex-direction: column; /* empilha um embaixo do outro */
        align-items: center;    /* centraliza horizontalmente */
        gap: 12px;              /* espaçamento entre os botões */
        margin-top: 20px;
      }
    }
  `]
})
export class Tela2Component {
  constructor(private router: Router) {}
  voltarPainel() {
    this.router.navigate(['/tela1']);
  }
}
