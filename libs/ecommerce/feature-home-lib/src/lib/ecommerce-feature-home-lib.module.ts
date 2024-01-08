import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ecommerceFeatureHomeLibRoutes } from './lib.routes';
import { HomeComponent } from './components/home/home.component';
import { SharedEcommerceModule } from '@ecommerce/shared-ecommerce';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ecommerceFeatureHomeLibRoutes),
    SharedEcommerceModule,
    HttpClientModule
  ],
  providers: [UserService],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class EcommerceFeatureHomeLibModule {}
