import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsViewComponent } from './ads-view/ads-view.component';
import { MaterialModule } from '../app.module';
import { AdsDeleteComponent } from './ads-delete/ads-delete.component';


@NgModule({
  declarations: [AdsViewComponent, AdsDeleteComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    AdsViewComponent,
    AdsDeleteComponent
  ]
})
export class SharedComponentsModule { }
