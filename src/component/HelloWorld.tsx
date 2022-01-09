import React from "react";

interface HelloWorldProps {
  name: string;
}

const HelloWorld = ({ name }: HelloWorldProps) => (
  <div>{`Hello "${name}"`}</div>
);

export default HelloWorld;
