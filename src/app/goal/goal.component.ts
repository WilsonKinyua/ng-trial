import { HttpClient } from '@angular/common/http';
import { AlertService } from './../alert-service/alert.service';
import { GoalService } from './../goal-service/goal.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';
// import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  // providers: [GoalService]
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote: Quote;

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  constructor(
    goalService: GoalService,
    alertService: AlertService,
    private http: HttpClient,
    private quoteRequestService: QuoteRequestService,
    private router: Router,
  ) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  // http client
  ngOnInit(): void {
    this.quoteRequestService.quoteRequest();
    this.quote = this.quoteRequestService.quote;
    
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(index) {
    let toDelete = confirm(
      `Are you sure you want to delete ${this.goals[index].name}?`
    );

    if (toDelete) {
      this.goals.splice(index, 1);
      this.alertService.alertMe('The goal was deleted successfully!');
    }
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  goToUrl(id) {
    this.router.navigate(['/goals',id]);
  }
}
