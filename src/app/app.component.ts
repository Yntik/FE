import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PaypalapiService} from './service/paypalapi-service';
import {LocalStorageService} from './service/local-storage-service' ;
import {localStorage} from 'localStorage' ;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LocalStorageService, PaypalapiService]
})
export class AppComponent implements OnInit {


    constructor(private storage: LocalStorageService, public router: Router, public paypal: PaypalapiService) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.storage.clear();
        this.router.navigate(['login']);
    }


}
