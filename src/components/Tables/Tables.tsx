import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { columns as column } from "./data/columns";
const Tables = (props: any) => {
  const seller_data = props.sellerData;
  const buyer_data = props.buyerData;
  const navigate = useNavigate();

  let sellerAndBuyerData: any = { ...seller_data, ...buyer_data };

  const [rows, setRows] = useState([
    {
      id: "Add id",
      description: "Add description",
      unit: "Unit",
      quantity: "Quantity",
      unit_price: "Unit price",
      line: "Line total",
    },
  ]);
  const handleChange = (index: any) => {
    if (index === rows.length - 1) {
      let newRow = {
        id: "Add id",
        description: "Add description",
        unit: "Unit",
        quantity: "Quantity",
        unit_price: "Unit price",
        line: "Line total",
      };
      let newRows = [...rows];
      newRows.push(newRow);
      setRows(newRows);
    }
  };

  const print = () => {
    const sellerName = sellerAndBuyerData.seller_name;
    const sellerTinNo = sellerAndBuyerData.tin_no;
    const sellerAddress = sellerAndBuyerData.address;
    const sellerSpecificAddress = sellerAndBuyerData.specific_addres;
    const sellerPhone = sellerAndBuyerData.phone;
    const fsno = sellerAndBuyerData.fsno;
    const date = sellerAndBuyerData.date;
    const reference = sellerAndBuyerData.reference;
    const bill_to = sellerAndBuyerData.bill_to;
    const buyerTin = sellerAndBuyerData.buyer_tin_no;
    const centerStyle =
      "display:flex;flex-direction:row;justify-content:center;";
    const leftStyle =
      "display:flex;flex-direction:row:justify-content:flex-end;";
    const spaceBetweenStyle =
      "display:flex;flex-direction:row;justify-content:space-between;";
    const displayColumn =
      "display:flex;flex-direction:column;margin-bottom:5px;";
    const fontBoldStyle =
      "display:flex;flex-direction:row;font-weight:bold;justify-content:space-between;";
    const negativeLeftStyle = "display:flex,margin-left:-100px;";

    const marginTopBottom = "margin-bottom:'20px'c";
    // const buyerAddres = sellerAndBuyerData.buyer_address
    const content = [
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${centerStyle}>${sellerTinNo}</span>`,
        style: `text-align:center;`,
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${centerStyle}>${sellerName}</span>`,
        style: `text-align:center;`,
        css: { "font-size": "12px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${centerStyle}>${sellerAddress}</span>`,
        style: `text-align:center;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${centerStyle}>${sellerSpecificAddress}</span>`,
        style: `text-align:center;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${centerStyle}>${sellerPhone}</span>`,
        style: `text-align:center;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style-${leftStyle}>FS NO.${fsno}</span>`,
        style: `text-align:start;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${leftStyle}>${date}</span>`,
        style: `text-align:start;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<div style=${spaceBetweenStyle}><span># Cash Sales Invoice</span><span>#</span></div>`,
        style: `text-align:start;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<div style=${spaceBetweenStyle}><span># Reference ${reference}</span><span>#</span></div>`,
        style: `text-align:start;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<div style=${spaceBetweenStyle}><span># Prepared by: Ni</span><span>#</span></div>`,
        style: `text-align:start;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<div style=${spaceBetweenStyle}><span># To: ${bill_to}</span><span>#</span></div>`,
        style: `text-align:start;`,
        css: { "font-size": "8px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${leftStyle}>Buyer's TIN: ${buyerTin}</span>`,
        style: `text-align:start;`,
        css: { "font-size": "8px", "margin-bottom": "20px" },
      },
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<span style=${centerStyle}>-------</span>`,
        style: `text-align:start;`,
        css: { "font-size": "8px", "margin-bottom": "20px" },
      },
    ];
    let totalPrice: number = 0.0;
    let taxPayment: number = 0.0;
    let totalPayment: number = 0.0;

    for (let i = 0; i < rows.length - 1; i++) {
      let descriptionValue = (
        document.getElementById(`description_${i}`) as HTMLInputElement
      ).value;
      let quantityValue = (
        document.getElementById(`quantity_${i}`) as HTMLInputElement
      ).value;
      let unitPriceValue = (
        document.getElementById(`unit_price_${i}`) as HTMLInputElement
      ).value;

      let Rowsummation = Number(unitPriceValue) * Number(quantityValue);
      totalPrice += Rowsummation;
      content.push({
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `<div style=${spaceBetweenStyle}><div style=${displayColumn}><span>${quantityValue} X ${unitPriceValue}</span><span>${descriptionValue}</span></div>
        <span>*${Rowsummation.toLocaleString()}</span></div>`,
        style: "margin-left:20px",
        css: { "font-size": "8px" },
      });
    }
    //calculate tax payment and total payment

    taxPayment = Math.round((15 / 100) * totalPrice);
    totalPayment = Math.round(totalPrice + taxPayment);
    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<span style=${centerStyle}>-------</span>`,
      style: `text-align:start;`,
      css: { "font-size": "8px", "margin-bottom": "20px" },
    });

    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<div style=${spaceBetweenStyle}><span>TXBL1</span> <span>*${totalPrice.toLocaleString()}</span></div>`,
      style: "text-align:start;",
      css: { "font-size": "8px" },
    });
    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<div style=${spaceBetweenStyle}><span>TAX1 15%</span> <span>*${taxPayment.toLocaleString()}<span></div>`,
      style: "text-align:start;",
      css: { "font-size": "8px" },
    });
    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<span style=${centerStyle}>-------</span>`,
      style: `text-align:start;`,
      css: { "font-size": "8px", "margin-bottom": "20px" },
    });

    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<div style=${fontBoldStyle}><span>Total:</span> <span>*${totalPayment.toLocaleString()}<span></div>`,
      style: "text-align:start;",
      css: { "font-size": "12px" },
    });

    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<div style=${spaceBetweenStyle}><span>Cash</span> <span>*${totalPayment.toLocaleString()}<span></div>`,
      style: "text-align:start;",
      css: { "font-size": "8px" },
    });

    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<div style=${spaceBetweenStyle}><span>ITEM#</span> <span>*${totalPayment.toLocaleString()}<span></div>`,
      style: "text-align:start;",
      css: { "font-size": "8px" },
    });

    content.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `<div style=${centerStyle}><div style=${displayColumn}>
      <span style=${centerStyle}>ERCA</span>
      <span>E<span style=${negativeLeftStyle}>T</span><span>  BEN0009350 </span></span>
      </div></div>`,
      style: "text-align:center;",
      css: { "font-size": "8px" },
    });

    navigate("/print", { state: { content: content } });
  };

  const sumTotal = (index: number) => {
    let quantityValue = parseInt(
      (document.getElementById(`quantity_${index}`) as HTMLInputElement).value
    );
    let unitPriceValue = parseInt(
      (document.getElementById(`unit_price_${index}`) as HTMLInputElement).value
    );
    let lineTotalValue = quantityValue * unitPriceValue;
    (document.getElementById(`line_${index}`) as HTMLInputElement).value =
      lineTotalValue.toString();
  };

  return (
    <div>
      <table
        id="table"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid grey",
        }}
      >
        <thead>
          <tr style={{ border: "1px solid grey" }}>
            {column.map((column, index) => (
              <th key={index} style={{ border: "1px solid grey" }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} style={{ border: "1px solid grey" }}>
              <td style={{ border: "1px solid grey" }}>
                <input
                  id={`id_${index}`}
                  onFocus={() => handleChange(index)}
                  style={{ width: "90%", padding: 10 }}
                  placeholder={row.id}
                />
              </td>
              <td style={{ border: "1px solid grey" }}>
                <input
                  id={`description_${index}`}
                  style={{ width: "90%", padding: 10 }}
                  placeholder={row.description}
                />
              </td>
              <td style={{ border: "1px solid grey" }}>
                <input
                  id={`unit_${index}`}
                  style={{ width: "90%", padding: 10 }}
                  placeholder={row.unit}
                />
              </td>
              <td style={{ border: "1px solid grey" }}>
                <input
                  id={`quantity_${index}`}
                  style={{ width: "90%", padding: 10 }}
                  placeholder={row.quantity}
                />
              </td>
              <td style={{ border: "1px solid grey" }}>
                <input
                  onChange={() => sumTotal(index)}
                  id={`unit_price_${index}`}
                  style={{ width: "90%", padding: 10 }}
                  placeholder={row.unit_price}
                />
              </td>
              <td style={{ border: "1px solid grey" }}>
                <input
                  id={`line_${index}`}
                  style={{ width: "90%", padding: 10 }}
                  placeholder={row.line}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: 20,
        }}
      >
        <button
          onClick={() => print()}
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
          Print
        </button>
      </div>
    </div>
  );
};

export default Tables;
