import { Component, OnInit } from '@angular/core';
import { VinService } from '../vins.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleModel } from '../models/VehicleModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],

})

export class UpdateComponent  implements OnInit {
  vinNumbers: {};
  vehicleModel: any;
  vinPicked: boolean;
  updateForm: FormGroup;
  error: string;
  message: string;
  successMsg: boolean;
  failError: boolean;
  searchErrorMsg: string;
  searchError: boolean;

  constructor(private datePipe: DatePipe, private formBuilder: FormBuilder, private router: Router, private vinService: VinService) { }

  ngOnInit() {
   // this.getAllVins();
    this.vinPicked = false;
    this.searchError = false;
    this.updateForm = this.formBuilder.group({
      _id: ['', Validators.required],
      searchVIN: '',
      VINNumber: ['', Validators.compose([Validators.required, Validators.pattern('[A-z0-9]{8}')])],
      Year: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}')])],
      Make: ['', Validators.required],
      Model: ['', Validators.required],
      Color: ['', Validators.required],
      DateCreated: ['', Validators.required],
      AuctionDate: ['', Validators.required],
      ClosingDate: ['', Validators.required],
      RunNumber: ['', Validators.required],
      LaborDescription: ['', Validators.required],
      LaborCost: ['', Validators.required],
      PartDescription: ['', ],
      PartsCost: ['', ],
      PartDescription1: ['', ],
      PartsCost1: ['', ],
      PartDescription2: ['', ],
      PartsCost2: ['', ],
      PartDescription3: ['', ],
      PartsCost3: ['', ],
      PartDescription4: ['', ],
      PartsCost4: ['', ],
      PartDescription5: ['', ],
      PartsCost5: ['', ],
      TotalCost: new FormControl({ value: '0.00', disabled: true})
    });
  }

  getAllVins() {
    this.vinService.getAllVins().subscribe(data => { this.vinNumbers = data; });
    this.vinPicked = false;
  }

  getVehicleSearch(event: any) {
    this.resetMsgs();
    this.ngOnInit();
    if (event.length === 8) {
    // tslint:disable-next-line: max-line-length
        this.vinService.getVehicle(event).subscribe(vehicledata => { this.vehicleModel = vehicledata; this.updateForm.patchValue({
          searchVIN: '',
          VINNumber: vehicledata[0].VINNumber,
          Year: vehicledata[0].Year,
          _id: vehicledata[0]._id,
          Make: vehicledata[0].Make,
          Model: vehicledata[0].Model,
          Color: vehicledata[0].Color,
          DateCreated: this.datePipe.transform(vehicledata[0].DateCreated.split('T')[0], 'yyyy-MM-dd'),
          AuctionDate: this.datePipe.transform(vehicledata[0].AuctionDate.split('T')[0], 'yyyy-MM-dd'),
          ClosingDate: this.datePipe.transform(vehicledata[0].ClosingDate.split('T')[0], 'yyyy-MM-dd'),
          RunNumber: vehicledata[0].RunNumber,
          LaborDescription: vehicledata[0].LaborDescription,
          LaborCost: vehicledata[0].LaborCost,
          PartDescription: vehicledata[0].PartDescription,
          PartsCost: vehicledata[0].PartsCost,
          PartDescription1: vehicledata[0].PartDescription1,
          PartsCost1: vehicledata[0].PartsCost1,
          PartDescription2: vehicledata[0].PartDescription2,
          PartsCost2: vehicledata[0].PartsCost2,
          PartDescription3: vehicledata[0].PartDescription3,
          PartsCost3: vehicledata[0].PartsCost3,
          PartDescription4: vehicledata[0].PartDescription4,
          PartsCost4: vehicledata[0].PartsCost4,
          PartDescription5: vehicledata[0].PartDescription5,
          PartsCost5: vehicledata[0].PartsCost5
        });
       }, error => {this.searchError = true; this.searchErrorMsg = error.error.message; });
        this.vinPicked = true;
      } else {
        this.searchError = true;
        this.searchErrorMsg = 'VIN must be 8 characters long';
      }
  }

//   getVehicle(event: any) {
//     this.searchError = false;
// // tslint:disable-next-line: max-line-length
//     this.vinService.getVehicle(event).subscribe(vehicledata => { this.vehicleModel = vehicledata; this.updateForm.patchValue({
//       VINNumber: vehicledata[0].VINNumber,
//       Year: vehicledata[0].Year,
//       _id: vehicledata[0]._id,
//       Make: vehicledata[0].Make,
//       Model: vehicledata[0].Model,
//       Color: vehicledata[0].Color,
//       DateCreated: this.datePipe.transform(vehicledata[0].DateCreated.split('T')[0], 'yyyy-MM-dd'),
//       AuctionDate: this.datePipe.transform(vehicledata[0].AuctionDate.split('T')[0], 'yyyy-MM-dd'),
//       ClosingDate: this.datePipe.transform(vehicledata[0].ClosingDate.split('T')[0], 'yyyy-MM-dd'),
//       RunNumber: vehicledata[0].RunNumber,
//       LaborDescription: vehicledata[0].LaborDescription,
//       LaborCost: vehicledata[0].LaborCost,
//       PartDescription: vehicledata[0].PartDescription,
//       PartsCost: vehicledata[0].PartsCost,
//       TotalCost: vehicledata[0].TotalCost
//     });
//    });
//     this.vinPicked = true;
//   }

  onSubmit() {
    this.resetMsgs();
    this.vinService.updateVin(this.updateForm.value)
    .subscribe( data => {
      this.failError = false;
      this.successMsg = true;
      this.message = data.message;
      this.vinPicked = true;
      this.router.navigate(['/update']);
    },
    err => this._handleSubmitSuccess(err));
  }

  private _handleSubmitSuccess(err) {
    this.failError = true;
    this.successMsg = false;
    this.error = err.error.message;
  }
  private resetMsgs() {
    this.failError = false;
    this.successMsg = false;
    this.searchError = false;
  }
  // get the form short name to access the form fields
  get f() { return this.updateForm.controls; }
}

