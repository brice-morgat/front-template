import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './pages/patient/patient.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { PatientService } from 'src/app/_services/patient.service';
import { FichePatientComponent } from './pages/fiche-patient/fiche-patient.component';

@NgModule({
  declarations: [
    PatientComponent,
    FichePatientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutingModule
  ],
  providers: [
    PatientService
  ]
})
export class PatientModule { }