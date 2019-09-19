import { Component, OnInit,  ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-bk-leftdiv',
  templateUrl: './bk-leftdiv.component.html',
  styleUrls: ['./bk-leftdiv.component.css']
})
export class BkLeftdivComponent implements OnInit {

  @ViewChild('rightSidenav') public sidenav: MatSidenav;
  
  public status: any = 1;

  constructor(private sidenavService: SidenavService) { }


  ngOnInit(): void {

    this.sidenavService.setSidenav(this.sidenav);

  }

  open(val:any){
    this.status = val;
  }

}
