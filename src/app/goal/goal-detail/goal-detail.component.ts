import { Goal } from './../../goal';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css'],
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  goalComplete(complete:boolean) {
    this.isComplete.emit(complete);
  }

  goalDelete(complete:boolean){
    this.isComplete.emit(true);
  }
}
