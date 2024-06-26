import { PersonAddAlt1 } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
const OrderPage = () => {
  const location = useLocation();
  let [price, setTotalPrice] = useState(0);
  const [data, setData] = useState(location.state.order);
  const [timeline, setTimeLine] = useState({
    status: data.products[0].status,
    id: data.products[0].id._id,
  });
  const [list, setList] = useState([]);
  useEffect(() => console.log("dataaaaa", data, "  "), []);
  const statuses = [
    "Pending",
    "Payment Done",
    "In Warehouse",
    "Shipping Done",
    "Out for Delivery",
    "Delivered",
  ];

  const onStatusSave = async (orderId, productId, id, newStatus) => {
    try {
      console.log(orderId, productId, id, newStatus);
      const response = await axios.put(
        "http://localhost:3000/api/vendor/updateStatus",
        { orderId, productId, id, newStatus },
        {
          headers: {
            auth_token: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // if (name.startsWith("productDetails")) {
    //   const field = name.split(".")[1]; // Get the field name (e.g., description)
    //   setProduct((prevProduct) => ({
    //     ...prevProduct,
    //     productDetails: {
    //       ...prevProduct.productDetails,
    //       [field]: value,
    //     },
    //   }));
    // } else {
    //   // Otherwise, update the top-level state
    //   setProduct((prevProduct) => ({
    //     ...prevProduct,
    //     [name]: value,
    //   }));
    // }
  };

  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    onUpdate(newStatus, orderId);
  };

  const func = (o, c) => {
    price += o * c;
  };
  const updateStatus = (currstatus, id) => {
    setTimeLine({ status: currstatus, id: id });
    console.log(currstatus + "  " + id);
    // console.log(currstatus);
  };
  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Track the delivery of order #{data.id}
          </h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
            <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
              {data.products.map((o) => (
                <div className="space-y-4 p-6">
                  <div className="relative flex justify-end ">
                    {o.status === "Delivered" && (
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 21"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <Link
                      to={`/soloproduct/${o.id._id}`}
                      className="h-14 w-14 shrink-0"
                    >
                      <img
                        className="h-full w-full dark:hidden"
                        src={o.id.main_image}
                        alt="phone image"
                      />
                    </Link>

                    <Link
                      to={`/soloproduct/${o.id._id}`}
                      className="min-w-0 flex-1 font-medium text-gray-900 no-underline hover:no-underline dark:text-white"
                    >
                      {" "}
                      {o.id.pname}
                    </Link>
                  </div>

                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => updateStatus(o.status, o.id._id)}
                  >
                    Product Status
                  </button>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Update Status
                    </label>
                    <select
                      id="category"
                      name="category"
                      autoComplete="category-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="">Select Status</option>
                      {statuses.map((stat) => (
                        <option value={stat}>{stat}</option>
                      ))}
                    </select>

                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                      onClick={() => {
                        onStatusSave(
                          data.order_id.orderId,
                          data.id,
                          o.id._id,
                          selectedStatus
                        );
                      }}
                    >
                      <span>
                        <SaveIcon /> Save
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Product Order ID:
                      </span>{" "}
                      {data.order_id.orderId}
                    </p>

                    <div className="flex items-center justify-end gap-4">
                      <p className="text-base font-normal text-gray-900 dark:text-white">
                        x{o.capacity}
                      </p>

                      <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        ${o.id.price}
                        {func(o.id.price, o.capacity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      ${price}.00
                    </dd>
                  </dl>

                  {/* <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      -$299.00
                    </dd>
                  </dl> */}

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-lg font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-lg font-bold text-gray-900 dark:text-white">
                    ${price + 99 + 799}.00
                  </dd>
                </dl>
              </div>
            </div>

            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order history
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Product ID:{timeline.id}
                  </h4>
                </div>
                <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                  <li
                    className={`mb-10 ms-6 ${
                      timeline.status === "Delivered"
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-black-700"
                    }`}
                  >
                    {timeline.status === "Delivered" ? (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                          />
                        </svg>
                      </span>
                    )}
                    <h4 className="mb-0.5 text-base font-semibold">
                      Estimated delivery in 24 Nov 2023
                    </h4>
                    <p className="text-sm font-normal ">Products delivered</p>
                  </li>

                  <li
                    className={`mb-10 ms-6 ${
                      timeline.status === "Delivered" ||
                      timeline.status === "Out for Delivery"
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-black-700"
                    }`}
                  >
                    {timeline.status === "Delivered" ||
                    timeline.status === "Out for Delivery" ? (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                      </span>
                    )}
                    <h4 className="mb-0.5 text-base font-semibold">Today</h4>
                    <p className="text-sm font-normal">
                      Products being delivered
                    </p>
                  </li>

                  <li
                    className={`mb-10 ms-6 ${
                      timeline.status === "Delivered" ||
                      timeline.status === "Out for Delivery" ||
                      timeline.status === "Shipping Done"
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-black-700"
                    }`}
                  >
                    {timeline.status === "Delivered" ||
                    timeline.status === "Out for Delivery" ||
                    timeline.status === "Shipping Done" ? (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                    ) : (
                      <div className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800 text-gray-500 dark:text-gray-400">
                        <WarehouseOutlinedIcon fontSize="small" />
                      </div>
                    )}
                    <h4 className="mb-0.5 font-semibold">23 Nov 2023, 15:15</h4>
                    <p className="text-sm">
                      Products in the courier's warehouse
                    </p>
                  </li>

                  <li
                    className={`mb-10 ms-6 ${
                      timeline.status === "Delivered" ||
                      timeline.status === "Out for Delivery" ||
                      timeline.status === "Shipping Done" ||
                      timeline.status === "In Warehouse"
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-black-700"
                    }`}
                  >
                    {timeline.status === "Delivered" ||
                    timeline.status === "Out for Delivery" ||
                    timeline.status === "Shipping Done" ||
                    timeline.status === "In Warehouse" ? (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                    ) : (
                      <div className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800 text-gray-500 dark:text-gray-400">
                        <LocalShippingOutlinedIcon fontSize="small" />
                      </div>
                    )}
                    <h4 className="mb-0.5 text-base font-semibold">
                      22 Nov 2023, 12:27
                    </h4>
                    <p className="text-sm">
                      Products delivered to the courier - DHL Express
                    </p>
                  </li>

                  <li
                    className={`mb-10 ms-6 ${
                      timeline.status === "Payment Done" ||
                      timeline.status === "Delivered" ||
                      timeline.status === "Shipping Done" ||
                      timeline.status === "In Warehouse" ||
                      timeline.status === "Out for Delivery"
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-black-700"
                    }`}
                  >
                    {timeline.status === "Payment Done" ||
                    timeline.status === "Delivered" ||
                    timeline.status === "Shipping Done" ||
                    timeline.status === "In Warehouse" ||
                    timeline.status === "Out for Delivery" ? (
                      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                    ) : (
                      <div className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800 text-gray-500 dark:text-gray-400">
                        <CreditCardOutlinedIcon fontSize="small" />
                      </div>
                    )}
                    <h4 className="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
                    <p className="text-sm">
                      Payment accepted - VISA Credit Card
                    </p>
                  </li>

                  <li
                    className={`ms-6 ${
                      timeline.status === "Pending" ||
                      timeline.status === "Payment Done" ||
                      timeline.status === "Delivered" ||
                      timeline.status === "Shipping Done" ||
                      timeline.status === "In Warehouse" ||
                      timeline.status === "Out for Delivery"
                        ? "text-primary-700 dark:text-primary-500"
                        : "text-black-700"
                    }`}
                  >
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 11.917 9.724 16.5 19 7.5"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-0.5 font-semibold">
                        19 Nov 2023, 10:45
                      </h4>
                      <Link
                        to="/orderreciept"
                        className="text-sm font-medium hover:underline"
                        state={data}
                      >
                        Order placed - Receipt #{data.order_id.orderId}
                      </Link>
                    </div>
                  </li>
                </ol>

                {/* <div className="gap-4 flex sm:flex sm:items-center">
                  <button
                    type="button"
                    className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Cancel the order
                  </button>
                  <Link
                    to="#"
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                  >
                    Order details
                  </Link>
                </div> */}
                {/* <div className="flex flex-col text-center sm:flex sm:flex-col gap-4 sm:gap-y-4 w-full">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Cancel the order
                  </button>
                  <Link
                    to="#"
                    className="w-full no-underline hover:no-underline rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Order details
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
