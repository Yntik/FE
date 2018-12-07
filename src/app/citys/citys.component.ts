import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../service/local-storage-service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'citys',
    templateUrl: './citys.component.html',
    //styleUrls: ['./citys.component.css']
    providers: [ApiService]
})
export class CitysComponent implements OnInit {

    data: string;
    citys: string;
    flagadd = false;
    flagedit = false;
    city: any;
    length = 0;

    constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {
    }

    addForm = new FormGroup({
        newcity: new FormControl('', Validators.required),
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
        this.apiService.getCitys().subscribe(res => {
            this.citys = res.data;
            this.length = res.data.length;
        }, err => {
        });
    }

    onedit(city: object) {
        this.flagedit = !this.flagedit;
        this.city = city;
    }


    pushEdit() {
        this.apiService.editcity(
            this.city.id,
            this.addForm.value.newcity).subscribe(res => {
            this.addForm.reset();
            if (this.flagedit) this.flagedit = !this.flagedit;
            else this.flagadd = !this.flagadd;
            this.apiService.getCitys().subscribe(res => {
                this.citys = res.data;
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

    addcity() {
        this.apiService.addcity(
            this.addForm.value.newcity
        ).subscribe(res => {
            this.addForm.reset();
            this.flagadd = !this.flagadd;
            this.apiService.getCitys().subscribe(res => {
                this.citys = res.data;
                this.length = res.data.length;
            }, err => {
            });
        }, err => {
            console.log(err.data);
        });
    }


    delete(id: string) {
        if (window.confirm('Вы действительно хотите удалить запись?')) {
            this.apiService.delete(id, 'cities').subscribe(res => {
                this.apiService.getCitys().subscribe(res => {
                    this.citys = res.data;
                    this.length = res.data.length;
                }, err => {
                });
            }, err => {
            });
        }
    }


}
