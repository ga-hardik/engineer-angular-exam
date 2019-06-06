import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Import custom components
import { ModalComponent } from './../../shared/components/modal/modal.component';
import { AlgoliaService } from '../../core/services/algolia.service';
import { Algolia } from '../../core/model/algolia.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  rows: Algolia;
  interval: Observable<number> = timer(0, 1000 * 10);

  constructor(
    private algoliaService: AlgoliaService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.interval.subscribe(data => {
      this.getData();
    });
  }

  getData() {
    this.algoliaService.getAllData().subscribe(response => {
      this.rows = response;
      this.rows.hits.reverse();
    }, (err) => {
      alert('Unable to get data');
    });
  }

  openModel(row) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = row;
  }
}
