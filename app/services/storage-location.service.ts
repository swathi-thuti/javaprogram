import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StorageLocation } from '../models/storageLocation';
@Injectable({
  providedIn: 'root',
})
export class StorageLocationService {
  constructor(private http: HttpClient) {}

  getStorageList() {
    return this.http.get<StorageLocation[]>("/inv/manage/storageLoc/list") ;
  }
  createStorage(storage: StorageLocation) {
    
    return this.http.post("/inv/manage/storageLoc/create",storage );
  }
  getStorageById(id: number) {
    return this.http.get<StorageLocation>("/inv/manage/storageLoc/"+id);
  }
  updateStorageType(storage: StorageLocation) {
    return this.http.put("/inv/manage/storageLoc/update", storage);
  }
}
