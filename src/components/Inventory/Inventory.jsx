import { useEffect, useState } from "react";

const handleAddMore = (
  e,
  data,
  setData,
  buttonText,
  setButtonText,
  inventoryData,
  setInventoryData
) => {
  console.log(e);
  e.preventDefault();
  const arr = [...data];
  if (arr.length === 0) {
    arr.push({
      name: "",
      price: "",
      stock: "",
      profit: "",
      gst: "",
      finalPrice: "",
    });
  }
  if (buttonText != "Save") {
    setButtonText("Save");
    setData([...arr]);
  } else {
    const inventory = [...inventoryData];
    inventory.push(arr[0]);
    console.log(inventory);
    setButtonText("+ Add More");
    setData([]);
    setInventoryData([...inventory]);
  }
};
const handleChangeInput = (e, data, setData) => {
  const { currentTarget: input } = e;
  const arr = [...data];
  arr[0][input.name] = input.value;
  setData([...arr]);
};

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [data, setData] = useState([]);
  const [buttonText, setButtonText] = useState("+ Add More");
  useEffect(() => {}, [data]);
  return (
    <div className="h-screen bg-red-300">
      <table className="w-full text-left">
        <thead className="text-2xl bg-slate-900 text-[#ffffff]">
          <tr>
            <th className="p-2">Product Name</th>
            <th className="p-2">Buy Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Profit</th>
            <th className="p-2">GST</th>

            <th className="p-2">Final Price</th>

            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-slate-300">
          {inventoryData.map((ele) => (
            <tr key={data.length}>
              <td className="p-2">
                <p type="text">{ele.name}</p>
              </td>
              <td className="p-2">
                <p>{ele.price}</p>
              </td>
              <td className="p-2">
                <p>{ele.stock}</p>
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
                  type="text"
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
                  type="text"
                  value={ele.stock}
                  className="w-full h-8 p-4"
                  name="stock"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td className="p-2">
                <input
                  type="text"
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
                  type="text"
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
                  type="text"
                  value={ele.finalPrice}
                  className="w-full h-8 p-4"
                  name="finalPrice"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td>
                {
                  <div className="w-full">
                    <button
                      className="bg-blue-600 rounded-full p-2 w-32 text-[#ffffff] m-auto"
                      onClick={(e) =>
                        handleAddMore(
                          e,
                          data,
                          setData,
                          buttonText,
                          setButtonText,
                          inventoryData,
                          setInventoryData
                        )
                      }
                    >
                      {buttonText}
                    </button>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-slate-300"></tfoot>
      </table>
      {data.length === 0 && (
        <div className="w-full">
          <button
            className="bg-blue-600 rounded-full p-2 w-32 text-[#ffffff] m-auto"
            onClick={(e) =>
              handleAddMore(
                e,
                data,
                setData,
                buttonText,
                setButtonText,
                inventoryData,
                setInventoryData
              )
            }
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Inventory;
