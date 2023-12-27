import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Note } from 'src/app/_models/note.model';
import { Patient } from 'src/app/_models/patient.model';
import { NoteService } from 'src/app/_services/notes.service';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.scss']
})
export class FichePatientComponent implements OnInit {
  id: any;
  patient: Observable<Patient>;
  noteList$: Observable<any>;
  selectNote: string;
  testText: string = "<p>Ceci est un commentaire basique</p>"

  constructor(private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private noteService: NoteService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
      this.getPatient();
      this.getNotes();
    });
  }

  getPatient() {
    this.patient = this.patientService.getPatient(this.id).pipe(
      catchError(() => {
        return of();
      })
    );
  }

  postNote() {
    const note = new Note();
    note.patId = this.id;
    note.content = this.selectNote;

    this.noteService.postNote(note).subscribe(
      (response: Note) => {
        this.selectNote = "";
        this.getNotes();
      }
    )
  }

  modifyNote(note) {
    note.modif = null;

    this.noteService.modifyNote(note).subscribe(
      (response: Note) => {
        this.selectNote = "";
        this.getNotes();
      }
    )
  }

  getNotes() {
    this.noteList$ = this.noteService.getNoteByPatId(this.id).pipe(
      catchError(() => {
        return of();
      })
    );
  }

  back() {
    this.router.navigateByUrl('/patient');
  }
}
