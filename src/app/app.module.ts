import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AppointmentsComponent,
    ClientsComponent,
    DoctorsComponent,
    HomeComponent,
    ClientComponent,
    DoctorComponent,
    AppointmentComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    ChatComponent,
    MyAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
