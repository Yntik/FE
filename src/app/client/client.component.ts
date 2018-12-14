import {Component, OnInit} from '@angular/core';

import {PaypalapiService} from '../service/paypalapi-service';
import {LocalStorageService} from '../service/local-storage-service' ;
import {Router} from '@angular/router';
import {ApiService} from '../service/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {formatDate} from '@angular/common';


@Component({
    selector: 'client-root',
    templateUrl: './client.component.html',
    //styleUrls: ['./app.component.css'],
})
export class ClientComponent implements OnInit {
    inputControl: number[] = [0, 0, 0];
    citys: any;
    price_option: any;
    price: Object;
    masters: any;
    client: any;
    freemasters = false;
    success = false;

    constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router, public paypal: PaypalapiService) {
    }

    addForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^\\w+@\\w+\\.\\w{2,4}$')]),
        price_option: new FormControl({}, Validators.required),
        citys: new FormControl('', Validators.required),
        datetime: new FormControl(new Date(), Validators.required),
        master: new FormControl('', Validators.required)
    });

    ngOnInit(): void {
        this.apiService.getCitys().subscribe(res => {
            this.citys = res.data;
        }, err => {
            console.log(err);
        });
        this.apiService.getPrice().subscribe(res => {
            this.price_option = res.data;
        }, err => {
            console.log(err);
        });
    }


    checkmasters(index: number) {
        this.inputControl[index] = 1;
        if (this.inputControl[0] && this.inputControl[1] && this.inputControl[2]) {
            var price = {
                size: '',
                price: ''

            };
            for (var i in this.price_option) {
                if (this.price_option[i].id === Number(this.addForm.value.price_option)) {
                    this.price = this.price_option[i];
                    price = this.price_option[i];
                }
            }
            this.paypal.finalAmount = Object(this.price).price;
            this.client = this.addForm.value;
            this.apiService.letmasters(
                'new',
                price.size,
                this.addForm.value.citys,
                this.addForm.value.datetime).subscribe(res => {
                this.masters = res.data;
                if (this.masters.length === 0) this.freemasters = true;
                else this.freemasters = false;
            }, err => {
                console.log(err);
            });
        }

    }

    go() {
        this.addForm.reset();
        this.inputControl[0] = 0;
        this.inputControl[1] = 0;
        this.inputControl[2] = 0;
        this.success = !this.success;
    }

    pushorder() {
        var master = {};
        for (var i in this.masters) {
            if (this.masters[i].id === Number(this.addForm.value.master)) {
                master = this.masters[i];
            }
        }
        this.apiService.pushorder(
            this.addForm.value.name,
            this.addForm.value.email,
            this.addForm.value.citys,
            this.price,
            master,
            this.addForm.value.datetime).subscribe(res => {
            this.paypal.customId = Object(res.data).insertId;
            this.paypal.ngAfterViewChecked();
            this.success = res.success;
        }, err => {
            this.router.navigate(['/notfound']);
        });


    }


}
