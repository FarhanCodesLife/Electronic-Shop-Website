// app/components/ClientSideProvider.tsx

"use client"; // This marks it as a client-side component

import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import store from '@/app/reduxconfig/store/store.js';

const ClientSideProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
      <Toaster />
    </>
  );
};

export default ClientSideProvider;
