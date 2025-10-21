import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage } from './pages/SignIn.jsx';  // ADD THIS
import { SignUpPage } from './pages/SignUp.jsx';  // ADD THIS
import { StackProvider, StackHandler, StackTheme } from '@stackframe/stack';
import { stackClientApp } from './stack.js';
import { App } from './pages/App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StackProvider app={stackClientApp}>
        <StackTheme>
          <Routes>
            <Route path="/handler/*" element={<StackHandler app={stackClientApp} />} />
            <Route path="/sign-in" element={<SignInPage />} />  {/* ADD THIS */}
            <Route path="/sign-up" element={<SignUpPage />} />  {/* ADD THIS */}
            <Route path="/*" element={<App />} />
          </Routes>
        </StackTheme>
      </StackProvider>
    </BrowserRouter>
  </React.StrictMode>
);