import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListItemComponent } from './components/transport-list-item/transport-list-item.component';
import { TransportsRoutingModule } from './transports-routing.module';
import { TransportContainerComponent } from './components/transport-container/transport-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TransportListItemComponent,
    TransportContainerComponent
  ],
  imports: [
    CommonModule,
    TransportsRoutingModule,
    SharedModule
  ],
  exports: [
    TransportContainerComponent
  ]
})
export class TransportsModule { }
