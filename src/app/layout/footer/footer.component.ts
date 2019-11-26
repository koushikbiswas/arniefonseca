import { Component, OnInit, HostListener, Inject, ViewChild  } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import  {ApiService} from '../../api.service';


export interface DialogData {}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    myform :FormGroup;
  windowScrolled: boolean;
  public data:any;

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, public formbuilder: FormBuilder, public apiService: ApiService) {
    // console.log(router.url);

      this.myform = this.formbuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],

      })





    
   }



   termscondition() {
    const dialogRef = this.dialog.open(DialogTermsDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  privacypolicy() {
    const dialogRef = this.dialog.open(DialogPrivacyDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   @HostListener("window:scroll", [])

   onWindowScroll() {
       if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
           this.windowScrolled = true;
       }
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
           this.windowScrolled = false;
       }
   }

   scrollToTop() {
    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }

    })();
}

  ngOnInit() {
    this.router.events.subscribe(() =>
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
          })
      );
  }


    doSubmit() {
        console.log('ok');
        this.data = this.myform.value;
        console.log(this.data);
       this.newslatterViewModal();
        for (let i in this.myform.controls) {
            this.myform.controls[i].markAsTouched();
        }
        if (this.myform.valid) {

           let link = '';
            let data = {data: this.myform.value};
            this.apiService.postdata(data).subscribe(res => {

                    let result: any = {};
                    result = res;
                    console.log(result);
                    if (result.status == 'success') {
                      /*  this.newslatterViewModal();*/
                        this.myform.reset();
                        // this.opencontactDialog();
                       /* const dialogRef = this.dialog.open(SubmitpopupComponent);*/

                        // this.inputUntouch(this.myform,'email');

                        this.myform.controls['email'].updateValueAndValidity();

                    }
                })

        }

    }




/*Newslatter modal */

newslatterViewModal(){

    const dialogGenreRef = this.dialog.open(NewslatterDialogComponent, {
      panelClass: ['modal-sm', 'infomodal'],
      //disableClose: true,
    });

    dialogGenreRef.afterClosed().subscribe(result => {
    });

  }



}


@Component({
    selector: 'terms-dialog',
    templateUrl: 'terms-dialog.html',
  })
  export class DialogTermsDialog {}


  
@Component({
    selector: 'privacy-dialog',
    templateUrl: 'privacy-dialog.html',
  })
  export class DialogPrivacyDialog {}

// newslatter dialog component
@Component({
  selector: 'newslatter-dialog',
  templateUrl: 'newsletter-dialog.html',
})
export class NewslatterDialogComponent {

public myformnews: FormGroup

 
constructor(public dialogRef: MatDialogRef<NewslatterDialogComponent>,

   @Inject(MAT_DIALOG_DATA) public data: DialogData, public formbuilder:FormBuilder, public dialog:MatDialog, public apiService: ApiService) {

    this.myformnews = this.formbuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        name: ['', Validators.required],
        phone: ['', Validators.required],
        company: ['', Validators.required],

    })




}
    
  public onNoClick(): void {
    this.dialogRef.close();
  }


    donewsSubmit() {
        console.log('ok');
        this.data = this.myformnews.value;
        console.log(this.data);
        this.newslattersuccessViewModal();
        for (let i in this.myformnews.controls) {
            this.myformnews.controls[i].markAsTouched();
        }
        if (this.myformnews.valid) {

            let link = '';
            let data = {data: this.myformnews.value};
            this.apiService.postdata(data).subscribe(res => {

                let result: any = {};
                result = res;
                console.log(result);
                if (result.status == 'success') {

                    this.myformnews.reset();




                    this.myformnews.controls['email'].updateValueAndValidity();
                    this.myformnews.controls['name'].updateValueAndValidity();
                    this.myformnews.controls['phone'].updateValueAndValidity();
                    this.myformnews.controls['company'].updateValueAndValidity();

                }


            })

        }

    }



    newslattersuccessViewModal(){

        const dialogGenreRef = this.dialog.open(NewslattersuccessDialogComponent, {
            panelClass: ['modal-sm', 'infomodal'],
            //disableClose: true,
        });

        dialogGenreRef.afterClosed().subscribe(result => {
        });
        setTimeout(function(){
            dialogGenreRef.close();
        }, 2000);
    }
}


// newslatter success dialog component
@Component({
    selector: 'newslatter-success-dialog',
    templateUrl: 'newsletter-success-dialog.html',
})
export class NewslattersuccessDialogComponent {

    public myformnews: FormGroup

    constructor(public dialogRef: MatDialogRef<NewslattersuccessDialogComponent>,
                /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) {}

    public onNoClick(): void {
        this.dialogRef.close();
    }

}

