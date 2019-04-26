import BaseComponent from 'formiojs/components/base/Base';
import TableComponent from 'formiojs/components/table/Table';
import Components from 'formiojs/components/Components';
import { AngularBaseComponent } from './AngularBaseComponent';
import { Type } from '@angular/core';
import { HelloComponent } from '../hello.component';

export class CheckMatrixComponent extends AngularBaseComponent {

  static schema() {
    return BaseComponent.schema({
      type: 'checkmatrix',
      numRows: 3,
      numCols: 3
    });
  }

  static get builderInfo() {
    return {
      title: 'Check Matrix',
      group: 'basic',
      icon: 'fa fa-table',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#table',
      schema: CheckMatrixComponent.schema()
    };
  }

  elementInfo() {
    const info = {};
    info['changeEvent'] = 'click';
    return info;
  }

  componentClass(): Type<any> {
    return HelloComponent;
  }

}

// Use the table component edit form.
(CheckMatrixComponent as any).editForm = TableComponent.editForm;

// Register the component to the Formio.Components registry.
Components.addComponent('checkmatrix', CheckMatrixComponent);
