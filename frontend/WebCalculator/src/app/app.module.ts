import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HistoryComponent} from './history/history.component';
import {KeypadComponent} from './keypad/keypad.component';
import {ExpressionComponent} from './expression/expression.component';
import {SearchComponent} from './search/search.component';
import {FunctionComponent} from './function/function.component';
import {FormsModule} from "@angular/forms";
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    KeypadComponent,
    ExpressionComponent,
    SearchComponent,
    FunctionComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
