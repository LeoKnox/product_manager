import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { MakeComponent } from './make/make.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'list',component: ListComponent},
  {path: 'home',component: HomeComponent},
  {path: 'make',component: MakeComponent},
  {path: 'edit/:id',component: EditComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
