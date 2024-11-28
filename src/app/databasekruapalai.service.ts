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
    return this.http.post('http://127.0.0.1/apiproject/insertmamu.php', data);
   }

   showmenu(){
    return this.http.get('http://127.0.0.1/apiproject/listmamu.php');
   }

   delMember(id:any){
    return this.http.delete('http://127.0.0.1/apiproject/deletemamu.php?id='+id);
  }

  updatestatus(upstatus:any){
    return this.http.put('http://127.0.0.1/apiproject/updatestatus.php',upstatus);
  }

}
