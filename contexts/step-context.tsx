import * as React from 'react';

interface StepContextProp {
  activeComponent: number;
  setActiveComponent: React.Dispatch<React.SetStateAction<number>>;
}

export const StepContext = React.createContext<StepContextProp>({
  activeComponent: 1,
  setActiveComponent: () => {},
});

const StepContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeComponent, setActiveComponent] = React.useState(1);

  const context = React.useMemo(
    () => ({ activeComponent, setActiveComponent }),
    [activeComponent, setActiveComponent],
  );

  return (
    <StepContext.Provider value={context}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = React.useContext(StepContext);

  if (!context) {
    throw new Error(
      'useStep must be used within a StepContextProvider',
    );
  }

  return context;
};

export default StepContextProvider;
