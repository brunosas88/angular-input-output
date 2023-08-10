import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {
  form = this.montaForm();

  dados = {rua:'caminho 7', bairro:'brasilia'}

  dadosEnviarFilho: any;
  dadosEnviadosDoFilho: any;

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.montaForm();
    this.form.patchValue(this.dados);
  }

  montaForm() {
    return this.formBuilder.group({
      rua: [''],
      bairro: [''],
      info:[null]
    })
  }

  onSubmit() {

  }

  enviarDados(){
    this.dadosEnviarFilho =  {nome:'bruno', sobrenome:'soares'}
    console.log(this.dadosEnviarFilho)
  }

  mostrarValor() {
    console.log(this.dadosEnviadosDoFilho)
    this.form.get('info')?.setValue(this.dadosEnviadosDoFilho);
    console.log(this.form.value)
  }

  pegaValorForm(valor:any){
    this.dadosEnviadosDoFilho = valor;
  }

}
