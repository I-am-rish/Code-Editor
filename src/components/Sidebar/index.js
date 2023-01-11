import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ResizablePIP from "resizable-pip/dist/components/ResizablePIP";
import { ResizablePIP } from "resizable-pip";
import "./index.css";


const Sidebar = (props) => {
  const [active, setActive] = useState(false);
  const[count, setCount] = useState(1);
  
  const openPIP = () => {
    setCount(count+1)
    if(count%2 !== 0)
    setActive(true);
    else
    setActive(false);
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav">
          <button className="PIP" onClick={openPIP}>
            PIP
          </button>
          <Link className="link" to='newtab' target="_blank" >Tab</Link>
        </div>
      </div>

      {active ? (
        <ResizablePIP
          className="ResizablePIP"
          width={300}
          height={300}
          minConstraints={[200, 200]}
          maxConstraints={[1200, 900]}
        >
          <iframe srcDoc={props.value}
           title='output' width="100%" height="100%"></iframe>
        </ResizablePIP>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
