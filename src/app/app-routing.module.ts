import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestFormComponent } from './components/test-form/test-form.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "test-form", component: TestFormComponent},
  {path: "**", redirectTo: '/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
