import { Input, Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  options: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciência da Computação'},
    { nome: 'Diego', idade: 33, email: 'diego.taruma@gmail.com', curso: 'Sistemas de Informação'},
    { nome: 'Pedro', idade: 22, email: 'pedro.taruma@gmail.com', curso: 'Ciência da Computação'},
    { nome: 'João', idade: 19, email: 'joao.taruma@gmail.com', curso: 'Ciência da Computação'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  @Input() quantidade: number = 0;
}
