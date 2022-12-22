import React, { useState } from "react";

export default function Model(props) {
  const [state, setState] = useState({});
  const { showModal, setShowModal, save } = props;
  const handleChangeInput = (e, data, setData, productName) => {
    const { currentTarget: input } = e;
    console.log(input);
    const arr = { ...data };
    arr[input.name] = input.value;
    setData({ ...arr });
    console.log(e);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Product in Inventory
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <div className=" w-full flex gap-4 my-4">
                      <label className="w-full" htmlFor="name">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={(e) => {
                          handleChangeInput(e, state, setState);
                        }}
                        className="border-solid border-2 border-slate-300"
                      />
                    </div>
                    <div className=" w-full flex gap-4 my-4">
                      <label className="w-full" htmlFor="name">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={state.quantity}
                        onChange={(e) => {
                          handleChangeInput(e, state, setState);
                        }}
                        className="border-solid border-2 border-slate-300"
                      />
                    </div>
                    <div className=" w-full flex gap-4 my-4">
                      <label className="w-full" htmlFor="name">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={state.price}
                        onChange={(e) => {
                          handleChangeInput(e, state, setState);
                        }}
                        className="border-solid border-2 border-slate-300"
                      />
                    </div>
                    <div className=" w-full flex gap-4 my-4 justify-content">
                      <label className="w-full" htmlFor="name">
                        Profit
                      </label>
                      <input
                        type="number"
                        name="profit"
                        value={state.profit}
                        onChange={(e) => {
                          handleChangeInput(e, state, setState);
                        }}
                        className="border-solid border-2 border-slate-300"
                      />
                    </div>
                    <div className=" w-full flex gap-4 my-4">
                      <label className="w-full" htmlFor="name">
                        Gst
                      </label>
                      <input
                        type="number"
                        name="gst"
                        value={state.gst}
                        onChange={(e) => {
                          handleChangeInput(e, state, setState);
                        }}
                        className="border-solid border-2 border-slate-300"
                      />
                    </div>
                    <div className=" w-full flex gap-4 my-4 justify-content">
                      <label className="w-full" htmlFor="name">
                        Final Price
                      </label>
                      <input
                        type="number"
                        name="finalPrice"
                        value={state.finalPrice}
                        onChange={(e) => {
                          handleChangeInput(e, state, setState);
                        }}
                        className="border-solid border-2 border-slate-300"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => save(state)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
