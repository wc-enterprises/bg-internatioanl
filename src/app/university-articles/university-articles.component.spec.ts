import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityArticlesComponent } from './university-articles.component';

describe('UniversityArticlesComponent', () => {
  let component: UniversityArticlesComponent;
  let fixture: ComponentFixture<UniversityArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversityArticlesComponent]
    });
    fixture = TestBed.createComponent(UniversityArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
