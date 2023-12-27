import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableauDeBordComponent } from "./pages/tableau-de-bord/tableau-de-bord.component";

const routes: Routes = [
    {
      path: '', component: TableauDeBordComponent,
      data: {
        title: 'Tableau de bord',
        description: 'Tableau de bord de votre compte',
      }
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TableauDeBordRoutingModule { }
