import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-explorer',
  templateUrl: './sound-explorer.component.html',
  styleUrls: ['./sound-explorer.component.css']
})
export class SoundExplorerComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.authorize();
  }

}
