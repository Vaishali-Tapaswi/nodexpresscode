import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  formgroup:FormGroup;

  empnofc = new FormControl(10,[Validators.min(2), Validators.max(10)]);
  enamefc = new FormControl("",Validators.required);
  salaryfc = new FormControl(1000,[Validators.min(100), Validators.max(1000)]);
  cc;
  fields:Array<String> 

  constructor( formbuilder:FormBuilder) { 
    this.formgroup = formbuilder.group({
      "empnofc": this.empnofc,
      "enamefc": this.enamefc,
      "salaryfc":this.salaryfc
    })
    this.cc = this.formgroup.controls;
    this.fields = Object.keys(this.formgroup.controls)
  }

  ngOnInit() {
  }
  method1(){
    console.log(this.formgroup)
  }
}
