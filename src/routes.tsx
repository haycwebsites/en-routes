import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { HomeStyle2Page } from '@/pages/HomeStyle2Page';
import { HomeStyle3Page } from '@/pages/HomeStyle3Page';
import { RoomPage } from '@/pages/RoomPage';
import { RoomSinglePage } from '@/pages/RoomSinglePage';
import { DestinationPage } from '@/pages/DestinationPage';
import { AboutPage } from '@/pages/AboutPage';
import { FaqPage } from '@/pages/FaqPage';
import { ContactPage } from '@/pages/ContactPage';
import { ServicePage } from '@/pages/ServicePage';
import { ServiceSinglePage } from '@/pages/ServiceSinglePage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogLeftPage } from '@/pages/BlogLeftPage';
import { BlogFullwidthPage } from '@/pages/BlogFullwidthPage';
import { BlogSinglePage } from '@/pages/BlogSinglePage';
import { BlogSingleLeftPage } from '@/pages/BlogSingleLeftPage';
import { BlogSingleFullwidthPage } from '@/pages/BlogSingleFullwidthPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home-style-2', element: <HomeStyle2Page /> },
      { path: 'home-style-3', element: <HomeStyle3Page /> },
      { path: 'room', element: <RoomPage /> },
      { path: 'room-single', element: <RoomSinglePage /> },
      { path: 'destination', element: <DestinationPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'service-single', element: <ServiceSinglePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog-left', element: <BlogLeftPage /> },
      { path: 'blog-fullwidth', element: <BlogFullwidthPage /> },
      { path: 'blog-single', element: <BlogSinglePage /> },
      { path: 'blog-single-left', element: <BlogSingleLeftPage /> },
      { path: 'blog-single-fullwidth', element: <BlogSingleFullwidthPage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
]);
