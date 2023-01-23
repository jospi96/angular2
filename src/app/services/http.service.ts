import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment/environment';
import { cityReponse } from '../model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
 
  getCityData(link:string){

    return this.http.get(`${link}`)

  }

  getCityList(term:string){

    return this.http.get(`${environment.urlCitySearch}${term}`)
  }
  getLinkCity(link:string){
    return this.http.get(link)
  }
}
