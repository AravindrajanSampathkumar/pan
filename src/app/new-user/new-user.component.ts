import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {
  createNewUserForm: any;
  registerSubmitted = false;
  gender = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' }];
  knowOthers = [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
  ];
  singleParents = [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
  ];
  panDetails = [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
  ];
  sourceOfIncomeData = [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
  ];
  titles = [
    { name: 'Shri', value: 'shri' },
    { name: 'Smt', value: 'smt' },
    { name: 'Kumari', value: 'kumari' }
  ]
  consents = [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
  ];
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createNewUserForm = new FormGroup({
      allication49A: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      fName: new FormControl('', [Validators.required]),
      mName: new FormControl(''),
      lName: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      namePan: new FormControl('', [Validators.required]),
      consent: new FormControl('', [Validators.required]),
      kOther: new FormControl('', [Validators.required]),
      oFname: new FormControl(''),
      oMname: new FormControl(''),
      oLname: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      aadharName: new FormControl('', [Validators.required]),
      aadharNum: new FormControl('', [Validators.required]),
      sinPatent: new FormControl('', [Validators.required]),
      fFname: new FormControl('', [Validators.required]),
      fMname: new FormControl(''),
      fLname: new FormControl(''),
      mFname: new FormControl('', [Validators.required]),
      mMname: new FormControl(''),
      mLname: new FormControl(''),
      pParentName: new FormControl('', [Validators.required]),
      pPanReq: new FormControl('', [Validators.required]),
      applicationModeK: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.pattern(("[6-9]\\d{9}"))]),
      email: new FormControl('', [Validators.required, Validators.pattern(("[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*"))]),
      place: new FormControl('', [Validators.required]),
      stdCode: new FormControl('', [Validators.required]),
      isdCode: new FormControl('', [Validators.required]),
      sourOfIncome: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      othrSource: new FormControl(''),
      bussinessProof: new FormControl(''),
      bussinessProofCode: new FormControl(''),
      noIncome: new FormControl(''),
      housePro: new FormControl(''),
      capitalGain: new FormControl(''),
      addressForComm: new FormControl('', [Validators.required]),
      residentAddress: new FormControl('', [Validators.required]),
      flatNo: new FormControl(''),
      streetName: new FormControl(''),
      roadNo: new FormControl(''),
      area: new FormControl(''),
      town: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
    this.authService.userIsLoggedIn.next(true);
  }

  createUser() {
    this.registerSubmitted = true;
    let valid = this.checkValidForm(this.createNewUserForm.value)
    if (valid) {
      // this.router.navigate(['/dashboard']);
      this.createNewUserForm.disable();
    } else {
      return;
    }
  }

  checkValidForm(data: any) {
    if (data.country && data.state && data.town && data.residentAddress && data.addressForComm && data.salary && data.sourOfIncome
      && data.isdCode && data.category && data.kOther && data.consent && data.namePan && data.title && data.allication49A &&
      data.stdCode && data.place && data.email && data.phoneNumber && data.applicationModeK && data.pPanReq && data.pParentName && data.mFname &&
      data.fFname && data.aadharNum && data.sinPatent && data.aadharName && data.dob && data.gender && data.fName) {
      console.log('loginForm===============', this.createNewUserForm);
      return true;
    } else {
      return false
    }
  }
  navigateBack() {
    this.router.navigate(['/dashboard']);
  }



  ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}
