import { Goals } from './../goal-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoalService {

  getGoals() {
    return Goals;
  }

  getGoal(id){
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      } else {
        return goal;
      }
    }
  }

  constructor() {}
}
