import React from 'react';

type Props = { params: { id: string } };

export default function PropertyPage({ params }: Props) {
  return (
    <main>
      <h1>Property {params.id}</h1>
      <p>Placeholder single property view.</p>
    </main>
  );
}
