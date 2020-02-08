import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.AltkomDevelopersStudentModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.AltkomDevelopersCategoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class AltkomDevelopersEntityModule {}
