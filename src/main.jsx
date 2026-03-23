import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import routing from './Components/Routing/routing';
import './index.css';
import CardContextDataProvider from './Components/Context/CardContextDataProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextDataProvider>
      <RouterProvider router={routing} />
    </CardContextDataProvider>
  </StrictMode>,
);
