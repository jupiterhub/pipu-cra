import React from "react";

export interface HelloWorldProps {
    name: string;
}

export const HelloWorld = ({ name } :HelloWorldProps) => (
  <div>
    {`Hello "${name}"`}
  </div>
);

export default HelloWorld;
