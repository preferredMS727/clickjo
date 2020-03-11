import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ads-view',
  templateUrl: './ads-view.component.html',
  styleUrls: ['./ads-view.component.scss']
})
export class AdsViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdsViewComponent>
  ) { }

  ngOnInit() {
    console.log('this is passed data: ', this.data)
  }

  close() {
    this.dialogRef.close();
  }

}
