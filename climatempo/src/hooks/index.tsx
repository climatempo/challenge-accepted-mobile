import React from 'react';

import { HistoricProvider } from './historic';

const AppProvider: React.FC = ({ children }) => (
  <HistoricProvider>{children}</HistoricProvider>
);

export default AppProvider;
