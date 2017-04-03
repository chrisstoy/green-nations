import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFieldDefinition } from '../field-definition';

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent {

  @Input() field: IFieldDefinition;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  get isValid(): boolean { return this.form.controls[this.field.key].valid; }

  constructor() { }

}
