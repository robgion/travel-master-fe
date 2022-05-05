import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListItemComponent } from './components/transport-list-item/transport-list-item.component';
import { TransportsRoutingModule } from './transports-routing.module';
import { TransportContainerComponent } from './components/transport-container/transport-container.component';


@NgModule({
  declarations: [
    TransportListItemComponent,
    TransportContainerComponent
  ],
  imports: [
    CommonModule,
    TransportsRoutingModule,
  ],
  exports: [
    TransportContainerComponent
  ]
})
export class TransportsModule { }
