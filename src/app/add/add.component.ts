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
  addForm: FormGroup;
  error: string;
  message: string;
  successMsg: boolean;
  failError: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router, private vinService: VinService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      VINNumber: ['', Validators.compose([Validators.required, Validators.pattern('[A-z0-9]{8}')])],
      Year: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}')])],
      Make: ['', Validators.required],
      Model: ['', Validators.required],
      Color: ['', Validators.required],
      AuctionDate: ['', Validators.required],
      ClosingDate: ['', Validators.required],
      RunNumber: ['', Validators.required],
      LaborDescription: ['', Validators.required],
      LaborCost: ['', Validators.required],
      PartDescription: ['', Validators.required],
      PartsCost: ['', Validators.required]
    });
    this.successMsg = false;
    this.failError = false;
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.vinService.addVin(this.addForm.value)
      .subscribe( data => {
        this.failError = false;
        this.successMsg = true;
        this.message = data.message;
        console.log(data);
        this.router.navigate(['/add']);
      },
      err => this._handleSubmitSuccess(err));
    }
  }
  private _handleSubmitSuccess(err) {
    this.failError = true;
    this.successMsg = false;
    this.error = err.error.message;
  }
  private resetMsgs(err) {
    this.failError = false;
    this.successMsg = false;
  }
  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
