import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LimitedOffersComponent } from './limited-offers.component';

@NgModule({
  declarations: [LimitedOffersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LimitedOffersComponent
      }]),
  ]
})
export class LimitedOffersModule { }
