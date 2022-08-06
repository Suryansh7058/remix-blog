import { Link, Outlet, Links, Meta } from '@remix-run/react';
import { LiveReload } from '@remix-run/react';
import React from 'react';
import globalStylesUrl from '~/styles/global.css';

export const links = () => [
  { rel: 'stylesheet', href: globalStylesUrl },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
  },
];

export const meta = () => {
  const description = 'This is a website where a user can post blogs';
  const keyword = 'Blog,Remix,React,Full Stack';

  return {
    description,
    keyword,
  };
};

export default function App() {
  return (
    <Document title="Remix Blog App">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title = `Remix Blog WebSite!`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
