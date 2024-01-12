import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ecommerceFeatureHomeLibRoutes } from './lib.routes';
import { HomeComponent } from './components/home/home.component';
import { SharedEcommerceModule } from '@ecommerce/shared-ecommerce';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './+state/effects/users/users.effects';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductsEffects } from './+state/effects/products/products.effects';
import { USERS_FEATURE_KEY, reducers } from './+state/reducers';
import { UsersFacade } from './+state/facades/users/users.facade';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsFacadeService } from './+state/facades/products/products.facade.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ecommerceFeatureHomeLibRoutes),
    SharedEcommerceModule,
    HttpClientModule,
    StoreModule.forFeature(USERS_FEATURE_KEY, reducers),
    EffectsModule.forFeature([UsersEffects, ProductsEffects]),
  ],
  providers: [UserService, UsersFacade,ProductsFacadeService],
  declarations: [
    HomeComponent,
    LoginComponent,
    LandingPageComponent,
    LogoutComponent,
    ProductCardComponent,
  ],
  exports: [LandingPageComponent],
})
export class EcommerceFeatureHomeLibModule {}
