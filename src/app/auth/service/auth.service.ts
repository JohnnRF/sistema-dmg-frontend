import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs';
import { TokenService } from './token.service';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.API_URL;  

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(email: string, password: string){
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, {email, password})
    .pipe(
      tap(response =>{
        this.tokenService.saveToken(response.access_token);
      })
    );
  }

  getUsers(){
    return this.http.get<any>(`${this.baseUrl}/users`);
  }
}
