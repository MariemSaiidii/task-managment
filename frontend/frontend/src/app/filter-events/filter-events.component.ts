import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router ,  ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filter-events',
  templateUrl: './filter-events.component.html',
  styleUrls: ['./filter-events.component.css']
})
export class FilterEventsComponent implements OnInit {
dateselected : any ; 
events : any ;
date : any; 
  constructor(private _event : EventService , private route : ActivatedRoute ) { }

  ngOnInit(): void {    
   this.date = this.route.snapshot.paramMap.get('date')
   this._event.getByDate(this.date)
      .subscribe(
            (res)=>{
              this.events=res ; 
              console.log(res)
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
