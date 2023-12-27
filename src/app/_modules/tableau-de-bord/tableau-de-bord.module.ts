import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { ChartModule } from "primeng/chart";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { SidebarModule } from "primeng/sidebar";
import { SkeletonModule } from "primeng/skeleton";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ConfigService } from "src/app/_shared/primeng/service/app.config.service";
import { ProductService } from "src/app/_shared/primeng/service/productservice";
import { SharedModule } from "src/app/_shared/shared.module";
import { TableauDeBordComponent } from './pages/tableau-de-bord/tableau-de-bord.component';
import { TableauDeBordRoutingModule } from "./tableau-de-bord.routing.module";



@NgModule({
    declarations: [
        TableauDeBordComponent
  ],
    imports: [
        TableauDeBordRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [],
    providers: [
        ProductService,
        ConfigService
    ]
  })
  export class TableauDeBordModule { }
