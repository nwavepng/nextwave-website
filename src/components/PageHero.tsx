import React from 'react';

interface PageProps {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function Page({ eyebrow, title, children }: PageProps) {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
        </div>
      </section>
      {children}
    </>
  );
}
