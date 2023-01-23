import { Component, Input, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import {  cityData } from '../model';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  @Input() data: cityData | undefined;
  chartDataset:[{}]=[{}]
  label:string []=[]
  mode: ProgressSpinnerMode = 'determinate';
  cityRating:number=0
  ngOnInit(): void {

    let dataTemp= this.data ? this.data : {categories:[{score_out_of_10:0, name:"", color:"#000"}
  ],teleport_city_score:0};
    let arrayTemp:number[]=[]
    let colorArray:string[]=[]
for(let paramater of dataTemp.categories){
  
  this.label.push(paramater.name)
 
  arrayTemp.push(paramater.score_out_of_10)
  colorArray.push(paramater.color)
}
this.chartDataset=[
  {data:arrayTemp, label:this.label, backgroundColor:colorArray}
]
 this.cityRating=dataTemp.teleport_city_score
 
}


}
 
  
