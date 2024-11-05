import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SimpsonComponent } from "./simpson/simpson.component";
import { CorrelationComponent } from "./correlation/correlation.component";
import { MediaComponent } from "./media/media.component";
import { StddevComponent } from "./stddev/stddev.component";

const routes: Routes = [
    { path: "", component: AppComponent },
    { path: "simpson", component: SimpsonComponent },
    { path: "correlation", component: CorrelationComponent },
    { path: "media", component: MediaComponent },
    { path: "stddev", component: StddevComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}