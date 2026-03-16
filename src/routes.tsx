import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { ServicePage } from '@/pages/ServicePage';
import { SocialResponsibilityPage } from '@/pages/SocialResponsibilityPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogSinglePage } from '@/pages/BlogSinglePage';
import { BookingPage } from '@/pages/BookingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'book', element: <BookingPage /> },
      { path: 'services', element: <ServicePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'social-responsibility', element: <SocialResponsibilityPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/single', element: <BlogSinglePage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
]);
