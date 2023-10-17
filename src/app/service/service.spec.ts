import { TestBed } from '@angular/core/testing';


import { KullaniciService } from './kullanici.service';

describe('AuthServiceService', () => {
  let service: KullaniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KullaniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});