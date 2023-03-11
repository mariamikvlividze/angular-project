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

  index:any=undefined;
  
   test(info:any,i:number){

      this.index  =  info;

      this.showmodal = true;
      
   }
  
  
   exit(){

    this.showmodal=false;

   }



     toggle:number=-1;
     sum1:boolean=false;
     arr: any = [];

     

   ChangeColor(i:number){
       this.toggle=i
       console.log(i===this.toggle)
        this.sum1=!this.sum1
       
 
    
     
      if(this.arr.includes(i)){
        this.arr.pop(i)
      }
      else{
         this.arr.push(i)
      }
        
             console.log(this.arr)
   }

     btnArr:any=[]
   
    test2(i:number){
      return i===this.toggle
    }


    test3(num:any){
      console.log(this.arr.includes(num))
     return  this.arr.includes(num)
    }
}

