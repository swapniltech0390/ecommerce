import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class SharedEcommerceModule {}
