"use client";

import Image from "next/image";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import TransactionItem from "@/components/TransactionItem";
import Modal from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      price: 7200,
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


  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const totalEntradas = transactions
    .filter((transaction) => transaction.type === "entrada")
    .reduce((acc, transaction) => acc + transaction.price, 0);

  const totalSaidas = transactions
    .filter((transaction) => transaction.type === "saida")      
    .reduce((acc, transaction) => acc + transaction.price, 0);  

  const total = totalEntradas - totalSaidas;

  // const addTransaction = () => {
  //   setTransactions([
  //     ...transactions,
  //     {
  //       title: "Desenvolvimento de site",
  //       price: 12000,
  //       category: "Venda",
  //       date: "13/04/2022",
  //     },
  //   ]);
  // }

  return (
    <div className="flex flex-col min-h-screen font-roboto text-white bg-[linear-gradient(to_bottom,_#121214_17%,_#202024_17%)] p-0 sm:px-10">
      {/* Header */}
      <header className="flex justify-between items-center p-4 w-full max-w-6xl mx-auto">
        {/* Logo */}
        <Image src="/images/Logo.png" alt="logo" width={50} height={50} />

        {/* Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-500 rounded-sm text-sm text-white font-bold sm:py-3 py-2 sm:px-4 px-2 transition-transform active:scale-95"
        >
          Nova transação
        </button>
      </header>

      {/* Div Principal */}
      <main className="flex-1 p-4 items-center justify-center w-full max-w-6xl mx-auto">
        <div className="flex flex-col w-full max-w-5xl mx-auto">
          {/* Fluxo de caixa */}
          <div className="flex overflow-x-auto space-x-4 mb-3 py-3 justify-around items-center">
            <div className="flex min-w-[250px] bg-customgray rounded-sm justify-between items-start p-4 shadow-md">
              <div>
                <div className="text-sm font-extralight pb-2">Entradas</div>
                <div className="text-3xl font-semibold py-2 pr-2">
                  {" "}
                  R$ {totalEntradas.toFixed(2)}{" "}
                </div>
              </div>
              <ArrowUpCircleIcon className="h-7 w-7 text-green-300" />
            </div>
            <div className="flex min-w-[250px] bg-customgray rounded-sm justify-between items-start p-4 shadow-md">
              <div>
                <div className="text-sm font-extralight pb-2">Saídas</div>
                <div className="text-3xl font-semibold py-2 pr-2">
                  {" "}
                  R$ {totalSaidas.toFixed(2)}{" "}
                </div>
              </div>
              <ArrowDownCircleIcon className="h-7 w-7 text-red-400" />
            </div>
            <div className="flex min-w-[250px] bg-amber-400 rounded-sm justify-between items-start p-4 shadow-md">
              <div>
                <div className="text-sm font-extralight pb-2">Total</div>
                <div className="text-3xl font-semibold py-2 pr-2">
                  {" "}
                  R$ {total.toFixed(2)}{" "}
                </div>
              </div>
              <CurrencyDollarIcon className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* Todas Transações */}
          <div className="flex-1 flex-col justify-center w-full max-w-5xl mx-auto items-center lg:p-9">
            {/* Busca */}
            <div className="flex flex-row justify-between items-center gap-4 mb-4">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Busque uma transação"
                className="flex-1 bg-customblack text-white placeholder-gray-400 rounded-sm p-3 text-sm w-full sm:w-auto shadow-xl"
              />

              {/* Search Button */}
              <button className="flex items-center ring-yellow-500 ring-2 rounded-sm p-3 text-sm text-yellow-500 font-bold transition-transform active:scale-95">
                <MagnifyingGlassIcon className="h-5 w-5 text-yellow-500 mx-2" />
                <div className="hidden sm:flex">Buscar</div>
              </button>
            </div>

            {/* Histórico de Transações */}
            <div className="flex flex-col justify-center gap-2">
              {/* Transações */}
              {transactions.map((transaction, index) => (
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
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addTransaction={addTransaction}
        />
      </main>
    </div>
  );
}
