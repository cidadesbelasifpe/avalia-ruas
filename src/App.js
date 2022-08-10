import { AuthGoogleProvider } from "./contexts/authGoogle";
import { AppRoutes } from "./routes/routes";
import React from 'react';

function App() {
      return (
      <AuthGoogleProvider>
            <AppRoutes />
      </AuthGoogleProvider>
      );
}

export default  App;
