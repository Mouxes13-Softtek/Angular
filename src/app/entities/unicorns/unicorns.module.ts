import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UnicornsComponent } from "./unicorns.component";
import { UnicornsRouteModule } from "./unicorns.route";

@NgModule({
    imports: [UnicornsRouteModule],
    declarations: [UnicornsComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnicornsModule{}