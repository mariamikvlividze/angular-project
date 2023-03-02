import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Email } from './footer.module';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  humanInfo:Email=new Email()
  PersonEmail:Email[]=[]
   onBtnClick(){
         // console.log("btn was  clicked")
          this.PersonEmail.push(this.humanInfo)
          this.humanInfo=new Email()
          console.log(this.PersonEmail)
      

   }
  
    
   }

