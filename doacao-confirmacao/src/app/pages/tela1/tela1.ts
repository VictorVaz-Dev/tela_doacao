import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela1',
  standalone: true,
  template: `
    <div class="container">
      <header>
        <div class="logo">
          <p>ConectaDoa</p>
        </div>
        <div class="botoes-centro">
          <button>Inicio</button>
          <button class="ativo">Doações</button>
          <button>Instituições</button>
          <button>Sobre Nós</button>
        </div>
        <div class="cadastro-header">
          <button class="botao-entrar">Entrar</button>
          <button class="botao-cadastrar">Cadastrar</button>
        </div>
      </header>

      <div class="container-forms">
        <h1 class="titulo">Doação de Roupas</h1>
        <p class="subtitulo">
          Compartilhe o calor da solidariedade. Doe roupas em bom estado e ajude a aquecer o inverno de quem precisa.
        </p>

        <div class="conteudo">
          <!-- Coluna Esquerda -->
          <div class="formulario">
            <h2>Detalhes da Doação</h2>
            <select>
              <option value="" disabled selected hidden>Tipo de roupa</option>
              <option>Calça</option>
              <option>Camiseta</option>
              <option>Blusa</option>
              <option>Tênis</option>
            </select>
            <select>
              <option value="" disabled selected hidden>Condição</option>
              <option>Ruim</option>
              <option>Médio</option>
              <option>Bom</option>
              <option>Novo</option>
            </select>
            <input type="text" placeholder="Quantidade (número de peças)" />

            <h2>Retirada ou Entrega</h2>
            <label class="opcao">
              <input type="radio" name="metodo" checked />
              Agendar Retirada
            </label>
            <label class="opcao">
              <input type="radio" name="metodo" />
              Pontos de Entrega
            </label>
            <input type="text" placeholder="Endereço para Retirada" />
          </div>

          <!-- Coluna Direita -->
          <div class="info">

            <iframe
              width="100%"
              height="280"
              style="border:0; border-radius:8px;"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=São+Paulo+SP&output=embed">
            </iframe>

            <p class="descricao">
              Encontre o ponto de entrega mais próximo de você. Clique no mapa para ver os endereços e horários de funcionamento.
            </p>

            <h2>Instruções e Orientações</h2>
            <p class="orientacoes">
              Para garantir que sua doação chegue em perfeito estado, pedimos que as roupas estejam limpas e em boas condições de uso.
              Se possível, separe as roupas por tipo e tamanho. Agradecemos sua colaboração!
            </p>
          </div>
        </div>

        <button class="botao" (click)="irConfirmacao()">Confirmar Doação</button>
      </div>
    </div>
  `,
  styles: [`
    header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .container{
      font-family: arial, helvitica, sans-seriff;
    }

    /*parte do logo*/
    .logo{
      font-size: 1.5rem;
    }

    /*parte dos botões do centro*/
    .botoes-centro button{
      font-size: 1rem;
      margin: 0px 10px;
      border: none;
      background-color: transparent;
      cursor: pointer; 
    }

    .ativo{
      color: #d76e11ff;
    }

    .botoes-centro button:hover{
      color: #d76e11ff;
    }

    /*botões do header na direita*/
    .cadastro-header{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .botao-entrar {
      background: #feebdbff;
      color: #d76e11ff;
      font-size: 0.9rem;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .botao-entrar:hover {
      background: #d76e11ff;
      color: white;
    }

    .botao-cadastrar {
      background: #d76e11ff;
      font-size: 0.9rem;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: bold;  
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .botao-cadastrar:hover {
      background-color: #ab5a14ff;
    }

    /*parte do formulario*/
    .container-forms   {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 2rem;
      font-family: 'Arial', sans-serif;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .titulo {
      text-align: center;
      font-size: 2rem;
      color: #111;
    }

    .subtitulo {
      text-align: center;
      color: #555;
      margin-bottom: 2rem;
    }

    .conteudo {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .formulario {
      flex: 1;
      min-width: 300px;
    }

    .formulario h2 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #222;
    }

    select, input[type="text"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 14px;
      cursor: pointer;
    }

    .opcao {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      border: 1px solid #ab5a14ff;
      border-radius: 8px;
      padding: 10px;
      color: #ab5a14ff;
    }

    .info {
      flex: 1;
      min-width: 300px;
    }

    .mapa {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .descricao {
      font-size: 0.9rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .orientacoes {
      font-size: 0.9rem;
      color: #444;
      line-height: 1.4;
    }

    .botao {
      display: block;
      margin: 2rem auto 0;
      background: #ab5a14ff;
      color: #fff;
      border: none;
      padding: 12px 30px;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .botao:hover {
      background: #ab5a14ff;
    }

    /* Responsividade */
    @media (max-width: 768px) {
      .conteudo {
        flex-direction: column;
      }
      .mapa {
        height: 200px;
      }
    }
  `]
})
export class Tela1Component {
  constructor(private router: Router) {}
  irConfirmacao() {
    this.router.navigate(['/tela2']);
  }
}
