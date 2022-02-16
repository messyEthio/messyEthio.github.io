import "./style.css";
import { useLocation } from "react-router-dom";
export interface LocationParams {
  content: any;
}

export default function Print() {
  const location = useLocation();
  const state: any = location.state;

  const onPrint = () => {
    const printableDiv: any =
      document.getElementById("printable_div")?.innerHTML;
    document.body.innerHTML = printableDiv;
    window.focus();
    window.print();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="printable_div"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          padding: 10,
        }}
      >
        {state.content.map((items: any) => (
          <div dangerouslySetInnerHTML={{ __html: items.value }} />
        ))}
      </div>
      <button
        onClick={onPrint}
        style={{
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 50,
          paddingLeft: 50,
        }}
      >
        Print all
      </button>
    </div>
  );
}
