import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import Swal from 'sweetalert2' ; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent implements OnInit {

  event = {
    title :'',
    description :'',
    date :'',
    address :'',
  }
  image:any ;
  selectImage(e:any){
    this.image = e.target.files[0];
  }

  add(){
    let fd=new FormData();
    fd.append('title' , this.event.title) 
    fd.append('description', this.event.description ) 
    fd.append('date', this.event.date) 
    fd.append('address' , this.event.address) 
    fd.append('image', this.image)
    this._event.create(fd)
      .subscribe(
        (res)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Event has been created',
            showConfirmButton: false,
            timer: 2500
          })
          this.router.navigate(['/list']);
        },
        (err)=>{
           console.log(err)
          })
        
      
  }
  constructor(private _event:EventService , private router:Router) { }

  ngOnInit(): void {
  }

}
