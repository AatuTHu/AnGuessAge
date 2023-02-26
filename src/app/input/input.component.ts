import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() event = new EventEmitter<string>();
  constructor ( private formBuilder: FormBuilder) {}

  
  form = this.formBuilder.group({
    name : ""  
  })

  onGetAge = () => {
    const name = this.form.value.name;
    this.event.emit(String(name))
  }
}
