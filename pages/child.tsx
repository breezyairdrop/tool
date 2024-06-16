import React, { ReactNode, useState, useCallback } from "react";
// import "./styles.css";

let gettt = 5;

const ChildComponent = ({ source }: { source: string }) => {
  console.info("ChildComponent re-render from source: ", source);
  console.log(gettt +=  1)
  return null
};

const data = { data: "test" };
const MovingComponent = ({
  children
}: {
  children: ({ data }: { data: string }) => ReactNode;
}) => {
  const [state, setState] = useState({ x: 100, y: 100 });

  return (
    <div
      // className="moving-div"
      // onMouseMove={(e) => setState({ x: e.clientX - 20, y: e.clientY - 20 })}
      style={{ left: state.x, top: state.y }}
    >
      {children(data)}
    </div>
  );
};

export default function Child() {
  const [state, setState] = useState(1);

  const child = useCallback(
    () => <ChildComponent source="In useCallback" />,
    []
  );
  return (
    <div className="container">
      <button onClick={() => setState(state + 1)}>
        re-render parent on click {state}
      </button>

      <div className="column">
        <MovingComponent>{child}</MovingComponent>
      </div>
    </div>
  );
}
