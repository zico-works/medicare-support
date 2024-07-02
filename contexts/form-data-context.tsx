import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface InitialType {
  address: string;
  applyingForCoverage: string;
  carrierSelection: string[];
  coverage: string;
  dependant: string;
  dependantDOB: Date | undefined;
  dependantname: string;
  eligibleForHealthCoverage: string;
  email: string;
  estimate: string;
  fullname: string;
  householdAges: string;
  householdNumber: string;
  married: string;
  medicalFacility: string;
  occupation: string;
  phonenumber: string;
  spouseDOB: Date | undefined;
  spousename: string;
  tribeType: string;
  userDOB: Date | undefined;
}

const initialState: InitialType = {
  fullname: '',
  email: '',
  address: '',
  phonenumber: '',
  carrierSelection: [],
  userDOB: undefined,
  occupation: '',
  estimate: '',
  coverage: '',
  married: '',
  spouseDOB: undefined,
  spousename: '',
  dependant: '',
  dependantDOB: undefined,
  dependantname: '',
  householdAges: '',
  householdNumber: '',
  eligibleForHealthCoverage: '',
  tribeType: '',
  applyingForCoverage: '',
  medicalFacility: '',
};

interface FormDataContextType {
  formData: InitialType;
  setFormData: React.Dispatch<React.SetStateAction<InitialType>>;
}

const FormDataContext = createContext<
  FormDataContextType | undefined
>(undefined);

export const FormDataProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [formData, setFormData] = useState<InitialType>(initialState);

  const contextValue = useMemo(
    () => ({ formData, setFormData }),
    [formData, setFormData],
  );

  return (
    <FormDataContext.Provider value={contextValue}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error(
      'useFormData must be used within a FormDataProvider',
    );
  }

  return context;
};
