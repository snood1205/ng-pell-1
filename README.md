# ng-pell
## What is this

It's a port of [pell](https://github.com/jaredreich/pell) for Angular 4+. 

## How do I use it

In a component like this

./example/example.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `<ng-pell-component [(ngModel)]="html"></ng-pell-component>`
})
export class ExampleComponent {
  html: string
}
```

and it must be included in the respective module like this

./example/example.module.ts

```typescript
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {ExampleComponent} from './example.component'
import {NgPellModule} from 'ng-pell'

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    NgPellModule
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class ExampleModule {}
```

## Installation

It can be added to your project like this

```bash
yarn add ng-pell
```
