import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import billService from "../../services/bill.service";
import inventoryService from "../../services/inventory.service";

const handleAddMore = (
  e,
  data,
  setData,
  buttonText,
  setButtonText,
  inventoryData,
  setInventoryData,
  navigate
) => {
  console.log(e);
  e.preventDefault();
  const arr = [...data];
  if (arr.length === 0) {
    arr.push({
      date: "",
      time: "",
      customerName: "",
      numberOfProducts: 0,
      amount: 0,
      discount: 0,
      total: 0,
    });
  }
  if (buttonText != "Save") {
    setButtonText("Save");
    setData([...arr]);
  } else {
    const payload = { ...data[0] };

    inventoryService
      .create(payload)
      .then((res) => {
        toast.success(res.data.message);
        window.location.href = "/inventory";
      })
      .catch((err) => toast.error(err.response.data));

    setButtonText("+ Add More");
    setData([]);
  }
};
const handleChangeInput = (e, data, setData) => {
  const { currentTarget: input } = e;
  const arr = [...data];
  arr[0][input.name] = input.value;
  setData([...arr]);
};

const BillTable = () => {
  const navigate = useNavigate();
  const [inventoryData, setInventoryData] = useState([]);
  const [data, setData] = useState([]);
  const [buttonText, setButtonText] = useState("+ Add More");
  useEffect(() => {
    billService
      .getAllData()
      .then((res) => {
        console.log(res);
        const data = [...res.data.data];
        console.log(res.data.data);
        let array = [];
        data.forEach((element) => {
          let arr = {};
          let amount = 0;
          let discount = 0;
          element.product.map((ele) => {
            amount = amount + parseInt(ele.price);
            discount = discount + parseInt(ele.discount);
          });
          let total = amount - discount;
          arr.date = element.createdAt;
          arr.customerName = element.customer.name;
          arr.numberOfProducts = [...element.product].length;
          arr.amount = amount;
          arr.invoice = element.customer.invoice;
          arr.discount = discount;
          arr.total = total;
          array.push(arr);
        });
        console.log(array);
        setInventoryData([...array]);
      })
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div className="h-screen p-2 ">
      <div className="w-full text-left shadow-2xl w-[85%] m-auto mt-4 bg-[#ffffff] text-3xl rounded-8 px-8 py-4">
        <h1 style={{ fontWeight: "bold" }}>Bills</h1>
      </div>
      <table className="w-full text-left shadow-2xl w-[85%] m-auto mt-24 bg-[#ffffff]">
        <thead className="text-2xl bg-slate-900 text-[#ffffff]">
          <tr>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Invoice No.</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">No. of Products</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Total</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {inventoryData.map((ele) => (
            <tr key={data.length}>
              <td className="p-2">
                <p type="text">
                  {new Date(ele.date).toISOString().slice(0, 10)}
                </p>
              </td>
              <td className="p-2">
                <p type="text">
                  {`${new Date(ele.date).getHours()}:${new Date(
                    ele.date
                  ).getMinutes()}`}
                </p>
              </td>
              <td className="p-2">
                <p>{ele.invoice}</p>
              </td>
              <td className="p-2">
                <p>{ele.customerName}</p>
              </td>
              <td className="p-2">
                <p>{ele.numberOfProducts}</p>
              </td>
              <td className="p-2">
                <p>{ele.amount}</p>
              </td>
              <td className="p-2">
                <p>{ele.discount}</p>
              </td>
              <td className="p-2">
                <p>{ele.total}</p>
              </td>
              <td>
                <button className="bg-blue-300 px-4">Download</button>
              </td>
            </tr>
          ))}
          {data.map((ele) => (
            <tr key={data.length}>
              {console.log(ele)}
              <td className="">
                <input
                  type="text"
                  className="w-full h-8 p-4"
                  value={ele.name}
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                  name="name"
                ></input>
              </td>
              <td className="p-2">
                <input
                  type="Number"
                  value={ele.price}
                  name="price"
                  className="w-full h-8 p-4"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td className="p-2">
                <input
                  type="Number"
                  value={ele.quantity}
                  className="w-full h-8 p-4"
                  name="quantity"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td className="p-2">
                <input
                  type="Number"
                  value={ele.profit}
                  className="w-full h-8 p-4"
                  name="profit"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td className="p-2">
                <input
                  type="Number"
                  value={ele.gst}
                  className="w-full h-8 p-4"
                  name="gst"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td className="p-2">
                <input
                  type="Number"
                  value={ele.finalPrice}
                  className="w-full h-8 p-4"
                  name="finalPrice"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tfoot>
      </table>
    </div>
  );
};

export default BillTable;
