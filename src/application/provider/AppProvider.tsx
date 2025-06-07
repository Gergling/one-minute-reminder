import { AudioContextProvider } from "@/src/audio/context";
import { IntervalModalContextProvider } from "@/src/interval";
import { AppThemeProvider } from "@/src/theme";
import { PropsWithChildren, ReactNode } from "react";

type NestedComponentProps = {
  components: (({ children }: PropsWithChildren) => React.JSX.Element)[];
  children: ReactNode;
}

const NestedComponent = ({ components, children }: NestedComponentProps) => {
  if (components.length > 0) {
    const [Component, ...remainingComponents] = components;
    return (
      <Component>
        <NestedComponent components={remainingComponents}>
          {children}
        </NestedComponent>
      </Component>
    );
  }

  return children;
};

export const AppProvider = ({ children }: PropsWithChildren) => <NestedComponent
  components={[
    AppThemeProvider,
    AudioContextProvider,
    IntervalModalContextProvider
  ]}
>{children}</NestedComponent>;
