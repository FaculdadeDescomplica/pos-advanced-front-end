import { Component, OnInit } from '@angular/core';
import { UserReturn } from 'src/app/models/userReturn';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  email: string = ''
  localId: string = ''
  user: UserReturn = new UserReturn('',[]);
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.service.getUserById('1').subscribe(
      {
        next: (response) => {
          console.log('entrou no response')
          console.log(response)
          //this.users = response;
          if(response){
            this.user = response;
            if(this.user.users){
              this.email = this.user.users[0].email;
            } 
          }
          
          /*
          if(user != null)
          this.email = user.users[0].email*/
        },
        error: (erro: any) => {
          console.log('entrou no erro')
          alert("Usuário ou Senha inválido(s)!");
          console.log(erro)
        }
      }
    )
  }

}
