import React from 'react';

interface HelloWorldProps {
  name: string;
}

const HelloWorld = ({ name }: HelloWorldProps) => (
  <div className="text-9xl font-bold text-red-500">{`Hello "${name}"`}</div>
);

export default HelloWorld;
