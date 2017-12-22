import { NgModule } from "@angular/core";
import { FlatSelectComponent } from "./components/flat-select/flat-select.component";
import { CommonModule } from "@angular/common";

@NgModule({
    providers: [],
    imports: [
        CommonModule
    ],
    declarations: [
        FlatSelectComponent
    ],
    exports: [
        FlatSelectComponent
    ]
})
export class SharedModule{}