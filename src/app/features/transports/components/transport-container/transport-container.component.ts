import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrls: ['./transport-container.component.css']
})
export class TransportContainerComponent implements OnInit {

  transportList: string[] = ["auto", "autobus", "aereo"];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 
  selectDetailHandler(transport: String): void {
    const url = `travel_form/${transport}`;
    // const url = 'products/' + product.id;
    this.router.navigateByUrl(url);
    console.log(transport)
  }

}
