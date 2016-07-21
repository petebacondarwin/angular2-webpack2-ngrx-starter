import { TestComponentBuilder, ComponentFixture, addProviders, inject, async } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import { Dispatcher } from '@ngrx/store';
import { CounterComponent, CounterState, CounterModel, CounterActions } from './';

describe('CounterComponent', () => {
  let counterState$: Subject<CounterModel>;
  let counterActions: CounterActions;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    counterState$ = new Subject<CounterModel>();
    counterActions = new CounterActions(new Dispatcher());
    addProviders([
      { provide: CounterState, useValue: counterState$ },
      { provide: CounterActions, useValue: counterActions }
    ]);
  });

  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(CounterComponent).then((_fixture_) => fixture = _fixture_);
  })));

  it('should display current count', async(() => {
    const messageElement = fixture.nativeElement.querySelector('div');

    fixture.detectChanges();
    expect(messageElement.textContent).toEqual('Current Count: ');

    counterState$.next(10);
    fixture.detectChanges();
    expect(messageElement.textContent).toEqual('Current Count: 10');

    counterState$.next(20);
    fixture.detectChanges();
    expect(messageElement.textContent).toEqual('Current Count: 20');
  }));

  it('should trigger increment and decrement actions when buttons are clicked', async(() => {
    const [incButton, decButton]: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button');

    spyOn(counterActions, 'increment');
    spyOn(counterActions, 'decrement');

    incButton.click();
    expect(counterActions.increment).toHaveBeenCalled();

    decButton.click();
    expect(counterActions.decrement).toHaveBeenCalled();
  }));
});
