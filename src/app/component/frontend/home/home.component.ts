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

    this.meta.setTitle('Arnie Fonseca - Personal Development Mentor');
    this.meta.setTag('og:description', 'Invite your audience to be mentored by “Coach Arnie” at your events, and create an environment for them to learn simple, yet powerful self-development methods that will improve their lives considerably.');
    this.meta.setTag('twitter:description', 'Invite your audience to be mentored by “Coach Arnie” at your events, and create an environment for them to learn simple, yet powerful self-development methods that will improve their lives considerably.');

    this.meta.setTag('og:keyword', 'Arnie Fonseca, Coach Arnie, Personal Development Coach, Personal Development Mentor, Personal Development Coaching');
    this.meta.setTag('twitter:keyword', 'Arnie Fonseca, Coach Arnie, Personal Development Coach, Personal Development Mentor, Personal Development Coaching');

    this.meta.setTag('og:title', 'Arnie Fonseca - Personal Development Mentor');
    this.meta.setTag('twitter:title', 'Arnie Fonseca - Personal Development Mentor');
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
