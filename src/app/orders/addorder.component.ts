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
export class AddorderComponent implements OnInit{
  citys: any ;
  masters: any;
  client: any;
  freemasters = false ;
  inputControl: number[] = [0, 0, 0] ;
  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {}

  addForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(3)] ),
    email: new FormControl('', [ Validators.required, Validators.email, Validators.pattern("^\\w+@\\w+\\.\\w{2,4}$")]),
    size: new FormControl('', Validators.required),
    citys: new FormControl('', Validators.required),
    datetime: new FormControl(new Date(), Validators.required),
    master: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
    let token = this.storage.load() ;
    if (token == null) {
      this.router.navigate(['/login']) ;
      return ;
    }
    this.apiService.checkToken(token).subscribe(res => {
      this.apiService.getCitys().subscribe(res => {
        this.citys = res.data ;
      },err => {
      });
    }, err => {
      this.router.navigate(['/login']) ;
    });
  }

  onlist() {
    this.router.navigate(['/orders']) ;
  }



  checkmasters(index: number) {
    this.inputControl[index] = 1 ;
    if (this.inputControl[0] && this.inputControl[1] && this.inputControl[2]) {
      this.client = this.addForm.value ;
      this.apiService.letmasters('new'
        this.addForm.value.size,
        this.addForm.value.citys,
        this.addForm.value.datetime).subscribe(res => {
        this.masters = res.data ;
        if (this.masters.length === 0) this.freemasters = true ;
        else this.freemasters = false ;
      },err => {
        console.log(err) ;
      });
    }

  }
  pushorder() {
    var master = {} ;
    for (var i in this.masters){
      if (this.masters[i].id === Number(this.addForm.value.master)) {
        master = this.masters[i] ;
      }
    }
    this.apiService.pushorder(
      this.addForm.value.name,
      this.addForm.value.email,
      this.addForm.value.citys,
      this.addForm.value.size,
      master,
      this.addForm.value.datetime).subscribe(res => {
      this.onlist() ;
    },err => {
      this.router.navigate(['/notfound']) ;
    });
  }
}
