import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  public currentSort = [
    'todos',
    'tasks',
    'work-times',
    'top-tracks',
    'top-offers'
  ]
  constructor() { }

  ngOnInit() {
  }

}
