import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NgPellComponent} from './ng-pell.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NgPellComponent
  ],
  entryComponents: [
    NgPellComponent
  ],
  exports: [
    NgPellComponent
  ]
})
export class NgPellModule {
}
