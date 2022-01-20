import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paises } from '../paises';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://servicodados.ibge.gov.br/api/v1/paises/"
  
  constructor(private http: HttpClient) {


  }
  getApiData() {

    return this.http.get<Paises[]>(this.apiUrl)
    

  }

}
