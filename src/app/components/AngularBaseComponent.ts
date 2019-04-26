import BaseComponent from 'formiojs/components/base/Base';
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injector, Type } from '@angular/core';

export abstract class AngularBaseComponent extends BaseComponent {

  static injector: any;

  abstract componentClass(): Type<any>;
  
  abstract elementInfo(): any;
  
  injector(): Injector {
    return AngularBaseComponent.injector;
  };

  build() {
    const componentFactory = this.injector().get(ComponentFactoryResolver).resolveComponentFactory(this.componentClass());

    (this as any).element = (this as any).ce('div', {});
    let componentRef = componentFactory.create(this.injector());
    this.injector().get(ApplicationRef).attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    componentRef.instance.test = 'input';

    // Append DOM element to the body
    (this as any).element.appendChild(domElem);
  }

  getValue() {
    var value = [];
    return value;
  }

  setValue(value) {
  }
}
