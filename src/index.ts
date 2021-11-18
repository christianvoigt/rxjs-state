/*
 * Public API Surface of rxjs-state
 */

export {
  select,
  stateful,
  distinctUntilSomeChanged,
  selectSlice,
} from './core/operators';
export { createSideEffectObservable } from './state/side-effect-observable';
export { createAccumulationObservable } from './state/accumulation-observable';
export { RxJsState } from './state/state';
export { KeyCompareMap, CompareFn, PickSlice } from './core/interfaces';
