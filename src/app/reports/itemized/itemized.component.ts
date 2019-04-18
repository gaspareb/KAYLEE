import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { VinService } from 'src/app/vins.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-itemized',
  templateUrl: './itemized.component.html',
  styleUrls: ['./itemized.component.css']
})
export class ItemizedComponent implements OnInit {
  auctionDates: {};
  itemized: [];
  sumTotal: any;
  public show = false;
  itemizedForm: FormGroup;
  checkedVins  = [];
  public hasChanged = false;
  public hasChecks = false;


  constructor(private datePipe: DatePipe, private router: Router, private vinService: VinService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.getAllAuctionDates();
    this.itemizedForm = this.formBuilder.group({
    });

  }

  getAllAuctionDates() {
    this.vinService.getAllAuctionDates().subscribe(data => { this.auctionDates = data; });

  }
  getItemized(auctionDate: any) {
// tslint:disable-next-line: max-line-length
    this.checkedVins = [];
    this.vinService.getItemized(auctionDate).subscribe(data => { this.itemized = data; });
    if (document.getElementById('theButton') != null) {
      document.getElementById('theButton').innerHTML = 'Select';
    }
    if (!this.show) {
      this.show = !this.show;
    }
    this.hasChecks = false;
    this.hasChanged = false;
  }

  onClicked(event) {
    this.checkedVins.push(event.target.value);
    this.hasChecks = true;
  }

  printMe() {
    if (document.getElementById('theButton').innerHTML === 'Print') {
      window.print();
    } else {
      this.hasChanged = true;
    }
    if (this.checkedVins) {
      document.getElementById('theButton').innerHTML = 'Print';
      this.vinService.printItemized(this.checkedVins).subscribe(data => { this.itemized = data; });
    }
  }
}
