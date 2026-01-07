import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit.model';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private apiURL= '/api/fruit'

  constructor(private http: HttpClient){ }

  getAllFruits(): Observable<Fruit[]>{
    return this.http.get<Fruit[]>(`${this.apiURL}/all`)
  }

  getFruitByName(name:string): Observable<Fruit>{
    return this.http.get<Fruit>(`${this.apiURL}/${name}`)
  }
}
