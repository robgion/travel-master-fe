import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MezzoService } from 'src/app/core/services/mezzo.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mezzoService: MezzoService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      p => {
        this.mezzo = p['tipoMezzo'];
        console.log(this.mezzo);
        
      }
    ); 

    this.mezzoService.getMezzo(this.mezzo).subscribe(
      result => {
        console.log(result);
      }
    );
  }


}
