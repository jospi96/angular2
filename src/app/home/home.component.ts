import { Component, Input, OnInit } from '@angular/core';
import {  cityData, cityReponse, searchResponse } from '../model';
import { HttpService } from '../services/http.service';
import { CoffeeService } from '../services/coffee.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  breweryList: searchResponse[]| undefined;
  cityData!:cityData
  citySelected!:string
  errorSearch=false
  imgLink:string='https://d13k13wj6adfdf.cloudfront.net/urban_areas/San_Francisco_9q8yy_web-9a4042d87e@3x.jpg'

  constructor(private httpService:HttpService, private coffee: CoffeeService){}

  getBrewList(term: string){
    this.httpService.searchByTerm(term).subscribe((data:any)=>{
      this.breweryList=data._embedded['city:search-results']
    })
    return this.breweryList;
  }

  getCityData(link: string){
    this.httpService.searchByTerm(link+"scores").subscribe((data:any)=>{
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

    // let city = this.searchByTerm(term);

    // if(city==undefined){
    //   this.errorSearch=true
    //   return;
    // }

    // this.getLinkCity(city[0]);
    // this.cityList = undefined;
  }

  getCityImage(link:string){
    this.httpService.searchByTerm(link+"images").subscribe((data:any)=>{
    this.imgLink=data.photos[0].image.web
    });
  }
}
