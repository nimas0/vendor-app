/* eslint-disable implicit-arrow-linebreak */
import { Suspense, lazy } from 'react';
import AuthGuard from './components/AuthGuard';
import DashboardLayout from './components/dashboard/DashboardLayout';
import GuestGuard from './components/GuestGuard';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';
import Portfolio from './pages/dashboard/Portfolio';
import QuestionsPage from './pages/dashboard/QuestionsPage';
import Store from './pages/dashboard/Store';

const Loadable = (Component) => (props) =>
  (
    // eslint-disable-next-line implicit-arrow-linebreak
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Authentication pages

const Login = Loadable(
  lazy(() => import('./pages/authentication/Login')),
);
const PasswordRecovery = Loadable(
  lazy(() => import('./pages/authentication/PasswordRecovery')),
);
const PasswordReset = Loadable(
  lazy(() => import('./pages/authentication/PasswordReset')),
);
const Register = Loadable(
  lazy(() => import('./pages/authentication/Register')),
);
const VerifyCode = Loadable(
  lazy(() => import('./pages/authentication/VerifyCode')),
);

// Dashboard pages
const Account = Loadable(
  lazy(() => import('./pages/dashboard/Account')),
);
const Analytics = Loadable(
  lazy(() => import('./pages/dashboard/Analytics')),
);
const Calendar = Loadable(
  lazy(() => import('./pages/dashboard/Calendar')),
);
const Chat = Loadable(lazy(() => import('./pages/dashboard/Chat')));

const Overview = Loadable(
  lazy(() => import('./pages/dashboard/Overview')),
);

// Error pages
const AuthorizationRequired = Loadable(
  lazy(() => import('./pages/AuthorizationRequired')),
);
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
const ServerError = Loadable(
  lazy(() => import('./pages/ServerError')),
);

// Other pages
const Home = Loadable(lazy(() => import('./pages/Home')));

const routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: 'login-unguarded',
        element: <Login />,
      },
      {
        path: 'password-recovery',
        element: <PasswordRecovery />,
      },
      {
        path: 'password-reset',
        element: <PasswordReset />,
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        ),
      },
      {
        path: 'register-unguarded',
        element: <Register />,
      },
      {
        path: 'verify-code',
        element: <VerifyCode />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'questions',
        element: <QuestionsPage />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'chat',
        children: [
          {
            path: '/',
            element: <Chat />,
          },
          {
            path: 'new',
            element: <Chat />,
          },
          {
            path: ':threadKey',
            element: <Chat />,
          },
        ],
      },
      {
        path: 'portfolio',
        children: [
          {
            path: '/',
            element: <Portfolio />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '401',
        element: <AuthorizationRequired />,
      },
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: '500',
        element: <ServerError />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
