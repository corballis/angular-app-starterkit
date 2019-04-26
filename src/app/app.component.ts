import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { FormioResources } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth';
import { CheckMatrixComponent } from './components/CheckMatrix';
import { Formio } from 'formiojs';
import { AngularBaseComponent } from './components/AngularBaseComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private auth: FormioAuthService,
    private router: Router,
    public resources: FormioResources,
    private injector: Injector
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/home']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/home']);
    });

    AngularBaseComponent.injector = injector;
    Formio.registerComponent('checkmatrix', CheckMatrixComponent);
  }
}
