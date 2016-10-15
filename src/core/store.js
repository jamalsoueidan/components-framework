// https://k94n.com/es6-modules-single-instance-pattern

let instance = null;

class _store {
  constructor() {
    this.reducers = {};
  }

  add(key, reducer) {
    this.reducers[key] = reducer;
  }

  getReducer() {
    return this.reducers;
  }
}

export let Store = new _store();
