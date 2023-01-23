import { Component } from '@angular/core';
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

getCityList(term:string){
this.httpService.getCityList(term).subscribe((data:any)=>{
  this.cityList=data._embedded['city:search-results']

  
})}

 getCityData(link:string){
 this.httpService.getCityData(link+"scores").subscribe((data:any)=>{
 this.cityData=data
 

 })

}


getLinkCity(city:searchResponse){
  this.citySelected= city.matching_full_name
  this.httpService.getLinkCity(city._links['city:item'].href).subscribe((data:any)=>{
    try{
   
    this.getCityData(data._links['city:urban_area'].href)
    this.getCityImage(data._links['city:urban_area'].href)
    this.errorSearch=false
    } catch{
      this.errorSearch=true
    }
  })
 
}

getCityImage(link:string){
  this.httpService.getCityData(link+"images").subscribe((data:any)=>{
   this.imgLink=data.photos[0].image.web
    
  
   })
   
}

}
