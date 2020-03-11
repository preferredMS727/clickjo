import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AdsViewComponent } from '../_shared-components/ads-view/ads-view.component';
import { AdsDeleteComponent } from '../_shared-components/ads-delete/ads-delete.component';

export interface adsData {
  id: string;
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
  selector: 'app-favoriated-ads',
  templateUrl: './favoriated-ads.component.html',
  styleUrls: ['./favoriated-ads.component.scss']
})
export class FavoriatedAdsComponent implements OnInit {

  displayedColumns = ['select', 'id', 'adTitle', 'status', 'category', 'adType', 'option'];
  tempData:adsData[] = [
    {id: '1', adTitle: 'test1',status: 'In review', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 20, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {id: '2', adTitle: 'test2',status: 'Active', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 30, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {id: '3', adTitle: 'test3',status: 'Active', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 75, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {id: '4', adTitle: 'test4',status: 'In review', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 55, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
    {id: '5', adTitle: 'test5',status: 'In review', category: 'Furniture, and homeware', adType: 'Box [Mini box]', progress: 100, publishedDate: '20 Sep 2019', boxType: 'Mini Box', tags: '', logo: 'assets/img/bg3.jpg', banner: 'assets/img/bg9.jpg'},
  ]
  dataSource: MatTableDataSource<adsData>;
  selection: SelectionModel<adsData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  messageFlag: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tempData);
    this.selection = new SelectionModel<adsData>(true, []);
    this.messageFlag = false;
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
