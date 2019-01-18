import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LocalStorageService} from './local-storage-service' ;
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {
    private BASE_URL: string;

    constructor(private http: HttpClient, private storage: LocalStorageService) {
        this.BASE_URL = environment.url;
    }

    public getCitys(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.BASE_URL + '/cities');
    }

    public getPrice(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.BASE_URL + '/product');
    }


    public letmasters(option: any, size: string, city: string, datetime: string): Observable<ApiResponse> {
        const params = new HttpParams({fromString: `datetime=${datetime}&size=${size}&city=${city}&option=${option}`});
        return this.http.get<ApiResponse>(this.BASE_URL + '/free-master', {responseType: 'json', params});
    }

    public pushorder(name: string, email: string, city: string, price_option: any, master: object, datetime: string): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.BASE_URL + '/orders', {
            client: name,
            email: email,
            size: price_option.size,
            price: price_option.price,
            product: price_option.id,
            city: city,
            master: master,
            datetime: datetime
        });
    }
}



