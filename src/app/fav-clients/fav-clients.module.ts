import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavClientsComponent } from './fav-clients.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FavClientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavClientsComponent
      }]),
  ]
})
export class FavClientsModule { }
