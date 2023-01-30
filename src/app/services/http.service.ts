import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment/environment';
import { cityReponse } from '../model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  browseCityData(link:string){

    return this.http.get(`${link}`)

  }

  browseCityList(term:string){

    return this.http.get(`${environment.urlCitySearch}${term}`)
  }
  browseLinkCity(link:string){
    console.log(link)
    return this.http.get(link)
  }
}
