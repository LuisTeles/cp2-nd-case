import { useState } from "react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";

export default function Modal({ isOpen, onClose, addTransaction }) {
  if (!isOpen) return null;

  // State for the form fields
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // "entrada" or "saida"
  const [type, setType] = useState("entrada");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!description || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    // Create a new transaction object
    const newTransaction = {
      title: description,
      price: parseFloat(price),
      category: category, // Category can be based on the type
      date: new Date().toLocaleDateString(), // Current date
      type: type, // Default to "entrada"
    };

    // Pass the new transaction to the parent component
    addTransaction(newTransaction);

    // Clear form fields
    setDescription("");
    setPrice("");
    setCategory("");
    setType("entrada");

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs">
      <div className="flex flex-row bg-customgray pt-2 pb-6 pl-6 pr-4 rounded-lg shadow-lg w-96">
        <div className="flex-1">
          <div className="text-2xl font-bold py-2 mt-5">Nova Transação</div>

          {/* Description Input */}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70 w-full"
          />

          {/* Price Input */}
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço"
            className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70 w-full"
          />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Categoria"
            className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70 w-full"
          />

          {/* Type Selection (Entrada or Saída) */}
          <div className="flex flex-row items-center justify-center mb-3">
            <div
              onClick={() => setType("entrada")}
              className={`flex rounded-sm items-center justify-center p-2 mr-2 ${type === "entrada" ? "bg-neutral-900/30" : ""}`}
            >
              <ArrowUpCircleIcon className="h-5 w-5 text-green-300 mr-2" />
              <div className="text-base font-extralight text-white/70">Entrada</div>
            </div>
            <div
              onClick={() => setType("saida")}
              className={`flex rounded-sm items-center justify-center p-2 ml-2 ${type === "saida" ? "bg-neutral-900/40" : ""}`}
            >
              <ArrowDownCircleIcon className="h-5 w-5 text-red-400 mr-2" />
              <div className="text-base font-extralight text-white/70">Saída</div>
            </div>
          </div>

          {/* <div className="flex flex-row items-center justify-center">
            <div className="flex-1 flex-row items-center">
              <div className="flex rounded-sm items-center justify-center bg-neutral-900/30 p-2 mr-2">
                <ArrowUpCircleIcon className="flex size-5 text-green-300 mr-2 " />
                <div className="flex text-base font-extralight text-white/70">
                  Entrada
                </div>
              </div>
            </div>
            <div className="flex-1 flex-row items-center justify-center">
              <div className="flex rounded-sm items-center justify-center bg-neutral-900/40 p-2 ml-2 flex-row">
                <ArrowDownCircleIcon className="flex size-5 text-red-400 mr-2" />
                <div className="flex text-base font-extralight text-white/70">
                  Saida
                </div>
              </div>
            </div>
          </div> */}

          {/* Submit Button */}
          <button
            onClick={handleFormSubmit}
            className="bg-yellow-500 rounded-sm py-3 mt-5 w-full font-bold text-white"
          >
            Cadastrar
          </button>
        </div>

        <button className="flex text-3xl font-light" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
