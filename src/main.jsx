import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import routing from './Components/Routing/routing';
import './index.css';
import CardContextDataProvider from './Components/Context/CardContextDataProvider';
import LoadingSpinner from './Components/ReuseComponents/LoadingSpinner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <CardContextDataProvider>
        <RouterProvider router={routing} />
      </CardContextDataProvider>
    </Suspense>
  </StrictMode>,
);
