import ISubject from './ISubject'
import Observer from './Observer'

export default class Subject<T> implements ISubject<T> {
  observers: Observer<T>[] = []

  state!: T

  public subscribe(observer: Observer<T>): void {
    this.observers.push(observer)
  }

  public unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  public notify(data: T): void {
    console.log('Subject: Notifying observers...')
    this.observers.forEach((observer) => observer.update(data))
  }

  public setState(data: T): void {
    this.notify(data)
  }

  public getState(): T {
    return this.state
  }
}
