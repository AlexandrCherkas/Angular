import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';


const routes: Routes = [

//   {path : 'one', component: PageOneComponent},
//   {path : 'two', component: PageTwoComponent},
//   {path : 'three', component: PageThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
