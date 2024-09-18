import { Component, untracked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento!: string
  
  public encerrarJogo(tipo: string) : void {
    console.log(tipo);
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
  this.jogoEmAndamento = true
  this.tipoEncerramento == undefined
  }
}
