import { useState } from "react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";

export default function Modal({ isOpen, onClose, addTransaction }) {
  if (!isOpen) return null;

  // React state para os campos do formulário
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // "entrada" or "saida"
  const [type, setType] = useState("entrada");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Garante que todos os campos estão preenchidos
    if (!description || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    // Função para adicionar uma nova transação
    const newTransaction = {
      title: description,
      price: parseFloat(price),
      category: category, 
      date: new Date().toLocaleDateString(), // Data atual
      type: type, 
    };

    // Passa a nova transação para a função addTransaction
    addTransaction(newTransaction);

    // Limpa os campos do formulário
    setDescription("");
    setPrice("");
    setCategory("");
    setType("entrada");

    // Fecha o modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs">
      <div className="flex flex-row bg-customgray pt-2 pb-6 pl-6 pr-4 rounded-lg shadow-lg w-96">
        <div className="flex-1">
          <div className="text-2xl font-bold py-2 mt-5">Nova Transação</div>

          {/* Formulário para descrição */}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70 w-full"
          />

          {/* Formulário de preço */}
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço"
            className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70 w-full"
          />

          {/* Formulário de categoria */}
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Categoria"
            className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70 w-full"
          />

          {/* Cicla a variável type entre entrada ou saída */}
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

          {/* Botão de cadastro*/}
          <button
            onClick={handleFormSubmit}
            className="bg-yellow-500 rounded-sm py-3 mt-5 w-full font-bold text-white"
          >
            Cadastrar
          </button>
        </div>

        {/* Botão de fechar */}
        <button className="flex text-3xl font-light" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
