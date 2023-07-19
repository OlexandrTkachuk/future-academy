import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

// lazy pages
const HomePage = lazy(() => import('./pages/Home'));
const CoursesPage = lazy(() => import('./pages/Courses'));
const EventsPage = lazy(() => import('./pages/Events'));
const BasePage = lazy(() => import('./pages/Base'));
const CareerPage = lazy(() => import('./pages/Career'));

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/base" element={<BasePage />} />
          <Route path="/career" element={<CareerPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
