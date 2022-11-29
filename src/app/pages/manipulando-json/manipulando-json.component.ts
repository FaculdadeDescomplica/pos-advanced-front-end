import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import studentsData from '../../students.json';    

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent implements OnInit {
  students: Student[] = studentsData;  

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.students)
  }
  goToDetail(student: Student){
    this.router.navigate(['/detalhe', student.id]);
  }

}
