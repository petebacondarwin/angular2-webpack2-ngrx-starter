import { reflector } from '@angular/core/src/reflection/reflection';
import { DirectiveResolver } from '@angular/compiler';
import { ComponentMetadata, InputMetadata } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { ConcreteType } from '@angular/core/src/facade/lang';

import { async, inject, TestComponentBuilder } from '@angular/core/testing';

/**
 * This interface represents the test container component that will host the
 * component under test
 */
export interface TestContainer<T> {
  component: T;
}

/**
 * This class is an extenstion of the ComponentFixture that gives access to the
 * component under test (i.e. innerComponent)
 */
export class ContainerFixture<T> extends ComponentFixture<TestContainer<T>> {
  public get innerComponent(): T {
    return this.componentRef.instance.component;
  }
}

/**
 * Create a test container component that hosts the component under test.
 * Once everything is set up the callback is called with an instance of the
 * ContainerFixture to allow the component to be tested
 */
export function createContainerFixture<T>(componentType: ConcreteType<T>) {


  // const annotations = reflector.annotations(componentType);
  // console.log(annotations);
  // const componentMetadata = annotations.find((annotation) => annotation instanceof ComponentMetadata) as ComponentMetadata;
  // const inputMetadata = annotations.find((annotation) => annotation instanceof InputMetadata) as ComponentMetadata;
  // console.log(componentMetadata._inputs, inputMetadata);

  //const inputs = [].concat(annotations.inputs']).concat(annotations['_inputs']);

  // // This is the test container component that will host the componnent under test
  // @Component({ template, directives: [componentType] })
  // class TestComponentImpl implements AfterViewInit {
  //   // We get access to the component under test via the ViewChild mechanism
  //   @ViewChild(componentType) component: T;
  //   // But the view child is not instantiated until the ngAfterViewInit has been called
  //   ngAfterViewInit() {
  //     this.testCallback();
  //   }
  //   testCallback: () => any;
  // };

  // return async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  //   tcb.createAsync(TestComponentImpl).then((fixture) => {
  //     // Once the test container component has been instantiated we wire up the
  //     // ngAfterViewInit to trigger the provided callback with the fixture
  //     const containerFixture: ContainerFixture<T> = <any>fixture;
  //     fixture.componentInstance.testCallback = () => {
  //       callback(containerFixture);
  //     };
  //     fixture.detectChanges();
  //   });
  // }));
}
