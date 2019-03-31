import { Component, OnInit } from '@angular/core';
import { VinModel } from '../models/VinModel';
import { VinService } from '../vins.service';
import { VehicleModel } from '../models/VehicleModel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],

})

export class UpdateComponent  implements OnInit {
  vins: VinModel[];
  vehicle: VehicleModel;

  constructor(private vinsService: VinService) { }

  ngOnInit() {
    this.getAllVins();
  }

  getAllVins() {
    this.vinsService.getAllVins().subscribe(data => {this.vins = data; });
  }

  getVehicle(event: any) {
    this.vinsService.getVehicle(event.target.value).subscribe(data => { this.vehicle = data; });
  }
}

