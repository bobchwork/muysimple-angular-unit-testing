import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import { PersonService } from "./PersonService";
import { RouterTestingModule } from "@angular/router/testing";

describe('PersonComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ PersonComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonComponent);
    app = fixture.debugElement.componentInstance;
  }));

  afterEach( () => {
    fixture.destroy();
    app =  null;
  })

  it('debe crear la aplicacion', () => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

  });

  it('debe obtener el nombre de la persona desde el servicio', () => {
    let personService = fixture.debugElement.injector.get(PersonService);
    fixture.detectChanges();
    expect(personService.person.name).toEqual(app.person.name);

  })

  it('debe mostrar el nombre si esta logueado', () => {
    app.person.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('p').textContent).toContain(app.person.name);

  })

  it('no debe mostrar el nombre si no esta logueado', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.person.name);

  })

});
