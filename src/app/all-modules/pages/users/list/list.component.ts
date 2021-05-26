import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private alert:AlertService) { }

  ngOnInit(): void {
  }
  delete(id)
  {
    let apiUrl = '/delete';
    this.alert.deletePopup(id,apiUrl);
  }
}
