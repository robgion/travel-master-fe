import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fin-common-selector',
  templateUrl: './common-selector.component.html',
  styleUrls: ['./common-selector.component.css']
})
export class CommonSelectorComponent implements OnInit {
  
  @Input() text: string;
  @Output() selection: EventEmitter<any> = new EventEmitter<any>();

  selectorHandler(): void {
    this.selection.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
