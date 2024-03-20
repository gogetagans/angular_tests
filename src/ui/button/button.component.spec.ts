/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, ButtonComponent]
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

  it('should have the correct appearance property for secondary', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    app.appearance = 'secondary';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.secondary')).toBeTruthy();
    expect(app.appearance).toBe('secondary');
  });

  
  it('should have the correct appearance property for raised', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    app.appearance = 'raised';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.raised')).toBeTruthy();
    expect(app.appearance).toBe('raised');
  });

 
  it('should have the correct appearance property for flat', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    app.appearance = 'flat';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.flat')).toBeTruthy();
    expect(app.appearance).toBe('flat');
  });
  
   // do the same tests for stroked
  it('should have the correct appearance property for stroked', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    app.appearance = 'stroked';
    fixture.detectChanges();  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.stroked')).toBeTruthy();
    expect(app.appearance).toBe('stroked');
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
