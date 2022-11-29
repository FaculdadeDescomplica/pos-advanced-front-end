import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent implements OnInit {

  title = 'descomplica';
  constructor(private route: ActivatedRoute) {}
  nome:string = "Professor Bruno Hauck";
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
    })
  }

}
