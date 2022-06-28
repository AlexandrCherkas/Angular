import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


const baseApi = 'https://randomuser.me/api/'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private http: HttpClient) {}

  private getUrl(path: string, params: {[key in string]: any}): string{
    return baseApi + path
  }

  get(path: string, params?: object): Observable<any>{
    const fullPath = this.getUrl(path, params)
    return this.http.get(fullPath).pipe(
      map((response: any) => {
        return response.results;
      })
    )
  }


  post(path: string, body: any, params?: any): Observable<any>{
    const fullPath = this.getUrl(path, params)
    return this.http.post(fullPath, body).pipe(
      map((response: any) => {
       return response.results;
      })
    )
  }
}
