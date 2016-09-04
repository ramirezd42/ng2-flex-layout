# ng2-flex-layout
ng2-flex-layout is a small set of Angular 2 attribute directives aimed at providing flex-box based responsive layout directives that are api-compatible with those found in [Angular Material 1](https://material.angularjs.org/latest/layout/introduction).

## Installation/Setup
The following directions will work using the latest version of [angular-cli@webpack](https://github.com/angular/angular-cli)

### Install with NPM
Install with npm `npm install --save ng2-flex-layout`

### Add Module as a Dependency to Your App
Import `LayoutModule` and add it to the `imports` of your app's `AppModule`
```javascript
// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutModule } from 'ng2-flex-layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Import Required CSS File
Import the required css file into your app's **styles.css** file
```css
/* src/styles.css */
@import "../node_modules/ng2-flex-layout/dist/ng2-flex-layout.css";
```


## Usage

### Layout Containers
The `layout` directive allows you to specify a layout container and the direction in which the children will flow:

example
```html
<div layout="row">
  <div> 1 </div>
  <div> 2 </div>
  <div> 3 </div>
</div>
```

You can also specify different layout directions for different screen sizes
```html
<div layout="row" layoutXs="column">
  <div> 1 </div>
  <div> 2 </div>
  <div> 3 </div>
</div>
```

The container in the example above will have a `flex-direction` of `column` on extra small screen sizes and a `flex-direction` of `row` on all other screen sizes. [See the Angular Material 1 documentation for breakpoint details](https://material.angularjs.org/latest/layout/container)

### Layout Children
Using the `flex` directive on a container's child elements allows you to specify the percentage of available room each element should fill.
```html
<div layout="row">
  <div flex="20"> 1 </div>
  <div flex="80"> 2 </div>
</div>
```
In the example above, the first child element will take up 20% of the available width of its parent and the 2nd child element will take up 80%.

Similar to containers, you can also specify different flex percentages for different screen sizes
```html
<div layout="row">
  <div flex="20" flexXs="40"> 1 </div>
  <div flex="80" flexXs="60"> 2 </div>
</div>
```
