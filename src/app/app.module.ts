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
import { DeleteComponent } from './delete/deletecomponent';
import { NotFoundComponent } from './notFound/notFound.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemizedComponent } from './reports/itemized/itemized.component';
import { SummmaryComponent } from './reports/summmary/summmary.component';
import { IndividualComponent } from './reports/individual/individual.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    DeleteComponent,
    ReportsComponent,
    NotFoundComponent,
    LoginComponent,
    AddComponent,
    ItemizedComponent,
    SummmaryComponent,
    IndividualComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent},
      {path: 'add' , component: AddComponent},
      {path: 'update' , component: UpdateComponent},
      {path: 'delete' , component: DeleteComponent},
      {path: 'reports/itemized' , component: ItemizedComponent},
      {path: 'reports/summary' , component: SummmaryComponent},
      {path: 'reports/individual' , component: IndividualComponent},
      {path: 'login' , component: LoginComponent},
      {path: '**' , component: NotFoundComponent}
    ])
  ],
  providers: [VinService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
