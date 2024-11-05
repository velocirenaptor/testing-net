import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LinearRegresionComponent } from "./linear-regression/linear-regression.component";
import { SimpsonComponent } from "./simpson/simpson.component";
import { CorrelationComponent } from "./correlation/correlation.component";
import { MediaComponent } from "./media/media.component";
import { StddevComponent } from "./stddev/stddev.component";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LinearRegresionComponent,
        SimpsonComponent,
        CorrelationComponent,
        MediaComponent,
        StddevComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}