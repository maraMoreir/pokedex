import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { AppRoutes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
        <AppRoutes />
    </RecoilRoot>
  </StrictMode>
)
