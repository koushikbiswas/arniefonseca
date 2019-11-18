import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-employee-training',
  templateUrl: './employee-training.component.html',
  styleUrls: ['./employee-training.component.css']
})
export class EmployeeTrainingComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Arniefonseca - Employee Training');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'Arniefonseca - Employee Training');
    this.meta.setTag('twitter:title', 'Arniefonseca - Employee Training');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo.png');
  }

  ngOnInit() {
  }

}
