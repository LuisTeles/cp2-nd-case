"use client"

import { useState } from "react";
import Image from "next/image";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import TransactionItem from "@/components/TransactionItem";
import Modal from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Função para abrir e fechar o modal
  const [searchTerm, setSearchTerm] = useState(""); // Função para buscar transações

  const [transactions, setTransactions] = useState([
    {
      title: "Desenvolvimento de site",
      price: 12000,
      category: "Venda",
      date: "13/04/2022",
      type: "entrada",
    },
    {
      title: "Hamburger",
      price: -59,
      category: "Alimentação",
      date: "10/04/2022",
      type: "saida",
    },
    {
      title: "Aluguel do apartamento",
      price: -1200,
      category: "Casa",
      date: "10/03/2022",
      type: "saida",
    },
    {
      title: "Computador",
      price: 5400,
      category: "Serviço",
      date: "05/04/2022",
      type: "entrada",
    },
    {
      title: "Desenvolvimento de App",
      price: 8000,
      category: "Venda",
      date: "28/02/2022",
      type: "entrada",
    },
  ]);

  // Função para adicionar uma nova transação
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Função para calcular o valor total de entradas
  const totalEntradas = transactions
    .filter((transaction) => transaction.type === "entrada")
    .reduce((acc, transaction) => acc + transaction.price, 0);

  // Função para calcular o valor total de saídas
  const totalSaidas = transactions
    .filter((transaction) => transaction.type === "saida")
    .reduce((acc, transaction) => acc + transaction.price, 0);

  // Função para calcular o valor total entre entradas e saídas
  const total = totalEntradas - totalSaidas;

  // Função para filtrar transações com base na busca
  const filteredTransactions = transactions.filter((transaction) => 
    transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.date.includes(searchTerm)
  );

  return (
    <div className="flex flex-col min-h-screen font-roboto text-white bg-[linear-gradient(to_bottom,_#121214_17%,_#202024_17%)] p-0 sm:px-10">

      {/* Header */}
      <header className="flex justify-between items-center p-4 w-full max-w-6xl mx-auto">
        
        {/* Logo */}
        <Image src="/images/Logo.png" alt="logo" width={50} height={50} />

        {/* Botão para abrir o modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-500 rounded-sm text-sm text-white font-bold sm:py-3 py-2 sm:px-4 px-2 transition-transform active:scale-95"
        >
          Nova transação
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 items-center justify-center w-full max-w-6xl mx-auto">
        <div className="flex flex-col w-full max-w-5xl mx-auto">

          {/* Resumo das entradas e saídas */}
          <div className="flex overflow-x-auto space-x-4 mb-3 py-3 justify-around items-center">
            <div className="flex min-w-[250px] bg-customgray rounded-sm justify-between items-start p-4 shadow-md">
              <div>
                <div className="text-sm font-extralight pb-2">Entradas</div>
                <div className="text-3xl font-semibold py-2 pr-2">
                  R$ {totalEntradas.toFixed(2)}
                </div>
              </div>
              <ArrowUpCircleIcon className="h-7 w-7 text-green-300" />
            </div>
            <div className="flex min-w-[250px] bg-customgray rounded-sm justify-between items-start p-4 shadow-md">
              <div>
                <div className="text-sm font-extralight pb-2">Saídas</div>
                <div className="text-3xl font-semibold py-2 pr-2">
                  R$ {totalSaidas.toFixed(2)}
                </div>
              </div>
              <ArrowDownCircleIcon className="h-7 w-7 text-red-400" />
            </div>
            <div className="flex min-w-[250px] bg-amber-400 rounded-sm justify-between items-start p-4 shadow-md">
              <div>
                <div className="text-sm font-extralight pb-2">Total</div>
                <div className="text-3xl font-semibold py-2 pr-2">
                  R$ {total.toFixed(2)}
                </div>
              </div>
              <CurrencyDollarIcon className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* Barra de busca */}
          <div className="flex flex-row justify-between items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Busque uma transação"
              className="flex-1 bg-customblack text-white placeholder-gray-400 rounded-sm p-3 text-sm w-full sm:w-auto shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
            />
            <button className="flex items-center ring-yellow-500 ring-2 rounded-sm p-3 text-sm text-yellow-500 font-bold transition-transform active:scale-95">
              <MagnifyingGlassIcon className="h-5 w-5 text-yellow-500 mx-2" />
              <div className="hidden sm:flex">Buscar</div>
            </button>
          </div>

          {/* Listra de transações */}
          <div className="flex flex-col justify-center gap-2">
            {filteredTransactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                title={transaction.title}
                price={transaction.price}
                category={transaction.category}
                date={transaction.date}
                type={transaction.type}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addTransaction={addTransaction}
        />
      </main>
    </div>
  );
}
