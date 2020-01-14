import { TestBed } from '@angular/core/testing';

import { AuthinterceptorService } from './authinterceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      FormsModule,
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AuthinterceptorService = TestBed.get(AuthinterceptorService);
    expect(service).toBeTruthy();
  });
});
