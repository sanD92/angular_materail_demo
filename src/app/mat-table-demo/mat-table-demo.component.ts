import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
export interface FileElement {
  key: string;
  value: string;
  isPrimary: boolean;
}



@Component({
  selector: 'app-mat-table-demo',
  templateUrl: './mat-table-demo.component.html',
  styleUrls: ['./mat-table-demo.component.css']
})
export class MatTableDemoComponent implements OnInit {


  FILE_OBJECT: FileElement[] = [
    { key: "1", value: 'My File1', isPrimary: true },
    { key: "2", value: 'My File2', isPrimary: false },
    { key: "3", value: 'My File3', isPrimary: false },
    { key: "4", value: 'My File4', isPrimary: false },
    { key: "5", value: 'My File5', isPrimary: false },
    { key: "6", value: 'My File6', isPrimary: false },
    { key: "7", value: 'My File7', isPrimary: false },
    { key: "8", value: 'My File8', isPrimary: false },
    { key: "9", value: 'My File9', isPrimary: false },
    { key: "10", value: 'My File10', isPrimary: false },
    { key: "11", value: 'My File11', isPrimary: false },
    { key: "12", value: 'My File12', isPrimary: false },
    { key: "13", value: 'My File13', isPrimary: false },
    { key: "14", value: 'My File14', isPrimary: false },
  ];
  displayedColumns: string[] = ['position', 'name', 'primary', 'delete'];
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
    /*  this.FILE_OBJECT[this.FILE_OBJECT.indexOf(element)] = {
       ...element,
       isPrimary: true
     }; */
    //this.FILE_OBJECT
  }
  deleteFile(element, radRef) {
    console.log(radRef);
    console.log(element);
    alert('I am clicked!' + element.key);
  }

}
