import IObserver from './IObserver'

export default interface ISubject<T> {
  observers: IObserver<T>[]
  state: T
  subscribe(observer: IObserver<T>): void
  unsubscribe(observer: IObserver<T>): void
  notify(data: T): void
  setState(data: T): void
  getState(): T
}
