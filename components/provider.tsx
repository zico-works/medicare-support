'use client';

import StepContextProvider from '@/contexts/step-context';
import React from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => (
  <StepContextProvider>{children}</StepContextProvider>
);

export default Provider;
