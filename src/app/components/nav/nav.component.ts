import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  expanded: boolean = false;

  ngOnInit(): void {
  }

  showNav(){
    this.expanded = !this.expanded;
    console.log(this.expanded)
  }

}
