import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment/environment';
import { cityReponse } from '../model';
import { IBrewery } from '../interfaces/IBrewery';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get<IBrewery>(environment.baseURL)
  }

  searchByState(link:string){
    return this.http.get(`${link}`)
  }

  searchByTerm(term:string){
    const searchURL = 'search?query=';
    return this.http.get(`${environment.baseURL}${searchURL}${term}`)
  }

  browseLinkCity(link:string){
    console.log(link)
    return this.http.get(link)
  }
}
