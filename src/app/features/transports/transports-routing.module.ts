import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TransportContainerComponent } from './components/transport-container/transport-container.component';

const routes: Routes = [
  { path: '', component: TransportContainerComponent },
  //{ path: ':productId', component: ProductDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransportsRoutingModule { }
