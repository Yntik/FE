import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LocalStorageService} from './local-storage-service' ;
import {Md5} from 'ts-md5/dist/md5';
import {Observable} from 'rxjs';
import {combineAll} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {
    //private BASE_URL: string = 'http://localhost:3000';
    private BASE_URL: string;

    //private BASE_URL = String(environment.url);
    constructor(private http: HttpClient, private storage: LocalStorageService) {
        this.BASE_URL = environment.url;
    }

    public checkToken(token: string): Observable<ApiResponse> {
        const headers = new HttpHeaders({'token': this.storage.load()});
        const option = {headers: headers};
        return this.http.get<ApiResponse>(this.BASE_URL + '/protected/checktoken', option);
    }

    public login(username: string, password: string): Observable<ApiResponse> {
        console.log(Md5.hashStr(password));
        return this.http.post<ApiResponse>(this.BASE_URL + '/login', {
            username: username,
            password: Md5.hashStr(password)
        });
    }

    public getMasters(): Observable<ApiResponse> {
        const headers = new HttpHeaders({'token': this.storage.load()});
        const option = {headers: headers};
        return this.http.get<ApiResponse>(this.BASE_URL + '/protected/masters', option);
    }

    public getCitys(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.BASE_URL + '/cities');
    }

    public getPrice(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.BASE_URL + '/product');
    }

    public getClients(): Observable<ApiResponse> {
        const headers = new HttpHeaders({'token': this.storage.load()});
        const options = {headers: headers};
        return this.http.get<ApiResponse>(this.BASE_URL + '/protected/clients', options);
    }

    public pushMaster(name: string, surname: string, rating: string, city: string): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.BASE_URL + '/protected/masters', {
            token: this.storage.load(),
            name: name,
            surname: surname,
            rating: rating,
            city: city
        });
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
            city: city,
            master: master,
            datetime: datetime
        });
    }

    public editMaster(id: string, name: string, surname: string, rating: string, city: string): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(this.BASE_URL + '/protected/masters', {
            token: this.storage.load(),
            id: id,
            name: name,
            surname: surname,
            rating: rating,
            city: city
        });
    }

    public editclient(id: string, name: string, email: string, city: string): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(this.BASE_URL + '/protected/clients', {
            token: this.storage.load(),
            id: id,
            name: name,
            email: email,
            city: city
        });
    }

    public editorder(
        id: string,
        name: string,
        email: string,
        size: string,
        price: string,
        city: string,
        datetime: string,
        idmaster: string,
        idclient: string,
        idproduct: string): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(this.BASE_URL + '/protected/orders', {
            token: this.storage.load(),
            id: id,
            client: name,
            email: email,
            size: size,
            price: Number(price),
            city: city,
            idmaster: idmaster,
            datetime: datetime,
            idclient: idclient,
            idproduct: idproduct
        });
    }

    // this commit for heroku
    public delete(id: string, route: string): Observable<ApiResponse> {
        const params = new HttpParams({fromString: `id=${id}&route=${route}`});
        const headers = new HttpHeaders({'token': this.storage.load()});
        return this.http.delete<ApiResponse>(this.BASE_URL + `/protected/${route}`, {responseType: 'json', headers: headers, params});
    }

    public deleteOrder(id: string, paypal_id: string, route: string): Observable<ApiResponse> {
        const params = new HttpParams({fromString: `id=${id}&route=${route}&paypal_id=${paypal_id}`});
        const headers = new HttpHeaders({'token': this.storage.load()});
        return this.http.delete<ApiResponse>(this.BASE_URL + `/protected/${route}`, {responseType: 'json', headers: headers, params});
    }

    public addcity(newcity: string): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.BASE_URL + '/protected/cities', {
            token: this.storage.load(),
            newcity: newcity
        });
    }

    public editcity(id: string, newcity: string): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(this.BASE_URL + '/protected/cities', {
            token: this.storage.load(),
            id: id,
            newcity: newcity
        });
    }

    public editPrice(id: string, size: number, price: number): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(this.BASE_URL + '/protected/product', {
            token: this.storage.load(),
            id: id,
            size: size,
            price: Number(price)
        });
    }

    public addPrice(size: Number, price: Number): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.BASE_URL + '/protected/product', {
            token: this.storage.load(),
            size: size,
            price: price
        });
    }

    public getOrders(): Observable<ApiResponse> {
        const headers = new HttpHeaders({'token': this.storage.load()});
        const options = {headers: headers};
        return this.http.get<ApiResponse>(this.BASE_URL + '/protected/orders', options);
    }
}

