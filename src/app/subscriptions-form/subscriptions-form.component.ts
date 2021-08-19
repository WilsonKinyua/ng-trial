import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subscriptions-form',
  templateUrl: './subscriptions-form.component.html',
  styleUrls: ['./subscriptions-form.component.css'],
})
export class SubscriptionsFormComponent implements OnInit {
  @ViewChild('f') subscribeForm: NgForm;

  selectedSubscription = 'Advanced';
  subscriptionFormSubmitted = false;

  subscriber = {
    email: '',
    subscription: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  // functions
  onSubmit() {
    this.subscriptionFormSubmitted = true;
    this.subscriber.email = this.subscribeForm.value.email;
    this.subscriber.subscription = this.subscribeForm.value.subscription;
    this.subscriber.password = this.subscribeForm.value.password;
    // reset form
    this.subscribeForm.reset();
  }
}
