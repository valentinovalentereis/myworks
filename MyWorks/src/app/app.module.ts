import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatBadgeModule} from '@angular/material';
import { MatSnackBarModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule, }  from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { Error404Component } from './paginas/error404/error404.component';
import { Error404Module } from './paginas/error404/error404.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    MatBadgeModule,
    FormsModule, 
    MatSnackBarModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatCheckboxModule, 
    MatInputModule, AppRoutingModule,
    Error404Module,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
