import { Component, OnInit } from '@angular/core';
import { DateService } from '../shared/data.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  go(dir) {
    this.dateService.changeMonth(dir)
  }
}
