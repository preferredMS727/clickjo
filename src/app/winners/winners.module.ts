import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WinnersComponent } from './winners.component';

@NgModule({
  declarations: [
    WinnersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WinnersComponent
      }]),
  ]
})
export class WinnersModule { }
