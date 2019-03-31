import { Component, OnInit } from '@angular/core';
import { VinModel } from '../models/VinModel';
import { VinService } from '../vins.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  vins: VinModel[];
  constructor(private vinsService: VinService) { }

  ngOnInit() {
    this.getAllVins();
  }

  getAllVins() {
    this.vinsService.getAllVins().subscribe(data => {this.vins = data; });
  }
}
