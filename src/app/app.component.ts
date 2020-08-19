import { Component, OnInit } from '@angular/core';
import { AddressDetails } from 'src/address-details';
import { zip } from 'rxjs';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _addressService: AddressService){}
  ngOnInit(): void {
    this.getDetails("ada");
  }
  title = 'AddressSearchUI';
  // addressDetails: AddressDetails[]=[{
  //   address: "Old Delhi Market",
  //   city: "New Delhi",
  //   state: "Delhi",
  //   zip: "110001"
  // }];
  addressDetails: AddressDetails[];
  searchbar: string;

  getDetails(searchTerm: string){
    this._addressService.getOrdersByTerm(searchTerm).subscribe(
      success=>{
        this.addressDetails=success;
      },
      error=>{
        console.log("error")
      }
    )

  }
}
