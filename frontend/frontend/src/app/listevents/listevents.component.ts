import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListeventsComponent implements OnInit {
events: any ;
  constructor(private _event : EventService) { }

  ngOnInit(): void {
  this._event.getAll()
      .subscribe(
        (res)=>{
          this.events = res
        },
        (err)=>{
          console.log(err)
        }
      )
  }
delete( id : any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this._event.delete(id)
        .subscribe(
          (res)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your event has been deleted',
              showConfirmButton: false,
              timer: 2500
            })
            this.ngOnInit();
          },
          (err)=>{
            console.log(err)
          }
        )
    }
  })
}
}
