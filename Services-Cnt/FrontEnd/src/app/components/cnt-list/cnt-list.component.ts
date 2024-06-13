import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CntService } from '../../services/cnt.service';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-cnt-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule],
  templateUrl: './cnt-list.component.html',
  styleUrls: ['./cnt-list.component.css'],
})
export class CntListComponent implements OnInit {
  cnts: any[] = [];
  @Output() selectedCnt = new EventEmitter<any>();

  constructor(private service: CntService) {}

  ngOnInit() {
    this.loadCnts();
  }

  loadCnts() {
    this.service.getCnts().subscribe((data) => {
      this.cnts = data;
    });
  }

  deleteCnt(id: number) {
    this.service.deleteCnt(id).subscribe(() => {
      this.loadCnts();
    });
  }
}
