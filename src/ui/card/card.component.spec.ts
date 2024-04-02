/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import ButtonComponent from './card.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ButtonComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct appearance property by default', () => {
    expect(component.appearance).toBe('primary');
  });

  it('should have the correct appearance class for secondary', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.appearance = 'secondary';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.secondary')).toBeTruthy();
  });

  
  it('should have the correct appearance class for raised', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.appearance = 'raised';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.raised')).toBeTruthy();
  });

 
  it('should have the correct appearance class for flat', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.appearance = 'flat';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.flat')).toBeTruthy();
  });
  
  it('should have the correct appearance class for stroked', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.appearance = 'stroked';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.stroked')).toBeTruthy();
  });

  it('should have the onClick event emitter', () => {
    expect(component.onClick).toBeDefined();
  });

  it('should emit the onClick event when handleClick is called', () => {
    spyOn(component.onClick, 'emit');
    component.handleClick();
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
