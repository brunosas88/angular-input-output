import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent implements OnInit {
  form = this.montaForm();

  @Input()
  set data( val: IValor) {
    this.form.patchValue(val);
  }

  @Output() emissor = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.montaForm();
  }

  montaForm() {
    return this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
    });
  }

  onSubmit() {}

  emitirValor() {
    this.emissor.emit(this.form.value)
  }

  mostrarDataInput(){
    console.log(this.data)
  }
}

export interface IValor{
  nome?: string,
  sobrenome?: string,
}
