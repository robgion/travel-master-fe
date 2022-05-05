import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListComponent } from './components/transport-list/transport-list.component';
import { TransportsRoutingModule } from './transports-routing.module';
import { TransportContainerComponent } from './components/transport-container/transport-container.component';


@NgModule({
  declarations: [
    TransportListComponent,
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
