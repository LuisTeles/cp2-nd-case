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
    { title: "Desenvolvimento de site", price: 12000, category: "Venda", date: "13/04/2022" },
    { title: "Consultoria", price: 3500, category: "Serviço", date: "20/03/2022" },
    { title: "Venda de Produto", price: 5000, category: "Venda", date: "10/03/2022" },
    { title: "Manutenção de Sistema", price: 7200, category: "Serviço", date: "05/04/2022" },
    { title: "Desenvolvimento de App", price: 15000, category: "Venda", date: "28/02/2022" },
  ]);

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
    <div className="flex flex-col min-h-screen font-roboto text-white bg-[linear-gradient(to_bottom,_#121214_15%,_#29292E_15%)] p-10">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div>
          <Image src="/images/Logo.svg" alt="logo" width={50} height={50} />
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-yellow-500 rounded-sm text-sm text-white font-bold py-3 px-5">
          Nova transação
        </button>
      </header>

      {/* Div Principal */}
      <main
        className="flex-1 p-4
      "
      >
        {/* Fluxo de caixa */}
        <div className="flex justify-around mb-10">
          <div className="flex bg-customgray rounded-sm justify-between items-start p-4">
            <div>
              <div className="text-sm font-extralight pb-2">Entradas</div>
              <div className="text-3xl font-semibold py-2 pr-2"> R$ 17.400,00 </div>
            </div>
            <ArrowUpCircleIcon className="h-7 w-7 text-green-300 ml-5" />
          </div>

          <div className="flex bg-customgray rounded-sm justify-between items-start p-4">
            <div>
              <div className="text-sm font-extralight pb-2">Saídas</div>
              <div className="text-3xl font-semibold py-2 pr-2"> R$ 1.256,00 </div>
            </div>
            <ArrowDownCircleIcon className="h-7 w-7 text-red-400 ml-5" />
          </div>

          <div className="flex bg-amber-400 rounded-sm justify-between items-start p-4">
            <div>
              <div className="text-sm font-extralight pb-2">Total</div>
              <div className="text-3xl font-semibold py-2 pr-2"> R$ 16.141,00 </div>
            </div>
            <CurrencyDollarIcon className="h-7 w-7 text-white ml-5" />
          </div>
        </div>

        {/* Todas Transações */}
        <div className="flex flex-col justify-center">
          {/* Busca */}
          <div className="flex justify-between rounded-sm mb-4 items-center">
            <div className="flex-1 bg-customblack rounded-sm p-3 text-sm">Busque uma transação</div>
            <div className="flex ring-yellow-500 ring-2 rounded-sm p-3 text-sm ml-3 items-center">
              <MagnifyingGlassIcon className="h-5 w-5 text-yellow-500 mx-3" />
              <div className="flex-1 text-yellow-500 rounded-sm text-sm pr-5 font-bold">Buscar</div>
            </div>
          </div>

          {/* Histórico de Transações */}
          <div className="flex flex-col justify-center">
            
            {/* Transação */}
              {transactions.map((transaction, index) => (
                <TransactionItem
                  key={index}
                  title={transaction.title}
                  price={transaction.price}
                  category={transaction.category}
                  date={transaction.date}
                />
              ))}


          </div>
        </div>


        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Hello Modal</h2>
          <p>This is a modal</p> 
        </Modal>
         
      </main>
    </div>
  );
}
