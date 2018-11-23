import {Component, OnInit} from '@angular/core';
import { LocalStorageService } from './service/local-storage-service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalStorageService]
})
export class AppComponent {
  testData: string;
  constructor(private storage: LocalStorageService, public router: Router) {
  }
  logout(): void {
    this.storage.clear() ;
    this.router.navigate(['login']) ;
  }
}
