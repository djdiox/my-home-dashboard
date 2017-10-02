import { SpotifyDataService } from './../../services/spotify-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-explorer',
  templateUrl: './sound-explorer.component.html',
  styleUrls: ['./sound-explorer.component.css']
})
export class SoundExplorerComponent implements OnInit {

  constructor(private spotifyService: SpotifyDataService) { }

  ngOnInit() {
    this.spotifyService.authorize();
  }

}
