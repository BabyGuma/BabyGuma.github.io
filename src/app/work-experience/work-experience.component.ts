import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  workExperience: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    
    let work1 = {
      fecha: "2018-2020",
      ubicacion: "Rio blanco, Ver.",
      puesto: "PM",
      emprersa: "LandaCopany",
      logros : [ 
         { descripcion: "MVP de gears"},
         { descripcion: "1 vs 5 EN GUARDIAN GOW"}
     ]
    };
    let work2 = {
      fecha: "2016-2017",
      ubicacion: "Rio blanco, Ver.",
      puesto: "PM",
      emprersa: "PEMEX",
      logros : [ 
         { descripcion: "Campañas terminadas"},
         { descripcion: "5 headshots seguidos"}
         ]
    };

  this.workExperience.push(work1);
  this.workExperience.push(work2);

  }

}
