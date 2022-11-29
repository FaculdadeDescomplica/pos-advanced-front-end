import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-simples',
  templateUrl: './lista-simples.component.html',
  styleUrls: ['./lista-simples.component.css']
})
export class ListaSimplesComponent implements OnInit {

  users: User[] = [];  
  constructor(private router: Router, public service: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.service.getUsers().subscribe(
      {
        next: (response) => {
          console.log('entrou no response')
          console.log(response)
          this.users = response;
        },
        error: (erro: any) => {
          console.log('entrou no erro')
          alert("Usuário ou Senha inválido(s)!");
          console.log(erro)
        }
      }
    )
  }

  goToDetail(user: User){
    this.router.navigate(['/detalhe', user.id]);
  }


}
