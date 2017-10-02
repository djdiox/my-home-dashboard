import { TestBed, inject } from '@angular/core/testing';

import { SpotifyDataService } from './spotify-data.service';

describe('SpotifyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyDataService]
    });
  });

  it('should be created', inject([SpotifyDataService], (service: SpotifyDataService) => {
    expect(service).toBeTruthy();
  }));
});
