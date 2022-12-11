import Table from "./common/table";

const BillingForm = () => {
  const products = [{ name: "aata" }, { name: "aata" }, { name: "aata" }];
  return (
    <div className="h-screen bg-slate-200">
      <div className="h-[70vh] w-[70vw] m-auto p-32">
        <form className="bg-slate-100 h-fit p-1 shadow-2xl">
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
                  value={Math.floor(Math.random() * 10000) + 10000}
                />
                <input
                  type="text"
                  placeholder="name"
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  placeholder="mobile"
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  placeholder="address"
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  placeholder="email"
                  className="p-2 m-2  text-center"
                />
                <input
                  type="text"
                  placeholder="state"
                  className="p-2 m-2  text-center"
                />
              </div>
            </div>
            <div className="p-8">
              <Table />
            </div>
          </section>
          <section className="text-center">
            <button className="bg-blue-600 w-[40%] rounded-full text-[#ffffff] m-4 p-4">
              Bill Now
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
