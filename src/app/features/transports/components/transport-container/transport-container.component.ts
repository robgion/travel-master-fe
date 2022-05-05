import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fin-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrls: ['./transport-container.component.css']
})
export class TransportContainerComponent implements OnInit {

  transportList: string[] = ["auto", "autobus", "aereo"];

  constructor() { }

  ngOnInit(): void {
  }

}
