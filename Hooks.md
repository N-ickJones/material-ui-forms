```ts

//External facing
export function useState<S>(initialState: (() => S) | S,): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function resolveDispatcher() {
  const dispatcher = ReactCurrentDispatcher.current;
  return ((dispatcher: any): Dispatcher);
}

const ReactCurrentDispatcher = { current: (null: null | Dispatcher), };


export type Dispatcher = {| useState<S>(initialState: (() => S) | S): [S, Dispatch<BasicStateAction<S>>] |};




```