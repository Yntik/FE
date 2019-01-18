import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StorageServiceModule} from 'angular-webstorage-service';
import {RouterModule, Routes} from '@angular/router';

import {ApiService} from './service/api-service';
import {PaypalapiService} from './service/paypalapi-service';


import {AppComponent} from './app.component';
import {LocalStorageService} from './service/local-storage-service';
import {ClientComponent} from './client/client.component';
import {NotfoundComponent} from './notfound/notfound.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'homepage', component: ClientComponent},
    {path: 'notfound', component: NotfoundComponent},
];


@NgModule({
    declarations: [
        AppComponent,
        ClientComponent,
        NotfoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        StorageServiceModule,

        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [
        ApiService,
        PaypalapiService,
        LocalStorageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
