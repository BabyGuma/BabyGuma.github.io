import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificades',
  templateUrl: './certificades.component.html',
  styleUrls: ['./certificades.component.css']
})
export class CertificadesComponent implements OnInit {

  certificado : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let cert1 = {
      Nom_cert : "Certificado del uso de la paqweuteria de Microsoft",
      Des_cert : [
        {Descripccion : "El usuario mediante un examen por el cual uso tosa la paqueteria de office, demostro ser competente para su manejo"}
      ]
};

this.certificado.push(cert1);
}

}