import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../service/api-service';
import {LocalStorageService} from '../service/local-storage-service';
import {Router} from '@angular/router';


@Component({
  selector: 'addmaster-root',
  templateUrl: './addmaster.component.html',
  //styleUrls: ['./app.component.css']
})
export class AddmasterComponent implements OnInit{
  getPage = false ;
  citys: any ;

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
      this.apiService.getCitys().subscribe(res => {
        this.citys = res.data ;
      },err => {
      });
    }, err => {
      this.router.navigate(['/login']) ;
    });
  }

  onlist() {
    this.router.navigate(['/masters']) ;
  }


  pushMaster() {
    this.apiService.pushMaster(
      this.addForm.value.name,
      this.addForm.value.surname,
      this.addForm.value.rating,
      this.addForm.value.citys).subscribe(res => {
      this.addForm.reset() ;
      this.onlist() ;
    }, err => {
      console.log(err.data) ;
    });
  }
}
