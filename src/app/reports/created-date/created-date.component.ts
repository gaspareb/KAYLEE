import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { VinService } from 'src/app/vins.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-created-date',
  templateUrl: './created-date.component.html',
  styleUrls: ['./created-date.component.css']
})

export class CreatedDateComponent implements OnInit {
  created: [];
  createdDates: {};
  sumTotal: any;
  public show = false;
  createdForm: FormGroup;


  constructor(private datePipe: DatePipe, private router: Router, private vinService: VinService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.getAllCreatedDates();
    this.createdForm = this.formBuilder.group({
    });

  }

  getAllCreatedDates() {
    this.vinService.getAllCreatedDates().subscribe(data => { this.createdDates = data; });

  }
  getCreated(createdDate: any) {
    this.vinService.getCreatedDates(createdDate).subscribe(data => { this.created = data; },
    err => console.log(err));

  }
}
