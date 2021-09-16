import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FirebaseUploaderService } from '../../services/firebase-uploader.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  uploadPercent:any = null;
  downloadURL:any = null;


  constructor(private uploader: FirebaseUploaderService) { 
    this.addListener();
  }

  addListener() {
    this.uploader.onDownloadLink.subscribe(link => {
      console.log('link', link);
      this.downloadURL = link;
    });
    this.uploader.onUploadPercentage.subscribe(percent => {
      console.log('percent', percent);
      this.uploadPercent = percent;
    })
  }

  ngOnInit(): void {
  }

  uploadFile(event:any) {
    this.uploader.uploadFile(event);
  }

}
