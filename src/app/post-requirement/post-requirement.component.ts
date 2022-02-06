import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-requirement',
  templateUrl: './post-requirement.component.html',
  styleUrls: ['./post-requirement.component.css']
})
export class PostRequirementComponent implements OnInit {
   myForm: any;
 

  constructor(public http: HttpClient) { }
  

  ngOnInit() {
    this.createForm();
    
  }

  

  
  createForm(){
 this.myForm = new FormGroup({
  clientName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+[\-'\s]?[a-zA-Z .]+$/)]),
  clientEmail: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      clientNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
      ]),
      seats :new FormControl('', [
        Validators.required
      ]),
      startDate:new FormControl('Please Select', [
        Validators.required
      ]),
      yourMessage:new FormControl('', [
        Validators.required
      ]),
      leadSource:new FormControl('Select Source'),
      preferredMode:new FormControl('Please Select'),
      preferredTime:new FormControl('Please Select'),
      company: new FormControl(),
      city:new FormControl()
})
  }

  onSubmit() {
    // alert('hi');
    const cityCheckbox:any =document.getElementsByClassName('city');
    let cityName:any = [];
    for (let index = 0; index < cityCheckbox.length; index++) {
      const element = cityCheckbox[index];
      // console.log(element);      
      if(element.checked){
            cityName.push(element.id)
          }
    }
    if(cityName.length > 1){
      this.myForm.value.multiCity = true;
      this.myForm.value.city = cityName;
    }
    else{
      this.myForm.value.multiCity = false;
      this.myForm.value.city = cityName[0];
    }

    const workSpaceCheckBox:any =document.getElementsByClassName('workSpace');
    let workSpaceName:any = '';
    for (let index = 0; index < workSpaceCheckBox.length; index++) {
      const element = workSpaceCheckBox[index];
      // console.log(element);      
      if(element.checked){
        workSpaceName+= index+1+',';
          }
    }
    
    workSpaceName = workSpaceName.substring(0,workSpaceName.length-1);
    console.log(workSpaceName);

    
    // console.log(this.myForm.value);
    
    // this.myForm.value.specialRequest= "test";
    this.myForm.value.doctype = "requirement";
    this.myForm.value.isQualified= false;
    this.myForm.value.workspaceType = workSpaceName;
    this.http.post<any>('https://api.poc.qdesq.com/lead',this.myForm.value).subscribe(res=>{
      console.log(res);      
    })
  }
}
