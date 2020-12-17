import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatorPage } from './creator.page';

describe('CreatorPage', () => {
  let component: CreatorPage;
  let fixture: ComponentFixture<CreatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
