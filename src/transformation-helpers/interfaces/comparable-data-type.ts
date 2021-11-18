import { CompareFn } from '../../core/interfaces';

export type ComparableData<T> = CompareFn<T> | keyof T | (keyof T)[];
