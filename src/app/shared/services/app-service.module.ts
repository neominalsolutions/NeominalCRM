import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseUploaderService } from './firebase-uploader.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[FirebaseUploaderService]
})
export class AppServiceModule { 

  static forRoot(config: any): ModuleWithProviders<AppServiceModule> {
    return {
      ngModule: AppServiceModule
    };
  }
}
