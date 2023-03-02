import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MenuService } from '../menuservice/menu.service';
import { FoodInfo } from './info.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  MenuList:FoodInfo[] = []

  constructor(private menuService: MenuService) { }
  ngOnInit(): void {

    this.MenuList = this.menuService.getImg()
  }


  showmodal:boolean=false;
  index:any;
   test(i:number,info:any){
    //  this.ModalInfo.emit(this.MenuList)
      console.log(info)
      this.index  =  info;
      this.showmodal = true;
      console.log(this.MenuList)
      

   }
   exit(){
    this.showmodal=false;
   }



     toggle=true
   

   ChangeColor(i:any){
     this.toggle=!this.toggle;
  
     


}
     btnArr:any=[]
   
    
}

