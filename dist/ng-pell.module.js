import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPellComponent } from './ng-pell.component';
import { FormsModule } from '@angular/forms';
var NgPellModule = (function () {
    function NgPellModule() {
    }
    NgPellModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    NgPellModule.ctorParameters = function () { return []; };
    return NgPellModule;
}());
export { NgPellModule };
//# sourceMappingURL=ng-pell.module.js.map