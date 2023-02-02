import { RegisterComponent } from './coffee/register/register.component';
import { LoginComponent } from './coffee/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoffeeComponent } from './coffee/add-coffee/add-coffee.component';
import { HomeComponent } from './home/home.component';
import { ListCoffeeComponent } from './coffee/list-coffee/list-coffee.component';
import { UpdateCoffeeComponent } from './coffee/update-coffee/update-coffee.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"add", component:AddCoffeeComponent},
  {path:"list", component:ListCoffeeComponent},
  {path:"update/:id", component:UpdateCoffeeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
