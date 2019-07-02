import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/deletecomponent';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ItemizedComponent } from './reports/itemized/itemized.component';
import { SummmaryComponent } from './reports/summmary/summmary.component';
import { CreatedDateComponent } from './reports/created-date/created-date.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'LoginComponent',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update',
    component: UpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete',
    component: DeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/itemized',
    component: ItemizedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/summary',
    component: SummmaryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/created-date',
    component: CreatedDateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
