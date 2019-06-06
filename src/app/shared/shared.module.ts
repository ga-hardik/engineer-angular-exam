import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [
    ModalComponent,
    SearchPipe
  ],
  exports: [
    ModalComponent,
    SearchPipe,
    FormsModule,
    NgHttpLoaderModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
