import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, of, Subject } from 'rxjs';
import { Patient } from 'src/app/_models/patient.model';
import { PatientService } from 'src/app/_services/patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  dataList$: Observable<any>;
  loadingErrorList$ = new Subject<boolean>();
  display: boolean = false;

  sendForm: UntypedFormGroup;
  selectedDate: Date;

  options: Gender[];

  selectedOption: Gender;

  constructor(private patientService: PatientService,
    private router: Router,
    private formBuilder: UntypedFormBuilder) {
      console.log("Hello");
      this.options = [
        {name: "Homme", code: "M"},
        {name: "Femme", code: "F"}
      ];
    this.getAllPatient();
   }

  ngOnInit(): void {
    this.sendForm = this.formBuilder.group({
      id: [{value: null, disabled: false}],
      given: [{value: null, disabled: false}, [Validators.required]],
      family: [{value: null, disabled: false}, [Validators.required]],
      dob: [{value: null, disabled: false}],
      sex: [{value: null, disabled: false}],
      address: [{value: null, disabled: false}],
      phone: [{value: null, disabled: false}]
    });
  }

  valid(): void {
    const patient = new Patient();
    patient.id = this.sendForm.get('id').value;
    patient.family = this.sendForm.get('family').value;
    patient.given = this.sendForm.get('given').value;
    patient.dob = this.selectedDate;
    patient.address = this.sendForm.get('address').value;
    patient.phone = this.sendForm.get('phone').value;
    patient.sex = this.sendForm.get('sex').value;

    this.patientService.postPatient(patient).subscribe(
      (response: Patient) =>  {
        this.sendForm.reset();
        this.getAllPatient();
      }
    );
  }

  add() {
    this.sendForm = this.formBuilder.group({
      id: [{value: null, disabled: false}],
      given: [{value: null, disabled: false}, [Validators.required]],
      family: [{value: null, disabled: false}, [Validators.required]],
      dob: [{value: null, disabled: false}],
      sex: [{value: null, disabled: false}],
      address: [{value: null, disabled: false}],
      phone: [{value: null, disabled: false}]
    });
    this.display = true;
  }

  edit(patient: Patient) {
    console.log(this.selectedOption);
    this.selectedOption = patient.sex == 'M' ? this.options[0] : this.options[1];
    this.selectedDate = patient.dob ?? null;
    console.log(this.selectedOption)
    this.sendForm.patchValue({
      id: patient.id,
      given: patient.given,
      family: patient.family,
      dob: patient.dob,
      address: patient.address,
      phone: patient.phone,
      sex: patient.sex
    })
    
    this.display = true;
  }



  view(id: number) {
    const queryParams = {
      id: id
    }
    this.router.navigate([`/patient/info`], { queryParams });
  }


  getAllPatient() {
    console.log("Hello");
    this.dataList$ = this.patientService.getAllPatient().pipe(
      catchError(() => {
        this.loadingErrorList$.next(true);
        return of();
      })
    );
    console.log(this.patientService.getAllPatient());
  }
}

interface Gender {
  name: string,
  code: string
}