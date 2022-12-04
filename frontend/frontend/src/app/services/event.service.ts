import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
url='http://127.0.0.1:3000/event/';

  constructor(private http:HttpClient) {}
    
  
  create( event : any){
      return this.http.post(this.url+'add' , event);

    }
  getAll(){
    return this.http.get(this.url+'all');
  }
  getById(id:any){
    return this.http.get(this.url+'getById/'+id);
  }
  delete(id:any){
    return this.http.delete(this.url+'delete/'+id);
  }
  update(id : any , event : any ){
    return this.http.put(this.url+'update/'+id , event);
  }
     }

