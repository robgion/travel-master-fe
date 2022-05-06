import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatiCliente } from 'src/app/shared/model/datiCliente-model';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'fin-travel-form-container',
  templateUrl: './travel-form-container.component.html',
  styleUrls: ['./travel-form-container.component.css']
})
export class TravelFormContainerComponent implements OnInit {

  selectedTravel: Travel;
  selectedDatiCliente: DatiCliente;
  mezzo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      p => {
        this.mezzo = p['tipo_mezzo'];
      }
    );

  }

  saveTravelByForm(travelForm: NgForm): void {
    console.log(travelForm)

    const obj: Travel = {
      dataInizio: travelForm.value.dataInizio,
      dataFine: travelForm.value.dataFine,
      luogoPartenza: travelForm.value.luogoPartenza,
      luogoArrivo: travelForm.value.luogoArrivo
    };

    const objPerson: DatiCliente = {
      nome: travelForm.value.nome,
      cognome: travelForm.value.cognome,
      posti: travelForm.value.posti
    };



    console.log(obj);
    const url = `travel_option/${this.mezzo}/${obj.dataInizio}/${obj.dataFine}/${obj.luogoPartenza}/${obj.luogoArrivo}/${objPerson.nome}/${objPerson.cognome}/${objPerson.posti}`
    //const url = `travel_option`

    console.log(url);

    this.router.navigateByUrl(url);
  }



}
