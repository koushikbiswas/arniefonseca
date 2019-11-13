import { Component, OnInit, ChangeDetectorRef, ViewChild, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    var data: any = {};
  }

  btnClick() {
    this.router.navigateByUrl('/testimonial');
  };
}
