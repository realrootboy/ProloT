export default interface IObserver<T> {
  constructor: Function & { prototype: T }
  f: (data: T) => void
  update(data: T): void
}
