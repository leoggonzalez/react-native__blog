import React from "react";

export const BlogContext = React.createContext(3);

export function BlogProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
}
