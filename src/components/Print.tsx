import "./style.css";
import { useLocation } from "react-router-dom";
export interface LocationParams {
  content: any;
}

export default function Print() {
  const location = useLocation();
  const state: any = location.state;

  const onPrint = () => {
    console.log("print");
    const printableDiv: any =
      document.getElementById("printable_div")?.innerHTML;
    document.body.innerHTML = printableDiv;
    window.print();
    return false;
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
          width: "30%",
          padding: 10,
        }}
      >
        <h2>Hello world</h2>
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
