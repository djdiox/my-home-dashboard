import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundExplorerComponent } from './sound-explorer.component';

describe('SoundExplorerComponent', () => {
  let component: SoundExplorerComponent;
  let fixture: ComponentFixture<SoundExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
