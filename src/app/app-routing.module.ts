import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { NotFoundError } from 'rxjs';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppMainComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './_modules/tableau-de-bord/tableau-de-bord.module'
                                ).then((mod) => mod.TableauDeBordModule),
                            pathMatch: 'full',
                        },
                        {
                            path: 'patient',
                            loadChildren: () =>
                                import(
                                    './_modules/patient/patient.module'
                                ).then((mod) => mod.PatientModule),
                        },
                        { path: '**', redirectTo: '' },
                    ],
                },
                { path: 'pages/notfound', component: NotFoundError },
                { path: '**', redirectTo: 'pages/notfound' },
            ],
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
