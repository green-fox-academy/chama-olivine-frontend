import { TestBed } from '@angular/core/testing';

import { CreateHeroService } from './create-hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      FormsModule,
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CreateHeroService = TestBed.get(CreateHeroService);
    expect(service).toBeTruthy();
  });
});
