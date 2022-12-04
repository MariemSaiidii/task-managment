import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateevents',
  templateUrl: './updateevents.component.html',
  styleUrls: ['./updateevents.component.css']
})
export class UpdateeventsComponent 
implements OnInit {
  id : any ;
  event : any ;
  newImage : any ; 
  selectImage(e : any){
    this.newImage = e.target.files[0];
  }
  constructor( private act : ActivatedRoute , private _event:EventService , private router : Router ) { 
  this.id = this.act.snapshot.paramMap.get('id');
  this._event.getById(this.id)
    .subscribe(
      (res)=>{
        this.event=res ;
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  update(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit this event!'
    }).then((result) => {
      if (result.isConfirmed) {
        let fd=new FormData();
    fd.append('title' , this.event.title) 
    fd.append('description', this.event.description ) 
    fd.append('date', this.event.date) 
    fd.append('address' , this.event.address) 
    if(this.newImage){
      fd.append('image',this.newImage)
    }else {
      fd.append('image' , this.event.image)
    }
    this._event.update(this.id,fd)
      .subscribe(
        (res)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your event has been edited',
            showConfirmButton: false,
            timer: 2500
          })
          this.router.navigate(['/list'])
        },
        (err)=>{
          console.log(err)
        }
      )
      }
    })
    
      
  }

  ngOnInit(): void {
  }

}
