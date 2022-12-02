import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interess',
  templateUrl: './interess.component.html',
  styleUrls: ['./interess.component.css']
})
export class InteressComponent implements OnInit {

  interes : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let int1 = {
      Nom_int : "Aprender a usar nuevas herramientas para el desarrollo de software"
    }

    let int2 = {
      Nom_int : "Aprender nuevos idiamos"
    }

this.interes.push(int1);
this.interes.push(int2);
}
}