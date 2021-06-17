import { Component, OnInit } from '@angular/core';
import { SinisterService } from 'src/app/services/sinister.service';
import { Sinister } from 'src/app/models/sinister';


@Component({
  selector: 'app-list-sinisters',
  templateUrl: './list-sinisters.component.html',
  styleUrls: ['./list-sinisters.component.css']
})
export class ListSinistersComponent implements OnInit {
  
  sinisters:Sinister[]=[] ;

  constructor(private _sinisterService:  SinisterService) { }

  ngOnInit(): void {
    this._sinisterService.getSinister().subscribe(
      data => this.sinisters =data 
    )
  }

}
