import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage-service' ;
import { Md5 } from 'ts-md5/dist/md5';
import {Observable} from 'rxjs';
import {combineAll} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {
  //private BASE_URL: string = 'http://localhost:3000';
  private BASE_URL: string;
  //private BASE_URL = String(environment.url);
    constructor(private http: HttpClient, private storage: LocalStorageService) {
      this.BASE_URL = environment.url ;
  }

  public checkToken(token: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/checktoken', {
      token: token
    });
  }

  public login(username: string, password: string): Observable<ApiResponse> {
    console.log(Md5.hashStr(password));
    return this.http.post<ApiResponse>(this.BASE_URL + '/login', {
      username: username,
      password: Md5.hashStr(password)
    });
  }

  public getMasters(): Observable<ApiResponse> {

    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/masters', {
      token: this.storage.load()
    }) ;
  }

  public getCitys(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/citys', {
    }) ;
  }

  public getClients(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/clientlist', {
      token: this.storage.load()
    }) ;
  }

  public pushMaster(name: string, surname: string, rating: string, city: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/pushmaster', {
      token: this.storage.load(),
      name: name,
      surname: surname,
      rating: rating,
      city: city
    });
  }

  public letmasters(size: string, city: string, datetime: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/letmasters', {
      size: size,
      city: city,
      datetime: datetime
    });
  }

  public pushorder(name: string, email: string, city: string, size: string, master: object, datetime: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/pushorder', {
      client: name,
      email: email,
      size: size,
      city: city,
      master: master,
      datetime: datetime
    });
  }

  public editMaster(id: string, name: string, surname: string, rating: string, city: string): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.BASE_URL + '/protected/editmaster', {
      token: this.storage.load(),
      id: id,
      name: name,
      surname: surname,
      rating: rating,
      city: city
    });
  }

  public editclient(id: string, name: string, email: string, city: string): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.BASE_URL + '/protected/editclient', {
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
    city: string,
    datetime: string,
    idmaster: string): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.BASE_URL + '/protected/editorder', {
      token: this.storage.load(),
      id: id,
      client: name,
      email: email,
      size: size,
      city: city,
      idmaster: idmaster,
      datetime: datetime
    });
  }

  public delete(id: string, route: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/delete', {
      token: this.storage.load(),
      id: id,
      route: route
    });
  }

  public addcity(newcity: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/pushcity', {
      token: this.storage.load(),
      newcity: newcity
    });
  }

  public editcity(id: string, newcity: string): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.BASE_URL + '/protected/editcity', {
      token: this.storage.load(),
      id: id,
      newcity: newcity
    });
  }

  public getOrders(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/protected/getorders', {
      token: this.storage.load(),
    }) ;
  }
}

