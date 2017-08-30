import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCharactersImagesComponent } from './get-characters-images.component';

describe('GetCharactersImagesComponent', () => {
  let component: GetCharactersImagesComponent;
  let fixture: ComponentFixture<GetCharactersImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCharactersImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCharactersImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
