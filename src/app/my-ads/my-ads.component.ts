import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdsViewComponent } from 'app/_shared-components/ads-view/ads-view.component';
import { AdsDeleteComponent } from 'app/_shared-components/ads-delete/ads-delete.component';
import { NotificationService } from 'app/_services/notification.service';

declare const $: any;

export interface adsData {
  adTitle: string;
  status: string;
  category: string;
  adType: string;
  progress: number;
  publishedDate: string;
  boxType: string;
  tags: string;
  logo: string;
  banner: string;
}

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})

export class MyAdsComponent implements OnInit {

  displayedColumns = ['select', 'adTitle', 'status', 'category', 'adType', 'progress', 'publishedDate', 'option'];
  tempData:adsData[] = [
    {adTitle: '',status: 'In review', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 20, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {adTitle: '',status: 'Active', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 30, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {adTitle: '',status: 'Active', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 75, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {adTitle: '',status: 'In review', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 55, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {adTitle: '',status: 'In review', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 100, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
  ]
  dataSource: MatTableDataSource<adsData>;
  selection: SelectionModel<adsData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  messageFlag: boolean;

  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tempData);
    this.selection = new SelectionModel<adsData>(true, []);
    this.messageFlag = false;
    // $('.alert').hide();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  showAds(ads) {
    this.dialog.open(AdsViewComponent, {
      data: {adsData: ads},
      width: '90vw',
      height: '474px'
    });
  }

  deleteAds() {
    let delDialog = this.dialog.open(AdsDeleteComponent, {
      data: '',
      width: '60vw',
      height: '426px'
    })

    delDialog.afterClosed().subscribe(res => {
      console.log('delete boolean: ', res);
      this.messageFlag = res;
      // $('.alert').show();
      // $('.alert').addClass('show') 
      // this.notificationService.showNotification('top','center', 'success', 'adDelete')
    })
  }

  closeAlert() {
    this.messageFlag = false;
  }
}
