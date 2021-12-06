import { ComponentFixture, TestBed } from '@angular/core/testing';
import { isArray } from 'util';
import { FizzBuzzService } from '../fizz-buzz.service';
import { FizzBuzzComponent } from './fizz-buzz.component';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent ],
      providers: [FizzBuzzService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create fizz-buzz', () => {
    expect(component).toBeTruthy();
  });

  it(`should result be an fizz-buzz array`,() => {
    expect(isArray(component.doProcess)).toBeFalsy();
  })
});
