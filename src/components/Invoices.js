import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InvoiceModal from "./InvoiceModal";
import { removeInvoice } from "../utils/invoiceSlice";
import InvoiceForm from "./InvoiceForm";
import FormData from "./FormData";
import ButtonGroups from "./ButtonGroups";

const Invoices = () => {
  const items = useSelector((store) => store.invoice.items);
  const dispatch = useDispatch();

  const [item, setItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [clone, setClone] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [cloneIndex, setCloneIndex] = useState(null);
  const [createInvoice, setCreateInvoice] = useState(false);
  const [invoiceItem] = useState([
    {
      id: 0,
      name: "",
      description: "",
      price: "1.00",
      quantity: 1,
    },
  ]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleViewItem = (item) => {
    setItem(item);
    setIsOpen(true);
  };

  const handleDeleteItem = (index) => {
    dispatch(removeInvoice(index));
  };

  const handleEditItem = (index) => {
    setEdit(!edit);
    setEditIndex(index);
  };

  const handleCloneInvoice = (index) => {
    setClone(true);
    setCloneIndex(index);
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }} className="mt-3">
          {items.length === 0
            ? 'Please add invoice by clicking "Create Invoice" button'
            : " Invoice Details"}
        </h2>
        {!edit && !clone && !createInvoice && (
          <div className="secondary">
            {items.map((item, index) => {
              return (
                item && (
                  <div key={index} className="invoice-data">
                    <FormData item={item} />
                    <ButtonGroups
                      handleViewItem={() => handleViewItem(item)}
                      handleDeleteItem={() => handleDeleteItem(index)}
                      handleEditItem={() => handleEditItem(index)}
                      handleCloneInvoice={() => handleCloneInvoice(index)}
                    />
                  </div>
                )
              );
            })}
          </div>
        )}
        {!edit && !clone && !createInvoice && (
          <div style={{ textAlign: "center" }}>
            <button
              className="custom-btn mt-5"
              onClick={() => setCreateInvoice(true)}
            >
              Create Invoice
            </button>
          </div>
        )}
        <InvoiceModal
          showModal={isOpen}
          closeModal={closeModal}
          info={item}
          items={invoiceItem}
          currency={item.currency}
          subTotal={item.subTotal}
          taxAmmount={item.taxAmmount}
          discountAmmount={item.discountAmmount}
          total={item.total}
        />

        {createInvoice && (
          <InvoiceForm isCreated={() => setCreateInvoice(false)} />
        )}

        {edit && (
          <InvoiceForm
            propsData={items[editIndex]}
            isEdit={true}
            index={editIndex}
            onUpdate={() => setEdit(false)}
          />
        )}
        {clone && (
          <InvoiceForm
            propsData={items[cloneIndex]}
            isEdit={false}
            index={cloneIndex}
            isClone={true}
            onUpdate={() => setClone(false)}
          />
        )}
      </div>
    </>
  );
};

export default Invoices;
