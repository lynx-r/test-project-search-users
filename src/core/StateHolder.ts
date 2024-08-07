export default interface StateHolder<S extends object> {
  get state(): S;
}
