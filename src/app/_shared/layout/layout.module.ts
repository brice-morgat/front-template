import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppNavbarItemsComponent} from "./components/header/navbar/navbar-items/app.navbar-items.component";
import {AppFooterComponent} from "./components/footer/footer-panel/app.footer.component";
import {AppMenuComponent} from "./components/header/menu/app.menu.component";
import {SidebarModule} from "primeng/sidebar";
import {RouterModule} from "@angular/router";
import {AppNavbarComponent} from "./components/header/navbar/navbar-layout/app.navbar.component";
import { InputSwitch, InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppNavbarComponent,
        AppNavbarItemsComponent,
        AppFooterComponent,
        AppMenuComponent,

    ],
    imports: [
        CommonModule,
        SidebarModule,
        InputSwitchModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        AppNavbarComponent,
        AppNavbarItemsComponent,
        AppFooterComponent,
        AppMenuComponent,
    ]
})
export class LayoutModule {
}
