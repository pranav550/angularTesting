import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './../app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './../data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import mockData from "../mock.data.json";
import { UserComponent } from './user.component';
import { Observable, from, of, observable, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, AppComponent],
      providers: [DataService],
      imports: [
        RouterTestingModule, HttpClientTestingModule, HttpClientModule
      ],
    })
      .compileComponents();
    service = TestBed.get(DataService);
  }

  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the data from service', () => {
    spyOn(service, 'getData').and.returnValue(of(mockData));
    component.getDataResponse();
    expect(component.datas).toEqual(mockData);

  });


});
