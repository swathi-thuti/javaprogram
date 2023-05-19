import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageLocation } from 'src/app/models/storageLocation';
import { StorageLocationService } from '../../../../services/storage-location.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrls: ['./list-storage.component.css'],
})
export class StorageLocationComponent implements OnInit, AfterViewInit {

locations: StorageLocation[] = [];
displayedColumns: string[] = ['identificationCode', 'detailedDescription','edit','remove'];
  

  

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  //locations: any;
  constructor(
    private router: Router,
    private storageLocationService: StorageLocationService
  ) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.getStorageList();
    //  this.locations.paginator = this.paginator;
  }

  getStorageList(): void {
    this.storageLocationService.getStorageList().subscribe(
      (locations) => {
        this.locations = locations;
      },
      (err) => {
        console.log('Error Generated while fetching User List from server');
      }
    );
  }
  createStorage() {
    this.router.navigate(['/createStorage']);
  }
}
