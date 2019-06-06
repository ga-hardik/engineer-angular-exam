import { AlgoliaService } from './services/algolia.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AlgoliaService
  ],
  declarations: []
})
export class CoreModule { }
