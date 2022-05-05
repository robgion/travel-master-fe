import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'fin-transport-list-item',
  templateUrl: './transport-list-item.component.html',
  styleUrls: ['./transport-list-item.component.css']
})
export class TransportListItemComponent implements OnInit {

  @Input() transport: string;
  @Output() selectDetail: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  transportSelectionHandler(): void  {
    this.selectDetail.emit(this.transport);
    console.log("list item"+this.transport)
  }

}
