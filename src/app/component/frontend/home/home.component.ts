import { Component, OnInit, ChangeDetectorRef, ViewChild, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef, private router: Router, private readonly meta: MetaService) {

    this.meta.setTitle('Arniefonseca - Home');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Home');
    this.meta.setTag('twitter:title', 'Arniefonseca - Home');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');

   }

  ngOnInit() {
    var data: any = {};
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  btnClick() {
    this.router.navigateByUrl('/testimonial');
  };
}
