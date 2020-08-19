import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient }   from '@angular/common/http';
import { AddressDetails } from 'src/address-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _httpClient: HttpClient) { }
  getOrdersByTerm(term: string): Observable<AddressDetails[]>{
    return this._httpClient.get<AddressDetails[]>(
      environment.apiUrl + "addressdetails/search?searchTerm=" +term);
  }
}
