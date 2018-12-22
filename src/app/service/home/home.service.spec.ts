import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import {expect} from "@angular/core/testing/src/testing_internal";

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});
