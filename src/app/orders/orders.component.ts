import {Component, OnInit} from '@angular/core';
import { LocalStorageService } from '../service/local-storage-service';
import { Router } from '@angular/router';
import { ApiService } from '../service/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'orders-root',
  templateUrl: './orders.component.html',
  // styleUrls: ['./masters.component.css']
  providers: [ApiService]
})

export class OrdersComponent implements OnInit {
  orders: string;
  client: any;
  master: any;
  masters: any;
  order: any ;
  citys: any;
  getPage = false;
  onList = true;
  freemasters = false ;
  length = 0 ;
  onDiv: boolean[] = [false, false, false]; // bulb
  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {
  }

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    citys: new FormControl('', this.citys),
    datetime: new FormControl(new Date()),
    master: new FormControl('', this.masters)
  });

  getCitys() {
    this.apiService.getCitys().subscribe(res => {
      this.citys = res.data ;
    },err => {
    });
  }

  editorder() {
    console.log(this.order) ;
    this.apiService.editorder(
      this.order.id,
      this.addForm.value.name,
      this.addForm.value.email,
      this.addForm.value.size,
      this.addForm.value.citys,
      this.addForm.value.datetime,
      this.addForm.value.master ).subscribe(res =>{
      this.addForm.reset() ;
      this.apiService.getOrders().subscribe(res => {
        this.orders = res.data ;
		this.length = res.data.length ;
        this.onlist() ;
      },err => {
      });
      console.log(res.data) ;
    },err => {
      console.log(err.data) ;
    });
  }

  onEdit(order: object) {
    this.onList = !this.onList ;
    this.order = order ;
    this.getCitys() ;
  }

  onlist() {
    this.addForm.reset() ;
    this.onList = !this.onList ;
  }

  ngOnInit(): void {
    let token = this.storage.load();
    if (token == null) {
      this.router.navigate(['/login']);
      return;
    }
    this.apiService.checkToken(token).subscribe(res => {
      this.getPage = true;
      this.onDiv[0] = !this.onDiv[0];
    }, err => {
      this.router.navigate(['/login']);
    });
    this.apiService.getOrders().subscribe(res => {
      console.log(res.data) ;
      this.orders = res.data;
	  this.length = res.data.length ;
    }, err => {
    });
  }


  checkmasters() {
    this.client = this.addForm.value ;
    this.apiService.letmasters(
      this.addForm.value.size,
      this.addForm.value.citys,
      this.addForm.value.datetime).subscribe(res => {
      this.masters = res.data ;
      if (this.masters.length === 0) this.freemasters = true ;
      else this.freemasters = false ;
    },err => {
    });
  }

  delete(id: string) {
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      this.apiService.delete(id,'orders').subscribe(res =>{
        this.apiService.getOrders().subscribe(res => {
          this.orders = res.data ;
		  this.length = res.data.length ;
        },err =>{
        });
        console.log(res.data) ;
      },err => {
        console.log(err.data) ;
      });
    }
  }




  onadd() {
    this.router.navigate(['addorder']) ;
  }
}
