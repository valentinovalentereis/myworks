import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { Error404Component } from './paginas/error404/error404.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sidenavlist', component: SidenavListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];


@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
