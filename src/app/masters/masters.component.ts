import {Component, OnInit} from '@angular/core';
import { LocalStorageService } from '../service/local-storage-service';
import { Router } from '@angular/router';
import { ApiService } from '../service/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'masters',
  templateUrl: './masters.component.html',
  // styleUrls: ['./masters.component.css']
  providers: [ApiService]
})
export class MastersComponent implements OnInit {
  masters: string ;
  master: any ;
  citys: any ;
  getPage = false ;
  onList = true ;
  length = 0 ;
  onDiv: boolean[] = [false, false, false] ; // bulb
  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {}

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    citys: new FormControl('', this.citys)
  });

  ngOnInit(): void {
    let token = this.storage.load() ;
    if (token == null) {
      this.router.navigate(['/login']) ;
      return ;
    }
    this.apiService.checkToken(token).subscribe(res => {
      this.getPage = true ;
      this.onDiv[0] = !this.onDiv[0] ;
    }, err => {
      this.router.navigate(['/login']) ;
    });
    this.apiService.getMasters().subscribe(res => {
      this.masters = res.data ;
	  this.length = res.data.length ;
    },err => {
    });
  }



  onEdit(master: object) {
    this.onList = !this.onList ;
    this.master = master ;
    this.getCitys() ;
  }

  editMaster() {
    this.apiService.editMaster(
      this.master.id,
      this.addForm.value.name,
      this.addForm.value.surname,
      this.addForm.value.rating,
      this.addForm.value.citys).subscribe(res =>{
      this.addForm.reset() ;
      this.apiService.getMasters().subscribe(res => {
        this.masters = res.data ;
		this.length = res.data.length ;
        this.onlist() ;
        console.log(this.masters) ;
      },err =>{
      });
      console.log(res.data) ;
    },err => {
      console.log(err.data) ;
    });
  }

  delete(id: string) {
    if (window.confirm('Вы действительно хотите удалить запись?')) {
      this.apiService.delete(id,'masters').subscribe(res =>{
        this.apiService.getMasters().subscribe(res => {
          this.masters = res.data ;
		  this.length = res.data.length ;
          console.log(this.masters) ;
        },err =>{
        });
        console.log(res.data) ;
      },err => {
        console.log(err.data) ;
      });
    }
  }
  onlist() {
    this.addForm.reset() ;
    this.onList = !this.onList ;
  }
  onadd() {
    this.router.navigate(['addmaster']) ;
  }
  getCitys() {
    this.apiService.getCitys().subscribe(res => {
      this.citys = res.data ;
    },err => {
    });
  }
}
