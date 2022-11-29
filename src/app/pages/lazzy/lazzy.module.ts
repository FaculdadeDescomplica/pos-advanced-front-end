import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazzyRoutingModule } from './lazzy-routing.module';
import { LazzyComponent } from './lazzy.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    LazzyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LazzyRoutingModule
  ],
  providers: [UserService],
})
export class LazzyModule { }
