import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointments/:id', component: AppointmentComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctors/:username', component: DoctorComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:username', component: ClientComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'my-appointments', component: MyAppointmentsComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'error', component: ErrorComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
