import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';




// key that is used to access the data in local storage
const STORAGE_KEY = 'access_token';
@Injectable()
export class LocalStorageService {
  constructor(@Inject(SESSION_STORAGE) private storage:        StorageService) { }
  public save(token: string): void {
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, token);
    //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
  public clear(): void{
    this.storage.remove(STORAGE_KEY) ;
    //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
  public load(): string{
    //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    return this.storage.get(STORAGE_KEY) ;
  }
}
