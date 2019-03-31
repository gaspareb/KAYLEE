import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VinService } from '../vins.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private vinService: VinService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      vinNumber: ['', Validators.required],
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required],
      auctionDate: ['', Validators.required],
      closingDate: ['', Validators.required],
      runNumber: ['', Validators.required],
      laborDescription: ['', Validators.required],
      laborCost: ['', Validators.required],
      partDescription: ['', Validators.required],
      partsCost: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.addForm.valid){
      console.log("this.addForm.value" + this.addForm.value);
      this.vinService.addVin(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
