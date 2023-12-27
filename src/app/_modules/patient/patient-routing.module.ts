import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichePatientComponent } from './pages/fiche-patient/fiche-patient.component';
import { PatientComponent } from './pages/patient/patient.component';

const routes: Routes = [
  {path: "", component: PatientComponent},
  {path: "info", component: FichePatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
