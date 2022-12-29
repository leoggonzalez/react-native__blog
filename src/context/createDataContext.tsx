import React, { useReducer } from 'react';

type Reducer<T> = (state: T, action: { type: string }) => T;

export function createDataContext<T, Q extends string>(
  reducer: Reducer<T>,
  actions: Record<
    Q,
    (dispatch: React.Dispatch<{ type: string }>) => () => void
  >,
  initialState: T
): {
  Context: React.Context<
    Record<Q, (object: Record<string, unknown>) => void> & { state?: T }
  >;
  Provider: ({ children }: { children: React.ReactNode }) => JSX.Element;
} {
  const Context = React.createContext({} as any);

  function Provider({ children }: { children: React.ReactNode }): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: Record<string, () => void> = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  }

  return { Context, Provider };
}
