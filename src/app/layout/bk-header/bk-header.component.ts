import { Component, OnInit, Inject  } from '@angular/core';
import { BkLeftdivComponent } from '../../../app/layout/bk-leftdiv/bk-leftdiv.component';
import { SidenavService } from '../../../app/services/sidenav.service';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bk-header',
  templateUrl: './bk-header.component.html',
  styleUrls: ['./bk-header.component.css']
})
export class BkHeaderComponent implements OnInit {

  constructor(private sidenav: SidenavService, public dialog: MatDialog) {}
  toggleActive:boolean = false;
  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
    console.log('Clicked');
  }

  ngOnInit() {
  }

}

