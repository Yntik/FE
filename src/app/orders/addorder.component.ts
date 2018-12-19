import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../service/api-service';
import {LocalStorageService} from '../service/local-storage-service';
import {Router} from '@angular/router';


@Component({
    selector: 'addorder-root',
    templateUrl: './addorder.component.html',
    //styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
    citys: any;
    price_option: object;
    price: object;
    masters: any;
    client: any;
    freemasters = false;
    inputControl: number[] = [0, 0, 0];

    constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {
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
        let token = this.storage.load();
        if (token == null) {
            this.router.navigate(['/login']);
            return;
        }
        this.apiService.checkToken(token).subscribe(res => {
            this.apiService.getCitys().subscribe(res => {
                this.citys = Object(res.data);
            }, err => {
            });
            this.apiService.getPrice().subscribe(res => {
                this.price_option = Object(res.data);
                console.log('prise',this.price_option);
            }, err => {
                console.log(err);
            });
        }, err => {
            this.router.navigate(['/login']);
        });
    }

    onlist() {
        this.router.navigate(['/orders']);
    }


    //check zapataya
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
            this.client = this.addForm.value;
            this.apiService.letmasters('new',
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
            this.onlist();
        }, err => {
            this.router.navigate(['/notfound']);
        });
    }
}
