import {Component, OnInit} from '@angular/core';
import { LocalStorageService } from '../service/local-storage-service'
import { Router } from '@angular/router';
import { ApiService } from '../service/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';


@Component({
  selector: 'clientlist-root',
  templateUrl: './clientlist.component.html',
  //styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit{
  citys: any ;
  clients: object;
  client: any;
  flagedit = false ;
  freemasters = false ;
  success = false ;
  getPage = false;
  flagadd = false;
  onList = true;
  masters: any ;
  length = 0;
  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {}

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    citys: new FormControl('', this.citys)
  });


  ngOnInit(): void {
    this.apiService.getClients().subscribe(res => {
      this.clients = res.data ;
	  this.length = Object(res.data).length ;
    },err => {
    });
    this.apiService.getCitys().subscribe(res => {
      this.citys = res.data ;
    },err => {
    });
  }

  editclient() {
    this.apiService.editclient(
      this.client.id,
      this.addForm.value.name,
      this.addForm.value.email,
    this.addForm.value.citys).subscribe(res => {
      this.addForm.reset() ;
      this.apiService.getClients().subscribe(res => {
        this.client = res.data ;
		this.length = Object(res.data).length ;
        if (this.flagedit) this.flagedit = !this.flagedit ;
        else this.flagadd = !this.flagadd ;
      },err =>{
      });
    }, err => {
    });
  }

  delete(id: string) {
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      this.apiService.delete(id,'clients').subscribe(res =>{
        this.apiService.getClients().subscribe(res => {
          this.clients = res.data ;
		  this.length = Object(res.data).length ;
        },err =>{
        });
        console.log(res.data) ;
      },err => {
        console.log(err.data) ;
      });
    }
  }
  onedit(client: object) {
    this.flagedit = !this.flagedit;
    this.client = client ;
  }

}
