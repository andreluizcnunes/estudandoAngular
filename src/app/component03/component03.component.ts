import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {

  imagem:string = 'img/mundos.jpg';

  alterarImagem(){
    if(this.imagem === 'img/mundos.jpg'){
      this.imagem = 'img/angular-spring.jpg';
    }else{
      this.imagem = 'img/mundos.jpg';
    }
  }
}
