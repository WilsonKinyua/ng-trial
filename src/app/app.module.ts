import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal/goal-detail/goal-detail.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { UsernameComponent } from './username/username.component';
import { PropertyComponent } from './property/property.component';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    GoalComponent,
    GoalDetailComponent,
    UsersComponent,
    UserDetailsComponent,
    TodoComponent,
    TodoDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    UsernameComponent,
    PropertyComponent,
    SubscriptionsFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
