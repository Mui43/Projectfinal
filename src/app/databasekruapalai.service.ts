import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabasekruapalaiService {

  //ประกาศตัวแปรแบบ อาเรย์ เพื่อรับค่า/show ข้อมูล
  data_dateilmamu: any=[];

  constructor(public http:HttpClient) {

  }

  addmenu(data:any){
    console.log("ค่ามาจากแอป" , data);
    return this.http.post('http://127.0.0.1/api/insertmenu.php', data);
   }

   showmenu(){
    return this.http.get('http://127.0.0.1/api/listmenu.php');
   }

   delMember(id:any){
    return this.http.delete('http://127.0.0.1/api/deletemenu.php?id='+id);
  }

  updatestatus(upstatus:any){
    return this.http.put('http://127.0.0.1/api/updatestatus.php',upstatus);
  }

  registerUser(dataUser:any){
    return this.http.post('http://127.0.0.1/api/register.php', dataUser);
   }

   loginUser(datalog:any){
    return this.http.post('http://127.0.0.1/api/login.php', datalog);
  }

   logoutUser(){
    return this.http.post('http://127.0.0.1/api/logout.php',{});
  }

}
