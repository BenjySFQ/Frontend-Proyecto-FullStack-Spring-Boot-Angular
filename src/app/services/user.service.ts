import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hhtpClient: HttpClient) { }

  public añadirUsuario(user:any){

    return this.hhtpClient.post(`${baseUrl}/usuarios/`,user)

  }


}
