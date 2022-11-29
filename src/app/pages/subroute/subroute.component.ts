import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subroute',
  templateUrl: './subroute.component.html',
  styleUrls: ['./subroute.component.css']
})
export class SubrouteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    }
  coins(){
      this.router.navigate(['page1'], {relativeTo:this.route});
    }
  notes(){
      this.router.navigate(['page2'], {relativeTo:this.route});
    }

}
