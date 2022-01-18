import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

// interface MyData {
//   name: string,
//   age: number
// }

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage: Storage;

  // private _myData$ = new BehaviorSubject<MyData>(null)
  // public myData$ = this._myData$.asObservable()

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage
  }

  setData(key: string, value: string) {
    // const jsonData = JSON.stringify(value)
    return this._localStorage.setItem(key, value)
    // this._myData$.next(data)
  }

  loadData(key: string) {
    // const data = JSON.parse(this._localStorage.getItem(key))
    return this._localStorage.getItem(key);
    // this._myData$.next(data)
  }

  clearData(key: string) {
    return this._localStorage.removeItem(key)
    // this._myData$.next(null)
  }

  clearAllLocalStorage() {
    return this._localStorage.clear()
    // this.myData$.next(null)
  }
}