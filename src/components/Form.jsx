import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import billService from "../services/bill.service";
import Table from "./common/table";

const BillingForm = () => {
  const [invoice, setInvoice] = useState(0);

  const [billData, setBillData] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
    state: "",
    product: { name: "", price: 0, quantity: 0, gst: 0, discount: 0, total: 0 },
  });
  let [totalMaxPrice, setTotalMaxPrice] = useState(0);
  const [tableData, setTableData] = useState([]);
  const handleShareData = (data) => {
    let total = 0;
    const fakeData = [...data].map((ele) => {
      total = total + parseInt(ele.finalPrice);
      console.log(total);
    });
    setTotalMaxPrice(total);
    setTableData([...data]);
  };
  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const arr = { ...billData };
    arr[input.name] = input.value;
    setBillData({ ...arr });
  };
  const handleSubmit = (e, tableData) => {
    e.preventDefault();
    const payload = {
      customer: { invoice, ...billData },
      product: [...tableData],
    };
    console.log(payload);
    billService
      .create(payload)
      .then((res) => toast.success(res.data.message))
      .catch((ex) => toast.error(ex.response.data.error));
  };
  useEffect(() => {
    setInvoice(Math.floor(Math.random() * 10000) + 10000);
  }, []);
  return (
    <div className="h-screen bg-slate-200">
      <div className="h-[70vh] w-[70vw] m-auto p-32">
        <form
          className="bg-slate-100 h-fit p-1 shadow-2xl"
          onSubmit={(e) => handleSubmit(e, tableData)}
        >
          <header>
            <h1 className="text-center text-3xl mt-8">Billing</h1>
          </header>
          <div className="w-full border-2 border-slate-300 border-solid mt-4"></div>
          <section>
            <div className="bg-slate-300">
              <h1 className="text-1xl p-2">Customer Details :-</h1>
              <div className="grid grid-cols-3 p-4">
                <input
                  type="text"
                  className=" text-center p-2 m-2"
                  disabled={true}
                  name="invoice"
                  value={invoice}
                />
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={billData.name}
                  onChange={(e) => handleChange(e)}
                  className="p-2 m-2  text-center"
                />
                <input
                  type="Number"
                  placeholder="mobile"
                  name="mobile"
                  value={billData.mobile}
                  onChange={(e) => handleChange(e)}
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  value={billData.address}
                  onChange={(e) => handleChange(e)}
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={billData.email}
                  placeholder="email"
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  placeholder="state"
                  name="state"
                  onChange={(e) => handleChange(e)}
                  value={billData.state}
                  className="p-2 m-2  text-center"
                />
              </div>
            </div>
            <div className="p-8">
              <Table
                shareDataToParent={handleShareData}
                schema={billData.product}
              />

              <h2>Total Amount : {totalMaxPrice}</h2>
            </div>
          </section>
          <section className="text-center">
            <button
              type="submit"
              className="bg-blue-600 w-[40%] rounded-full text-[#ffffff] m-4 p-4"
            >
              Bill Now
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
