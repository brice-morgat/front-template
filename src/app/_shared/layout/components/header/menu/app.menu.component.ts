import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from '../../../../../app.main.component';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss']
})
export class AppMenuComponent implements OnInit {

    items: MenuItem[];

    visibleSidebar2;
    valSwitch = true;


    constructor(public appMain: AppMainComponent) {
    }

    ngOnInit(): void {
        
    }

}
