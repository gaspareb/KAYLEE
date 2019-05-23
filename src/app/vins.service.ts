import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VinService {

  constructor(private http: HttpClient) { }

// tslint:disable-next-line: no-inferrable-types
   baseurl: string = 'https://www.superiortechnologysolutions.net:3000/';
  // tslint:disable-next-line: no-inferrable-types
  // baseurl: string = 'http://localhost:3000/';

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
    return this.http.get<any>(this.baseurl + 'vehicles'  + '/' + vin);
  }

  updateVin(vehicleModel: any) {
    return this.http.put<any>(this.baseurl + 'vehicles/update/', vehicleModel);
  }

  getSummaryReport() {
    return this.http.get<any>(this.baseurl + 'reports/summary');
  }

  getAllAuctionDates() {
    return this.http.get<any>(this.baseurl + 'reports/auctionDates');
  }

  printItemized(vins: any) {
    return this.http.get<any>(this.baseurl + 'reports/itemized/print/' + vins);
  }

  getItemized(auctionDate: any) {
    return this.http.get<any>(this.baseurl + 'reports/itemized/' + auctionDate);
  }
}
