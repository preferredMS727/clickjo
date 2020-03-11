import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ads-delete',
  templateUrl: './ads-delete.component.html',
  styleUrls: ['./ads-delete.component.scss']
})
export class AdsDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdsDeleteComponent>
  ) { }

  ngOnInit() {
  }

  delete(res: boolean) {
    this.dialogRef.close(res);
  }

}
