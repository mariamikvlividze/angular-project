import { Component } from '@angular/core';
import { Info } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  guestInfo:Info= new Info()
  guestInfoArr:Info[]=[]

 

  
  onInfoSave(){
    this.guestInfoArr.push(this.guestInfo)
    console.log(this.guestInfoArr)
    



  }
    UpdateBtn(){
      this.guestInfoArr.splice(1)

      this.guestInfo= new Info()

}

}
