import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue/revenue.component';
import { OverdueComponent } from './overdue/overdue.component';
import { OvertatComponent } from './overtat/overtat.component';
import { CapacityComponent } from './capacity/capacity.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' },
  { path: '', redirectTo: '/revenue', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'revenue', component: RevenueComponent },
  { path: 'overdue', component: OverdueComponent },
  { path: 'capacity', component: CapacityComponent },
  { path: 'overtat', component: OvertatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
