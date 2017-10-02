import { Http, Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable()
export class SpotifyDataService {

  private _spotfiyBaseRoute = 'https://accounts.spotify.com';
  constructor(private http: Http) { }

  public authorize(){
    const scopes = 'user-read-private playlist-read-private	streaming user-read-recently-played user-read-currently-playing user-modify-playback-state';
    const authorizationUrl = `${this._spotfiyBaseRoute}/authorize/?client_id=${environment.spotify.clientId}&response_type=code&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(environment.spotify.redirectUri)}` ;
    this.http
    .get(authorizationUrl, {})
    .subscribe((res: Response) => {
      const result = res.json();
      console.info(result);
      
    });
  }
}
