//our root app component
import {Component, NgModule, VERSION, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="formGroup">
    <input type="text" formControlName="value" />
    <input type="text" formControlName="value" />
    </form>
  `,
})
export class App implements OnInit{
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ){}
  
  ngOnInit(){
    
    this.formGroup = this.formBuilder.group({
      value: ['']
    });
    
    this.formGroup.valueChanges
      .subscribe(
        res => {
          console.log(res)
          this.formGroup.patchValue({
            value: res.value
          }, {emitEvent: false})
        }
      )
    
  }
  
  
}

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}