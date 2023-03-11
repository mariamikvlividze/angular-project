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
  selectValue:any;
  selectPlace:any;
 

  
  onInfoSave(){
    this.guestInfoArr.push(this.guestInfo)
   
    this.guestInfo=new Info()

    this.selectValue = "0";
    console.log(this.guestInfoArr)
    this.selectPlace='0'

     return this.onChange()
    


  }
   
onChange(){

  this.guestInfoArr.push(this.selectValue)
}  
onPlaceSelect(){
  this.guestInfoArr.push(this.selectPlace)
}

}
