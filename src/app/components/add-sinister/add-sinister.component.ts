import { Component, OnInit } from '@angular/core';
import { Sinister } from 'src/app/models/sinister';
import { SinisterService } from 'src/app/services/sinister.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-sinister',
  templateUrl: './add-sinister.component.html',
  styleUrls: ['./add-sinister.component.css']
})
export class AddSinisterComponent implements OnInit {

  sinister: Sinister = new Sinister() ;


  constructor(private _sinisterService: SinisterService,
              private _router: Router,
               private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if(isIdPresent ){

      const id = +this._activatedRoute.snapshot.paramMap.get('id')!;

      this._sinisterService.getSinisterById(id).subscribe(

        data => this.sinister = data
      )

      
    }
  }

  addSinister(){
    this._sinisterService.addSinister(this.sinister).subscribe(

      data =>{

        console.log('response' , data);
        this._router.navigateByUrl("/sinisters");
      }

       )
  }


  deleteSinister(id:number){
   this._sinisterService.deleteSinister(id).subscribe(
     data => {
         console.log('deleted response' , data) ;
         this._router.navigateByUrl('/sinisters')      

     }
   )

  }

}
