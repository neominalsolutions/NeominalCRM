import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploaderService {

  
  onUploadPercentage = new BehaviorSubject<any>(null);
  onDownloadLink = new BehaviorSubject<any>(null);
  onFileName = new BehaviorSubject<any>(null);

  constructor(private storage: AngularFireStorage) {}

  uploadFile(event:any) {
    const file = event.target.files[0];
    console.log('file', file);

    this.onFileName.next(file.name);

    const filePath = `/uploads/${file.name}` ;
    const fileRef = this.storage.ref(filePath);

    console.log('fileRef', fileRef);

    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.onUploadPercentage.next(task.percentageChanges());
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.onDownloadLink.next(fileRef.getDownloadURL()) )
     )
    .subscribe()
  }


}
