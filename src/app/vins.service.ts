import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<VinModel[]>(this.baseurl + 'vins');
  }

  addVin(vin: VinModel) {
    return this.http.post(this.baseurl + 'vin', vin);
  }

  delVin(vin: VinModel) {
    return this.http.delete(this.baseurl + 'vin'  + '/' + vin);
  }

  getVehicle(vin: string) {
    return this.http.get<VehicleModel>(this.baseurl + 'vehicles'  + '/' + vin);
  }

}
