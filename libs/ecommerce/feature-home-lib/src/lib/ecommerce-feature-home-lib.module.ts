import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ecommerceFeatureHomeLibRoutes } from './lib.routes';
import { HomeComponent } from './components/home/home.component';
import { SharedEcommerceModule } from '@ecommerce/shared-ecommerce';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';
import { UsersFacade } from './+state/users.facade';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot(ecommerceFeatureHomeLibRoutes),
    SharedEcommerceModule,
    HttpClientModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UserService, UsersFacade],
  declarations: [HomeComponent, LoginComponent, LandingPageComponent],
  exports: [LandingPageComponent],
})
export class EcommerceFeatureHomeLibModule {}
