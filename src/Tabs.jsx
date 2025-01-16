import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      {tabs.map((tab, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
        >
          { tab.label }
        </button>
      ))}
<br />
<br />
      <div className="tab-content">{tabs[active].content}</div>
    </>
  );
};

export default Tabs;
