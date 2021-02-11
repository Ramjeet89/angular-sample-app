import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {CoursesComponent} from './courses/courses.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [{path:'',redirectTo:'/dashboard', pathMatch:'full'},
{path : 'dashboard', component: DashboardComponent},
 {path : 'details/:id', component: CourseDetailComponent},
 {path : 'courses', component: CoursesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
