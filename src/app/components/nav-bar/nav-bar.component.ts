import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentGroup: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      switch (this.router.url) {
        case '/home':
        case '/':
        case '/projects':
          this.currentGroup = 'overview';
          break;
        case '/sounds':
          this.currentGroup = 'tools';
        default:
          break;
      }
    });
  }

}
