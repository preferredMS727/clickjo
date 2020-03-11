import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyAdsComponent } from './my-ads.component';
import { FormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { SharedComponentsModule } from 'app/_shared-components/shared-components.module';
import { AdsViewComponent } from '../_shared-components/ads-view/ads-view.component';
import { AdsDeleteComponent } from '../_shared-components/ads-delete/ads-delete.component';

@NgModule({
  declarations: [MyAdsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MdModule,
    MaterialModule,
    SharedComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyAdsComponent
      }]),
  ],
  entryComponents: [
    AdsViewComponent,
    AdsDeleteComponent
  ]
})
export class MyAdsModule { }
