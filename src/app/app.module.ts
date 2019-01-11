import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { RouterModule, Routes } from '@angular/router';

import { ApiService } from './service/api-service';
import {PaypalapiService} from './service/paypalapi-service';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { LocalStorageService } from './service/local-storage-service';
import { MastersComponent } from './masters/masters.component';
import { AddmasterComponent } from './masters/addmaster.component';
import { CitysComponent } from './citys/citys.component';
import { ClientComponent } from './client/client.component';
import {OrdersComponent} from './orders/orders.component';
import {AddorderComponent} from './orders/addorder.component';
import {ClientlistComponent} from './client/clientlist.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PriceComponent} from './prices/price.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/homepage', pathMatch: 'full' },

  { path: 'login', component: AuthComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'masters', component: MastersComponent},
  { path: 'addmaster', component: AddmasterComponent},
  { path: 'citys', component: CitysComponent},
  { path: 'homepage', component: ClientComponent},
  { path: 'clients', component: ClientlistComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'addorder', component: AddorderComponent},
  { path: 'notfound', component: NotfoundComponent},
    { path: 'price', component: PriceComponent},


  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    MastersComponent,
    AddmasterComponent,
    CitysComponent,
    ClientComponent,
    ClientlistComponent,
    OrdersComponent,
    AddorderComponent,
    NotfoundComponent,
      PriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StorageServiceModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ApiService,
    PaypalapiService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
