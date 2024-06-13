import { Component, OnInit } from '@angular/core';
import { CntListComponent } from '../../components/cnt-list/cnt-list.component';
import { CntComponent } from '../../components/cnt/cnt.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [CntComponent],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
