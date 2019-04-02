import { Component, OnInit } from '@angular/core';
import { VinService } from '../vins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  vinNumbers: any;
  error: string;
  message: string;
  successMsg: boolean;
  failError: boolean;

  constructor(private router: Router, private vinService: VinService) { }

  ngOnInit() {
    this.getAllVins();
    this.successMsg = false;
    this.failError = false;
  }

  getAllVins() {
    this.vinService.getAllVins().subscribe(data => { this.vinNumbers = data; });
  }

  deleteVIN(event: any) {
    console.log(event);
    this.vinService.delVin(event)
    .subscribe( data => {
      this.failError = false;
      this.successMsg = true;
      this.message = data.message;
      this.router.navigate(['/delete']);
    },
    err => this._handleSubmitSuccess(err));
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
}
