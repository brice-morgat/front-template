import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductService } from 'src/app/_shared/primeng/service/productservice';
import { catchError, finalize, Observable, of, Subject, Subscription } from 'rxjs';
import { ConfigService } from 'src/app/_shared/primeng/service/app.config.service';
import { AppConfig } from 'src/app/_shared/primeng/api/appconfig';
import { Product } from 'src/app/_shared/primeng/api/product';
import { Customer } from 'src/app/_shared/primeng/api/customer';
import { TableauAdminService } from 'src/app/_services/tableau-admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Calendar } from 'primeng/calendar';

@Component({
    selector: 'app-tableau-de-bord',
    templateUrl: './tableau-de-bord.component.html',
    styleUrls: ['./tableau-de-bord.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class TableauDeBordComponent implements OnInit {

    //PAR Défaut
    items: MenuItem[];

    products: Product[];

    chartData: any;

    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

    customers3: Customer[];

    selectedDate: any;

    //Maintenant
    rangeDates: Date[];
    @ViewChild('dateDebut') dateDebut: Calendar;

    dataList$: Observable<any>;
    loadingErrorList$ = new Subject<boolean>();
    loadingError$ = new Subject<boolean>();
    data$: Observable<any>;
    notifForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        public configService: ConfigService,
        private tableauAdminService: TableauAdminService) {
    }


    ngOnInit() {
        // this.productService.getProductsSmall().then(data => this.products = data);
    }

    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();

    }

    applyDarkTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };
    }

    applyLightTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef',
                    }
                },
            }
        };
    }
}
