import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader.component';
import { AngularMaterialModule } from '../../theme/material/angular-material.module';



@NgModule({
  declarations: [FileUploaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [FileUploaderComponent]
})
export class FileUploaderModule { }
