import "./styles.css";
import Tabs from "./Tabs";

export default function App() {
  const tabs = [
    { label: "tab 1", content: <h2> Tab 1 content 🦋</h2> },
    { label: "tab 2", content: <h2> Tab 2 content 🦋</h2> },
    { label: "tab 3", content: <h2> Tab 3 content 🦋</h2> },
  ];
  return (
    <div className="App">
      <h1>TAB CONTENT shows on click</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
