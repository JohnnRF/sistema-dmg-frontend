import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './auth/guards/auth.guard';
import { redirectGuard } from './auth/guards/redirect.guard';

const routes: Routes = [
  {path: 'auth', 
    canActivate:[redirectGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      {path: 'ganar', loadChildren: () => import('./ganar/ganar.module').then(m => m.GanarModule)}
    ]
  },
  {path: '404', component: Error404PageComponent },
  //{path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
