import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'fin-travel-form-container',
  templateUrl: './travel-form-container.component.html',
  styleUrls: ['./travel-form-container.component.css']
})
export class TravelFormContainerComponent implements OnInit {

  selectedTravel: Travel;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      p => {
        const id = p['tipo_mezzo'];
      }
    ); 

  }

  saveTravelByForm(travelForm: NgForm): void{
    console.log(travelForm)

    const obj: Travel = {
      dataInizio: travelForm.value.dataInizio,
      dataFine: travelForm.value.dataFine,
      luogoPartenza: travelForm.value.luogoPartenza,
      luogoArrivo: travelForm.value.luogoArrivo
    };
    console.log(obj);
    const url = `travel_option/${obj.dataInizio}/${obj.dataFine}/${obj.luogoPartenza}/${obj.luogoArrivo}`
    console.log(url);
    
    this.router.navigateByUrl(url);
  }



}
