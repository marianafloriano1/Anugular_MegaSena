import { Component } from '@angular/core';

@Component({
  selector: 'app-megasena',
  standalone: false,
  templateUrl: './megasena.component.html',
  styleUrls: ['./megasena.component.css']
})
export class MegasenaComponent {

  numerosSorteados: number[] = [0, 0, 0, 0, 0, 0];
  numerosEscolhidos: number[] = [0, 0, 0, 0, 0, 0];
  resultado: string = '';

  // Função para verificar se os números são válidos
  validarAposta(): boolean {
    // Verifica se os números são únicos e dentro do intervalo de 1 a 60
    const numerosUnicos = new Set(this.numerosEscolhidos);

    if (numerosUnicos.size !== 6) {
      this.resultado = 'Os números apostados devem ser únicos!';
      return false;
    }

    for (let numero of this.numerosEscolhidos) {
      if (numero < 1 || numero > 60) {
        this.resultado = 'Os números devem estar entre 1 e 60!';
        return false;
      }
    }

    this.resultado = ''; // Limpa o erro
    return true;
  }

  exibirResultado() {
    if (!this.validarAposta()) {
      return; // Se a aposta não for válida, não continua
    }

    let acertos = 0;

    // Verifica quantos números foram acertados
    for (let i = 0; i < 6; i++) {
      if (this.numerosSorteados[i] === this.numerosEscolhidos[i]) {
        acertos++;
      }
    }

    // Exibe o resultado
    if (acertos === 0) {
      this.resultado = 'Você não acertou nenhum número.😭';
    } else {
      this.resultado = `Você acertou ${acertos} ${acertos === 1 ? 'número 🎉' : 'números 🎉'}!`;
    }
  }
}
