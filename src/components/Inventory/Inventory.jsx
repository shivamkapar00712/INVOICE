import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import inventoryService from "../../services/inventory.service";
import Model from "../common/model";

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
      name: "",
      price: "",
      quantity: "",
      profit: "",
      gst: "",
      finalPrice: "",
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

const Inventory = () => {
  const navigate = useNavigate();
  const [inventoryData, setInventoryData] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleSaveModelDetails = (data) => {
    console.log(data);
    const payload = { ...data };
    console.log(data);
    inventoryService
      .create(payload)
      .then((res) => {
        toast.success(res.data.message);
        window.location.href = "/inventory";
        setShowModal(false);
      })
      .catch((err) => toast.error(err.response.data));
  };
  const [buttonText, setButtonText] = useState("+ Add More");
  useEffect(() => {
    inventoryService
      .getAllData()
      .then((res) => {
        const data = [...res.data.data.products];
        let array = [];
        data.forEach((element) => {
          let arr = {};
          arr.name = element.details.name;
          arr.price = element.details.buyPrice;
          arr.quantity = element.quantity;
          arr.profit = element.details.profit;
          arr.gst = element.details.gst;
          arr.finalPrice = element.details.finalPrice;
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
        <h1 style={{ fontWeight: "bold" }}>Inventory</h1>
      </div>
      <table className="w-full text-left shadow-2xl w-[85%] m-auto mt-16 bg-[#ffffff]">
        <thead className="text-2xl bg-slate-900 text-[#ffffff]">
          <tr>
            <th className="p-2">Product Name</th>
            <th className="p-2">Buy Price</th>
            <th className="p-2">quantity</th>
            <th className="p-2">Profit</th>
            <th className="p-2">GST</th>

            <th className="p-2">Final Price</th>

            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {inventoryData.map((ele) => (
            <tr key={data.length}>
              <td className="p-2">
                <p type="text">{ele.name}</p>
              </td>
              <td className="p-2">
                <p>{ele.price}</p>
              </td>
              <td className="p-2">
                <p>{ele.quantity}</p>
              </td>
              <td className="p-2">
                <p>{ele.profit}</p>
              </td>
              <td className="p-2">
                <p>{ele.GST}</p>
              </td>
              <td className="p-2">
                <p>{ele.finalPrice}</p>
              </td>
              <td>
                <button className="bg-blue-300 px-4">Edit</button>
                <button className="bg-red-300 px-4">Delete</button>
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
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Product
          </button>
          <Model
            showModal={showModal}
            save={handleSaveModelDetails}
            setShowModal={setShowModal}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Inventory;
