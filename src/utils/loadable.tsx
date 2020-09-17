import React, { lazy, Suspense } from 'react';

interface Opts {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <
  T extends Promise<never>,
  U extends React.ComponentType<U>
>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
): ((props: React.ComponentProps<U>) => JSX.Element) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then(module => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <Suspense fallback={opts.fallback!}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LazyComponent {...props} />
    </Suspense>
  );
};
