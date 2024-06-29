import * as React from 'react';

interface StepDetailsContextProp {
  activeDetailsComponent: number;
  setActiveDetailsComponent: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export const StepDetailsContext =
  React.createContext<StepDetailsContextProp>({
    activeDetailsComponent: 1,
    setActiveDetailsComponent: () => {},
  });

const StepDetailsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeDetailsComponent, setActiveDetailsComponent] =
    React.useState(1);

  const context = React.useMemo(
    () => ({ activeDetailsComponent, setActiveDetailsComponent }),
    [activeDetailsComponent, setActiveDetailsComponent],
  );

  return (
    <StepDetailsContext.Provider value={context}>
      {children}
    </StepDetailsContext.Provider>
  );
};

export const useStepDetails = () => {
  const context = React.useContext(StepDetailsContext);

  if (!context) {
    throw new Error(
      'useStep must be used within a StepContextProvider',
    );
  }

  return context;
};

export default StepDetailsContextProvider;
