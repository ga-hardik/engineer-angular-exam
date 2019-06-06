// Import core/native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import third party modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import custom modules
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// Import custom components/services/pipes
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
