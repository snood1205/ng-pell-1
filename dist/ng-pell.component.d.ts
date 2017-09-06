import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NgPellComponent implements OnInit, OnChanges, ControlValueAccessor {
    actions?: Array<string | object>;
    classes?: object;
    styleWithCSS: boolean;
    onChange?: EventEmitter<string>;
    onTouched?: EventEmitter<string>;
    html: string;
    private propagateChange;
    ngOnInit(): void;
    ngOnChanges(): void;
    writeValue(html: string): void;
    registerOnChange(fn: (html: string) => void): void;
    registerOnTouched(): void;
}
