import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../shared/services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class BackSortService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  public getUsers(page: number, results: number, params?: any): Observable<any> {
    const path = `?page=${page}&results=${results}&seed=abc`;
    return this.apiService.getUsers(path)
  }
}
