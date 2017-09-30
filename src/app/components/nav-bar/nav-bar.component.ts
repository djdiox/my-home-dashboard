import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NavBarComponent implements OnInit {
  currentGroup: string;
  activeMenu: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _eref: ElementRef) {
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
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
      this.activeMenu = '';
   }
 

}
