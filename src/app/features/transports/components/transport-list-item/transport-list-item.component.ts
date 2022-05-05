import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fin-transport-list-item',
  templateUrl: './transport-list-item.component.html',
  styleUrls: ['./transport-list-item.component.css']
})
export class TransportListItemComponent implements OnInit {

  @Input() transport: string;
  constructor() { }

  ngOnInit(): void {
  }

}
