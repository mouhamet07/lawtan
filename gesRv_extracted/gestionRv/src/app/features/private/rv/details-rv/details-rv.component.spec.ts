import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRvComponent } from './details-rv.component';

describe('DetailsRvComponent', () => {
  let component: DetailsRvComponent;
  let fixture: ComponentFixture<DetailsRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsRvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
