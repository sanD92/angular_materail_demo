import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
export interface FileElement {
  key:string;
  value:string;
  isPrimary:boolean;
}



@Component({
  selector: 'app-mat-table-demo',
  templateUrl: './mat-table-demo.component.html',
  styleUrls: ['./mat-table-demo.component.css']
})
export class MatTableDemoComponent implements OnInit {


   FILE_OBJECT: FileElement[] = [
    {key: "1", value: 'file1',isPrimary:false},
    {key: "2", value: 'file2',isPrimary:false},
    {key: "3", value: 'file3',isPrimary:false},
    ];
  displayedColumns: string[] = ['position', 'name','primary'];
  dataSource: MatTableDataSource<FileElement>;
  //dataSource = new MatTableDataSource<FileElement>(FILE_OBJECT);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource<FileElement>(this.FILE_OBJECT);
    this.dataSource.paginator = this.paginator;
  }
  setIsPrimary(element) {
    

    console.log(element);
    this.FILE_OBJECT[this.FILE_OBJECT.indexOf(element)] = {
      ...element,
      isPrimary: true
    };
    this.FILE_OBJECT
  }

}
