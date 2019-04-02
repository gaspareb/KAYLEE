import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VinModel } from './models/VinModel';
import { VehicleModel } from './models/VehicleModel';

@Injectable({
  providedIn: 'root'
})
export class VinService {

  constructor(private http: HttpClient) { }

// tslint:disable-next-line: no-inferrable-types
  baseurl: string = 'http://localhost:3000/';

  getAllVins() {
    return this.http.get<any>(this.baseurl + 'vehicles');
  }

  addVin(vehicleModel: any) {
    return this.http.post<any>(this.baseurl + 'vehicles/add/', vehicleModel);
  }

  delVin(vin: any) {
    return this.http.delete<any>(this.baseurl + 'vehicles'  + '/' + vin);
  }

  getVehicle(vin: string) {
    return this.http.get<VehicleModel>(this.baseurl + 'vehicles'  + '/' + vin);
  }

}
