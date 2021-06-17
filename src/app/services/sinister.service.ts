import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sinister } from '../models/sinister';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SinisterService {
  
  private getUrl: string="http://localhost:8081/SpringMVC/servlet/retrieve-all-sinisters"
  private getUrl2: string="http://localhost:8081/SpringMVC/servlet/add-sinister"
  private getUrl3: string="http://localhost:8081/SpringMVC/servlet/retrieve-sinister"
  private getUrl4: string="http://localhost:8081/SpringMVC/servlet/remove-sinister"

  


  constructor(private _httpClient: HttpClient) { }

  
  getSinister():Observable<Sinister[]>{

    return this._httpClient.get<Sinister[]>(this.getUrl).pipe(
     map(response=>response)
    )
  }

  addSinister(sinister: Sinister): Observable<Sinister>{

    return this._httpClient.post<Sinister>(this.getUrl2,sinister);
}


getSinisterById(id:number): Observable<Sinister>{

  return this._httpClient.get<Sinister>(`${this.getUrl3}/${id}`).pipe(
    map(response =>response)
  )

}

deleteSinister(id: number): Observable<any>{

  return this._httpClient.delete(`${this.getUrl4}/${id}` ,{responseType:'text'}) ;
}


}
