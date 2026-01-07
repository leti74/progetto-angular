import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFruit } from './search-fruit';

describe('SearchFruit', () => {
  let component: SearchFruit;
  let fixture: ComponentFixture<SearchFruit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFruit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFruit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
