import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output } from '@angular/core'
import pell from 'pell'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ng-pell-component',
  template: `
      <div class="pell" id="pell-$$-internal"></div>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgPellComponent),
    multi: true
  }]
})
export class NgPellComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() actions?: Array<string | object>
  @Input() classes?: object
  @Input() styleWithCSS: boolean = false
  @Output() onChange?: EventEmitter<string> = new EventEmitter<string>()
  @Output() onTouched?: EventEmitter<string> = new EventEmitter<string>()
  html: string
  private propagateChange: (html: string) => void

  ngOnInit () {
    pell.init({
      element: document.getElementById('pell-$$-internal'),
      onChange: html => {
        this.onChange.emit(html)
        this.html = html
      },
      styleWithCSS: this.styleWithCSS,
      actions: this.actions || ['bold', 'underline'],
      classes: this.classes || {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content'
      }
    })
  }

  ngOnChanges () {
    if (this.propagateChange) {
      this.propagateChange(this.html)
    }
  }

  writeValue (html: string) {
    this.html = html
  }

  registerOnChange (fn: (html: string) => void) {
    this.propagateChange = fn
  }

  registerOnTouched () {
    this.onTouched.emit(this.html)
  }
}