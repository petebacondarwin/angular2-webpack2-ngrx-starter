import { Component, Type } from '@angular/core';
import { async, inject, TestComponentBuilder } from '@angular/core/testing';

export function testInContainer(template: string, componentType: Type, callback: (fixture) => any) {
  @Component({ template, directives: [componentType] })
  class TestComponent {};
  return async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(TestComponent).then(callback);
  }));
}
