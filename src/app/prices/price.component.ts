import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../service/local-storage-service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'price',
    templateUrl: './price.component.html',
    //styleUrls: ['./price.component.css']
    providers: [ApiService]
})
export class PriceComponent implements OnInit {

    data: string;
    price_option: string;
    flagadd = false;
    flagedit = false;
    price: any;
    length = 0;

    constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {
    }

    addForm = new FormGroup({
        size: new FormControl(new Number(), Validators.required),
        price: new FormControl(new Number(), Validators.required),
    });

    ngOnInit(): void {
        var token = this.storage.load();
        if (token == null) {
            this.router.navigate(['/login']);
            return;
        }
        this.apiService.checkToken(token).subscribe(res => {
            this.data = res.data;
        }, err => {
            this.router.navigate(['/login']);
        });
        this.apiService.getPrice().subscribe(res => {
            this.price_option = res.data;
            this.length = res.data.length;
        }, err => {
        });
    }

    onedit(price: object) {
        this.flagedit = !this.flagedit;
        this.price = price;
    }


    pushEdit() {
        this.apiService.editPrice(
            this.price.id,
            this.addForm.value.size,
            this.addForm.value.price).subscribe(res => {
            this.addForm.reset();
            if (this.flagedit) this.flagedit = !this.flagedit;
            else this.flagadd = !this.flagadd;
            this.apiService.getPrice().subscribe(res => {
                this.price_option = res.data;
                this.length = res.data.length;
            }, err => {
            });
        }, err => {
            console.log(err.data);
        });
    }

    onadd() {
        this.flagadd = !this.flagadd;
    }

    addPrice() {
        this.apiService.addPrice(
            this.addForm.value.size,
            this.addForm.value.price
        ).subscribe(res => {
            this.addForm.reset();
            this.flagadd = !this.flagadd;
            this.apiService.getPrice().subscribe(res => {
                this.price_option = res.data;
                this.length = res.data.length;
            }, err => {
            });
        }, err => {
            console.log(err.data);
        });
    }


    delete(id: string) {
        if (window.confirm('Вы действительно хотите удалить запись?')) {
            this.apiService.delete(id, 'product').subscribe(res => {
                this.apiService.getPrice().subscribe(res => {
                    this.price = res.data;
                    this.length = res.data.length;
                }, err => {
                });
            }, err => {
            });
        }
    }


}
