import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoPage } from './estabelecimento.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { IonicStorageModule } from '@ionic/storage';

describe('EstabelecimentoPage', () => {
  let component: EstabelecimentoPage;
  let fixture: ComponentFixture<EstabelecimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabelecimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        AngularFireModule.initializeApp(environment.firebase),
        IonicStorageModule.forRoot(),
        AngularFireAuthModule,
        AngularFirestoreModule, ],
        providers: [ModalController, AngularDelegate, DatabaseService, ]

    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
