import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
    viewerName: any;
    viewerForm: FormGroup;

    constructor(fb : FormBuilder, private router:Router){
      this.viewerForm = fb.group({
        viewerName:["",Validators.required]
      })
    }

    ngOnInit(){
      console.log(this.viewerName);
    }
    addViewer(){
      console.log("Hi, "+this.viewerName);
    }

    redirectToHome(){
      this.router.navigate(['/home']);
    }

    onButtonClick(){
      this.addViewer();
      this.redirectToHome();
    }
}
