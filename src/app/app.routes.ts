import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MediaComponent } from "./media/media.component";
import { StddevComponent } from "./stddev/stddev.component";
import { SimpsonComponent } from "./simpson/simpson.component";
import { CorrelationComponent } from "./correlation/correlation.component";
import { LinearRegresionComponent } from "./linear-regression/linear-regression.component";

export const routes: Routes = [
    { path: "", component: MediaComponent },
    { path: "simpson", component: SimpsonComponent },
    { path: "correlation", component: CorrelationComponent },
    { path: "media", component: MediaComponent },
    { path: "stddev", component: StddevComponent },
    {path: "linear_regression", component: LinearRegresionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}