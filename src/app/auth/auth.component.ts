import { Component, Input } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../service/api-service'
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage-service' ;


@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ApiService]
})
export class AuthComponent {
  error: ApiResponse  ;
  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) { }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.error = null ;
    this.apiService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).subscribe(res => {
      console.log('login comp', res.data) ;
      this.storage.save(String(res.data)) ;
      this.router.navigate(['/admin'])
    },err => {
      this.error = err ;
    });

  }

}
