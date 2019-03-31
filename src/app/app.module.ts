import { VinService } from './vins.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { DeleteComponent } from './delete/deletecomponent';
import { NotFoundComponent } from './notFound/notFound.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    DeleteComponent,
    ReportsComponent,
    NotFoundComponent,
    LoginComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent},
      {path: 'add' , component: AddComponent},
      {path: 'update' , component: UpdateComponent},
      {path: 'delete' , component: DeleteComponent},
      {path: 'reports' , component: ReportsComponent},
      {path: 'login' , component: LoginComponent},
      {path: '**' , component: NotFoundComponent}
    ])
  ],
  providers: [VinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
