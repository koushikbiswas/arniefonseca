import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arniefonseca';
  loading =false;
  constructor(public router: Router){
    // console.log('URL'+this.router.url);
    this.router.events.subscribe((event:Event) =>{
      switch(true){
        case event instanceof NavigationStart:{
          this.loading = true;
          break;

        }

        case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:

          case event instanceof NavigationEnd:

         case event instanceof NavigationError:{

          this.loading = false;
          break;

         }
 
         default:{
          break;

         }

        }
 
      });
 
      }
  
  
}
