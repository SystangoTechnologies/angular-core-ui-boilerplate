import { Component, OnInit,ViewChild } from '@angular/core';
import { AlertService } from '@shared/services';
import { CommonModalComponent } from '@shared/components';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild(CommonModalComponent) commonModal:CommonModalComponent
  constructor() { }

  ngOnInit(): void {
  }
  delete(id)
  {
    this.commonModal.show();
  }

  confirmDelete()
  {
    // perform your action on confirm from the confirmation popup. 
      
      /*-------->action<-------*/ 

    // hide modal after successfully delete
    this.commonModal.hide();
  }
}
