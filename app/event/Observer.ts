import IObserver from './IObserver'
import Subject from './Subject'

export default class Observer<T> implements IObserver<T> {
  readonly f: (data: T) => void

  constructor(subject: Subject<T>, f: (data: T) => void) {
    subject.subscribe(this)
    this.f = f
  }

  public update(data: T): void {
    this.f(data)
  }
}
