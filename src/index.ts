import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClearableInputComponent } from './clearable-input.component';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export * from './clearable-input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ClearableInputComponent
    ],
    exports: [
        ClearableInputComponent
    ],
    entryComponents: [
        ClearableInputComponent
    ]
})
export class ClearableInputModule {

}
