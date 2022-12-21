import { useEffect, useRef, useState } from "react";
import inventoryService from "../../services/inventory.service";

const handleAddMore = (
  e,
  data,
  setData,
  buttonText,
  setButtonText,
  inventoryData,
  setInventoryData,
  shareDataToParent,
  product
) => {
  console.log(e);
  e.preventDefault();
  const arr = [...data];
  if (arr.length === 0) {
    arr.push({
      _id: "",
      name: "",
      quantity: "",
      price: "",
      discount: "",
      gst: "",
      finalPrice: "",
    });
  }
  if (buttonText != "Save") {
    setButtonText("Save");
    console.log(product);
    setData([...arr]);
  } else {
    const inventory = [...inventoryData];
    arr[0]._id = product.current.id;
    arr[0].name = product.current.value;
    inventory.push(arr[0]);

    console.log("inventory", inventory);

    setButtonText("+ Add More");
    setData([]);
    setInventoryData([...inventory]);
    shareDataToParent([...inventory]);
  }
};
const handleChangeInput = (e, data, setData, productName) => {
  const { currentTarget: input } = e;
  const arr = [...data];
  arr[0][input.name] = input.value;
  setData([...arr]);
  console.log(e);
};

const Table = ({ shareDataToParent }) => {
  const [inventoryData, setInventoryData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const product = useRef();
  const [buttonText, setButtonText] = useState("+ Add More");
  useEffect(() => {
    inventoryService.getAllData().then((res) => {
      setTableData([...res.data.data.products]);
      console.log(tableData);
    });
  }, [data, inventoryData]);
  return (
    <div>
      <table className="w-full text-left">
        <thead className="text-1xl bg-slate-900 text-[#ffffff]">
          <tr>
            <th className="p-2">Product Name</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">Discount</th>
            <th className="p-2">GST</th>
            <th className="p-2">Final Price</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-[#ffffff]">
          {inventoryData.map((ele) => (
            <tr key={data.length}>
              <td className="p-2">
                <p type="text">{ele.name}</p>
              </td>
              <td className="p-2">
                <p>{ele.quantity}</p>
              </td>
              <td className="p-2">
                <p>{ele.price}</p>
              </td>
              <td className="p-2">
                <p>{ele.discount}</p>
              </td>
              <td className="p-2">
                <p>{ele.gst}</p>
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
              {/* <td>
                <input
                  type="text"
                  className="w-full h-8 p-4"
                  value={ele.name}
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                  name="name"
                ></input>
              </td> */}
              <td>
                <select onChange={(e) => setPrice(product.current.value)}>
                  {console.log(product.current.getAttribute("name"), price)}
                  {tableData.map((res) => (
                    <option
                      name={res.details.price}
                      ref={product}
                      price={res.details.price}
                      value={res.details.name}
                      id={res.details._id}
                      onChange={(e) => {
                        handleChangeInput(e, data, setData);
                      }}
                    >
                      {res.details.name}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={ele.quantity}
                  name="quantity"
                  className="w-full h-8 p-4"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></input>
              </td>
              <td className="p-2">
                {/* {console.log(product.current.getAttribute("work"))} */}
                <label
                  type="text"
                  value={
                    product && product.current
                      ? product.current.getAttribute("price")
                      : ""
                  }
                  className="w-full h-8 p-4"
                  name="price"
                  onChange={(e) => {
                    handleChangeInput(e, data, setData);
                  }}
                ></label>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={ele.discount}
                  className="w-full h-8 p-4"
                  name="discount"
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
                          setInventoryData,
                          shareDataToParent,
                          product
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
                setInventoryData,
                shareDataToParent,
                product
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

export default Table;
