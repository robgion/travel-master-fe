import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { MezzoService } from 'src/app/core/services/mezzo.service';
import { ViaggiService } from 'src/app/core/services/viaggi.service';
import { Mezzi } from 'src/app/shared/model/mezzi-model';
import { Viaggi } from 'src/app/shared/model/viaggi-model';

@Component({
  selector: 'fin-travel-options-container',
  templateUrl: './travel-options-container.component.html',
  styleUrls: ['./travel-options-container.component.css']
})
export class TravelOptionsContainerComponent implements OnInit {

  mezzo: string;

  // 2 chiamate:
  // 1. usiamo tipo mezzo per recuperare id mezzo
  // 2. usiamo parametri per rimepire oggetto travel + id mezzo per filtrare tabella viaggi


  idMezzi: number[] = [];
  luogoPartenza: string;
  luogoArrivo: string;
  viaggiDisponibili: Viaggi[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mezzoService: MezzoService,
    private viaggiService: ViaggiService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      p => {
        this.mezzo = p['tipoMezzo'];
        this.luogoPartenza = p['luogoPartenza'];
        this.luogoArrivo = p['luogoArrivo']
        console.log(this.mezzo);
      }
    );

    this.mezzoService.getMezzo(this.mezzo).subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.idMezzi.push(element.id)
        });
        console.log(this.idMezzi);
      },
      error => {
        console.log(error);
      }
    );

    this.viaggiService.getViaggi(this.idMezzi, this.luogoPartenza, this.luogoArrivo).subscribe(
      result => {
        console.log("stampiamo risultati viaggi");
        console.log(result[0])
        result.forEach(element => {
          this.viaggiDisponibili.push(element)
          //console.log(element)
          console.log(this.viaggiDisponibili);

        });
      },
      error => {
        console.log(error)
      }
    )


  }

  travelSelectionHandler(travel: Viaggi): void {
    this.bookingService.createBooking(travel.id).subscribe(
      response => {
        console.log(response);
      },
      errore => {
        console.log(errore);

      }
    )
  }



}
