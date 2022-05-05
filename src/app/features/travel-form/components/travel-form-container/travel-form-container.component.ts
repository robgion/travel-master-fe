import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fin-travel-form-container',
  templateUrl: './travel-form-container.component.html',
  styleUrls: ['./travel-form-container.component.css']
})
export class TravelFormContainerComponent implements OnInit {

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

}
