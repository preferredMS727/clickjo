import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { FavoriatedAdsComponent } from './favoriated-ads.component';
import { AdsViewComponent } from '../_shared-components/ads-view/ads-view.component';
import { SharedComponentsModule } from '../_shared-components/shared-components.module';
import { AdsDeleteComponent } from '../_shared-components/ads-delete/ads-delete.component';


@NgModule({
  declarations: [FavoriatedAdsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MdModule,
    MaterialModule,
    SharedComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavoriatedAdsComponent
      }]),
  ],
  entryComponents: [
    AdsViewComponent,
    AdsDeleteComponent
  ]
})
export class FavoriatedAdsModule { }
