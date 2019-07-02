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
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemizedComponent } from './reports/itemized/itemized.component';
import { SummmaryComponent } from './reports/summmary/summmary.component';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { NavComponent } from './nav/nav.component';
import { CreatedDateComponent } from './reports/created-date/created-date.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    DeleteComponent,
    NotFoundComponent,
    LoginComponent,
    AddComponent,
    ItemizedComponent,
    SummmaryComponent,
    NavComponent,
    CreatedDateComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent},
      {path: 'add' , component: AddComponent, canActivate: [AuthGuard]},
      {path: 'update' , component: UpdateComponent, canActivate: [AuthGuard]},
      {path: 'delete' , component: DeleteComponent, canActivate: [AuthGuard]},
      {path: 'reports/itemized' , component: ItemizedComponent, canActivate: [AuthGuard]},
      {path: 'reports/summary' , component: SummmaryComponent, canActivate: [AuthGuard]},
      {path: 'reports/created-date' , component: SummmaryComponent, canActivate: [AuthGuard]},
      {path: 'login' , component: LoginComponent},
      {path: '**' , component: LoginComponent}
    ])
  ],
  providers: [VinService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
