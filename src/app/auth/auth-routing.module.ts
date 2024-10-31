import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AccessComponent } from './access/access.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
      children: [
        {path: 'login', component: LoginComponent},
        {path: 'access', component: AccessComponent},
        {path: '**', redirectTo: 'login'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
