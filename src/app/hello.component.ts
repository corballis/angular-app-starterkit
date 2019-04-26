import { Component, Input, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'hello',
  template: 'helloka {{test}}'
})
export class HelloComponent {
  
  @Input() test: string;

}
