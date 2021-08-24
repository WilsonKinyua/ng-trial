import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal/goal-detail/goal-detail.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { UsernameComponent } from './username/username.component';
import { PropertyComponent } from './property/property.component';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component';
import { GoalService } from './goal-service/goal.service';
import { NewAccountComponent } from './udemy/new-account/new-account.component';
import { AccountComponent } from './udemy/account/account.component';
import { LoggingService } from './logging.service';
import { AccountService } from './acounts.service';
import { PostsComponent } from './posts/posts.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    GoalComponent,
    GoalDetailComponent,
    TodoComponent,
    TodoDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    UsernameComponent,
    PropertyComponent,
    SubscriptionsFormComponent,
    NewAccountComponent,
    AccountComponent,
    PostsComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [GoalService, LoggingService, AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
