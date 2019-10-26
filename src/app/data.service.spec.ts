import { TestBed } from '@angular/core/testing';
import MockData from "./mock.data.json"
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';

fdescribe('DataService', () => {
  let dataService:DataService;
  let httpTestingController:HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientTestingModule, HttpClientModule],
    
    })
    dataService = TestBed.get(DataService);
    httpTestingController = TestBed.get(HttpTestingController);
   
  });


  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should be get api called ', () => {
   dataService.getData().subscribe(data=>{
     expect(data['data']).toEqual(MockData);
   });
   let req=httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
   //let req = httpTestingController.expectOne('APIConstant');
   expect(req.request.method).toBe('GET');
   req.flush({ data: MockData });
  });
});
