import { createBrowserRouter } from 'react-router-dom';

// Import the page components we are actively using
import CheckInboxPage from '../pages/auth/CheckInboxPage';
import CreateAccountPage from '../pages/auth/CreateAccountPage';

// This is a placeholder for the page the user lands on from their email
const VerifyEmailPage = () => (
    <div className="flex items-center justify-center min-h-screen">
        <p>Verifying your email... You will be redirected shortly.</p>
    </div>
);

const router = createBrowserRouter([
  {
    // UPDATED: The root path now loads the CreateAccountPage directly.
    path: '/',
    element: <CreateAccountPage />,
  },
  {
    // We keep this route so you can still access it by manually
    // going to /check-inbox in your browser's address bar.
    path: '/check-inbox',
    element: <CheckInboxPage />,
  },
  {
    // We keep this for future implementation of the email verification flow.
    path: '/auth/verify', 
    element: <VerifyEmailPage />,
  },
]);

export default router;