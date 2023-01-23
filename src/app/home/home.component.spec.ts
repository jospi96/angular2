import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { HttpService } from '../services/http.service';
import {  cityData, cityReponse, searchResponse } from '../model';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let component2:HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: HttpService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientTestingModule],
      schemas:  [CUSTOM_ELEMENTS_SCHEMA]

      

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    
    httpClientSpy=jasmine.createSpyObj('HttpClient', ['get'])
    service = new HttpService(httpClientSpy as any)
    component2= new HomeComponent(service)
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul when call list of city', fakeAsync(()=>{
    const mockResp: cityReponse={
      count:1,
      _embedded:{"city:search-results":[]},
      _links:{
        curies:[],
        self:{href:""}
      }
      
      
      
    }
    component2.cityList=[]

    spyOn(service,"getCityList").and.returnValue(of(mockResp))

    component2.getCityList("1")
    flush() 
    expect(component.getCityList).toHaveBeenCalled
  })); 


  it('shoul when call getCityData', fakeAsync(()=>{
    const mockResp: cityData= {
      categories: [{
          color: "",
          name: "",
          score_out_of_10: 0
      }],
      summary: "",
      teleport_city_score: 0,
      _links: {
          curies: [{
              href: "",
              name: "",
              templated: false
          }],
          "city:urban_area":{
            href:""
          },
          self:{
              href:""
          }
        }
      }

    spyOn(service,"getCityData").and.returnValue(of(mockResp))

    component2.getCityData("1")
    flush() 
    expect(component.getCityData).toHaveBeenCalled
  })); 


  it('shoul when call getLinkCity(', fakeAsync(()=>{
    const mockCity: searchResponse= {
      matching_alternate_names: [{ name: "name" }],
      matching_full_name: "name",
      _links: {
        "city:item":{
        href:""
      }}
  
  }
       spyOn(service,"getLinkCity").and.returnValue(of(mockCity))

    component2.getLinkCity(mockCity)
    flush() 
    expect(component.getLinkCity).toHaveBeenCalled
  })); 


 
});
