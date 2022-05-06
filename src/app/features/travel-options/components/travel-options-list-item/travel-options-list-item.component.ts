import { Component, Input, OnInit } from '@angular/core';
import { Viaggi } from 'src/app/shared/model/viaggi-model';

@Component({
  selector: 'fin-travel-options-list-item',
  templateUrl: './travel-options-list-item.component.html',
  styleUrls: ['./travel-options-list-item.component.css']
})
export class TravelOptionsListItemComponent implements OnInit {

  @Input() viaggio: Viaggi;

  constructor() { }

  ngOnInit(): void {
  }

}
