import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VinService } from '../../vins.service';

@Component({
  selector: 'app-summmary',
  templateUrl: './summmary.component.html',
  styleUrls: ['./summmary.component.css']
})

export class SummmaryComponent implements OnInit {
  vehicles: any;
  constructor( private router: Router, private vinService: VinService) { }

  ngOnInit() {
    this.vinService.getSummaryReport().subscribe(data => { this.vehicles = data; console.log(data); });
  }

}
