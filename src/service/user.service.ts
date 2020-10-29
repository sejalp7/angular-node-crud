import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootViewContainer: any;
  constructor(private http: HttpClient, private factoryResolver: ComponentFactoryResolver) { }

  rootURL = '/api';

  getUsers(): any {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any): any {
    return this.http.post(this.rootURL + '/user', {user});
  }

  getProfileInfo(): any {
    return this.http.get(this.rootURL + '/profileDetail');
  }

  getCities(): any {
    return this.http.get(this.rootURL + '/cities');
  }
}
