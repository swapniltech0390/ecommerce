import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ecommerceFeatureHomeLibRoutes } from './lib.routes';
import { HomeComponent } from './components/home/home.component';
import { SharedEcommerceModule } from '@ecommerce/shared-ecommerce';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ecommerceFeatureHomeLibRoutes),
    SharedEcommerceModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class EcommerceFeatureHomeLibModule {}
