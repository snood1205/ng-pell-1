import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import pell from 'pell';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var NgPellComponent = (function () {
    function NgPellComponent() {
        this.styleWithCSS = false;
        this.onChange = new EventEmitter();
        this.onTouched = new EventEmitter();
    }
    NgPellComponent.prototype.ngOnInit = function () {
        var _this = this;
        pell.init({
            element: document.getElementById('pell-$$-internal'),
            onChange: function (html) {
                _this.onChange.emit(html);
                _this.html = html;
            },
            styleWithCSS: this.styleWithCSS,
            actions: this.actions || ['bold', 'underline'],
            classes: this.classes || {
                actionbar: 'pell-actionbar',
                button: 'pell-button',
                content: 'pell-content'
            }
        });
    };
    NgPellComponent.prototype.ngOnChanges = function () {
        if (this.propagateChange) {
            this.propagateChange(this.html);
        }
    };
    NgPellComponent.prototype.writeValue = function (html) {
        this.html = html;
    };
    NgPellComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NgPellComponent.prototype.registerOnTouched = function () {
        this.onTouched.emit(this.html);
    };
    NgPellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-pell-component',
                    template: "\n      <div class=\"pell\" id=\"pell-$$-internal\"></div>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NgPellComponent; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    NgPellComponent.ctorParameters = function () { return []; };
    NgPellComponent.propDecorators = {
        'actions': [{ type: Input },],
        'classes': [{ type: Input },],
        'styleWithCSS': [{ type: Input },],
        'onChange': [{ type: Output },],
        'onTouched': [{ type: Output },],
    };
    return NgPellComponent;
}());
export { NgPellComponent };
//# sourceMappingURL=ng-pell.component.js.map