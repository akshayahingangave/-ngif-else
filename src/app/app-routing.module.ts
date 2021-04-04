import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateAccountComponent } from './create-account/create-account.component'

const routes: Routes = [
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'createAccount',
    component:CreateAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
