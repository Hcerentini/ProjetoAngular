import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '../../assets/coracao_vazio' //Property Binding
  public coracaoCheio: string = '../../assets/coracao_cheio'

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
