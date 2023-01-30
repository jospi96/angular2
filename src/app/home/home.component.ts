import { Component, Input } from '@angular/core';
import {  cityData, cityReponse, searchResponse } from '../model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cityList: searchResponse[]| undefined;
  cityData!:cityData
  citySelected!:string
  errorSearch=false
  imgLink:string='https://d13k13wj6adfdf.cloudfront.net/urban_areas/San_Francisco_9q8yy_web-9a4042d87e@3x.jpg'

  constructor(private httpService:HttpService){}

  getCityList(term: string){
    this.httpService.browseCityList(term).subscribe((data:any)=>{
      this.cityList=data._embedded['city:search-results']
    })
    return this.cityList;
  }

  getCityData(link: string){
    this.httpService.browseCityData(link+"scores").subscribe((data:any)=>{
      this.cityData=data
    })
  }

  getLinkCity(city: searchResponse | undefined){

    if(city==undefined){
      this.errorSearch=true
      return;
    }

    this.citySelected = city.matching_full_name;
    this.httpService.browseLinkCity(city._links['city:item'].href).subscribe((data:any)=>{
      try{
        this.getCityData(data._links['city:urban_area'].href);
        this.getCityImage(data._links['city:urban_area'].href);
        this.errorSearch=false
      } catch{
        this.errorSearch=true
      }
    })
  }

  getCityListByEnter(term: string){

    let city = this.getCityList(term);

    if(city==undefined){
      this.errorSearch=true
      return;
    }

    this.getLinkCity(city[0]);
    this.cityList = undefined;
    this.input.value='';
  }

  getCityImage(link:string){
    this.httpService.browseCityData(link+"images").subscribe((data:any)=>{
    this.imgLink=data.photos[0].image.web
    });
  }
}
