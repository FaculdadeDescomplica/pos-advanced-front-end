import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazzyComponent } from './lazzy.component';

const routes: Routes = [{ path: '', component: LazzyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazzyRoutingModule { }
