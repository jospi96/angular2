import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import {  cityData, searchResponse } from '../model';
import { of } from 'rxjs';
describe('HttpService', () => {
  let service: HttpService;
  let httpClienteSpy: {
    [x: string]: any; post: jasmine.Spy;
    get: jasmine.Spy;
    put: jasmine.Spy;
    delete: jasmine.Spy
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]

    });
    service = TestBed.inject(HttpService);
  });

  httpClienteSpy = jasmine.createSpyObj('HttpClient', [ 'get'])
    service = new HttpService(httpClienteSpy as any)

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCityData should return []',fakeAsync ((done: DoneFn) => {
    const dataCity: cityData={
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
          templated: true
      }],
      self:{
          href:""
     
  
    }
  }}

    httpClienteSpy.get.and.returnValue(of(dataCity))
    service.getCityData("").subscribe(data => {
      expect(data).toEqual(dataCity)
      done();

    })
    expect(service.getCityData("")).toBeDefined
    expect(true).toBeTruthy();

  }));

  it('#getCityList should return []', fakeAsync ((done: DoneFn) => {
    const cityList: searchResponse={
      matching_alternate_names: [{ name: "" }],
    matching_full_name: "",
    _links: {"city:item":{
      href:""
  }
    }
  }
    httpClienteSpy.get.and.returnValue(of(cityList))
    service.getCityList("").subscribe(data => {
      expect(data).toEqual(cityList)
      done();

    })
    expect(service.getCityList("")).toBeDefined
    expect(true).toBeTruthy();

  }));
  it('#getLinkCity should return []', fakeAsync ((done: DoneFn) => {
    const link=""
    httpClienteSpy.get.and.returnValue(of(link))
    service.getLinkCity("").subscribe(data => {
      expect(data).toEqual(link)
      done();

    })
    expect(service.getLinkCity("")).toBeDefined
    expect(true).toBeTruthy();

  }));
});
