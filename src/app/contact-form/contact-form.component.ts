import { Component } from '@angular/core';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    graduationDate: '',
    country: '',
    gender: '',
    collegesConsidered: '',
    intendedMajor: '',
    studyDestination: '',
    tuitionBudget: '',
    studyLevel: '',
    fundingSource: '',
    comment: '',
  };

  formInvalid = false;

  submitForm() {
    // Check if required fields are filled
    if (
      this.formData.name &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.comment
    ) {
      // Send the message to the design company's email here
      console.log('Form data submitted:', this.formData);

      // You can also reset the form if needed
      this.resetForm();
    } else {
      this.formInvalid = true;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      graduationDate: '',
      country: '',
      gender: '',
      collegesConsidered: '',
      intendedMajor: '',
      studyDestination: '',
      tuitionBudget: '',
      studyLevel: '',
      fundingSource: '',
      comment: '',
    };
    this.formInvalid = false;
  }
}
