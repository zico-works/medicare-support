import * as React from 'react';

interface StepContextProp {
  activeComponent: number;
  setActiveComponent: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

export const StepContext = React.createContext<StepContextProp>({
  activeComponent: 1,
  setActiveComponent: () => {},
  showModal: true,
  setShowModal: () => {},
});

const StepContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeComponent, setActiveComponent] = React.useState(6);
  const [showModal, setShowModal] = React.useState(true);

  const context = React.useMemo(
    () => ({
      activeComponent,
      setActiveComponent,
      showModal,
      setShowModal,
    }),
    [activeComponent, setActiveComponent, showModal, setShowModal],
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
