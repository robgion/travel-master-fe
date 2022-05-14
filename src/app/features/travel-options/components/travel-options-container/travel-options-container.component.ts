import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { MezzoService } from 'src/app/core/services/mezzo.service';
import { ViaggiService } from 'src/app/core/services/viaggi.service';
import { Booking } from 'src/app/shared/model/booking-model';
import { Mezzi } from 'src/app/shared/model/mezzi-model';
import { Viaggi } from 'src/app/shared/model/viaggi-model';

@Component({
  selector: 'fin-travel-options-container',
  templateUrl: './travel-options-container.component.html',
  styleUrls: ['./travel-options-container.component.css']
})
export class TravelOptionsContainerComponent implements OnInit {

  mezzo: string;

  idMezzi: number[] = [];
  luogoPartenza: string;
  luogoArrivo: string;
  nome: string;
  cognome: string;
  posti: number;
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
        this.nome = p['nome']
        this.cognome = p['cognome']
        this.posti = p['posti']
      }
    );

    this.mezzoService.getMezzo(this.mezzo).subscribe(
      result => {
        result.forEach(element => {
          this.idMezzi.push(element.id)
        });
      },
      error => {
        console.log(error);
      }
    );

    this.viaggiService.getViaggi(this.idMezzi, this.luogoPartenza, this.luogoArrivo).subscribe(
      result => {
        result.forEach(element => {
          this.viaggiDisponibili.push(element)
        });
      },
      error => {
        console.log(error)
      }
    )
  }

  travelSelectionHandler(travel: Viaggi, nome: string, cognome: string, posti: number): void {
    const prenotazione: Booking = { nome: nome, cognome: cognome, posti_prenotati: posti, id_viaggio: travel.id, id: 0 }
    this.bookingService.createBooking(prenotazione).subscribe(
      response => {
        if (response) {
          const url = `booking`;
          this.router.navigateByUrl(url);
        }
      },
      errore => {
        console.log(errore);

      }
    )
  }

}
