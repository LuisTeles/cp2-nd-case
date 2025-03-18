import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs">
        <div className="flex flex-row bg-customgray pt-2 pb-6 pl-6 pr-4 rounded-lg shadow-lg w-96 ">

          <div className="flex-1 ">
            <div className="text-2xl font-bold py-2 mt-5">Nova Transação</div>
            <div className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70"> Descrição </div>
            <div className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70"> Descrição </div>
            <div className="bg-customblack rounded-sm p-2 my-3 text-sm font-light text-white/70"> Descrição </div>

            <div className="flex flex-row items-center justify-center">
                <div className="flex-1 flex-row items-center">
                    <div className="flex rounded-sm items-center justify-center bg-neutral-900/30 p-2 mr-2">
                            <ArrowUpCircleIcon className="flex size-5 text-green-300 mr-2 "/>
                            <div className="flex text-base font-extralight text-white/70">Entrada</div>
                    </div>
                </div>
                <div className="flex-1 flex-row items-center justify-center">
                    <div className="flex rounded-sm items-center justify-center bg-neutral-900/40 p-2 ml-2 flex-row">
                        <ArrowDownCircleIcon className="flex size-5 text-red-400 mr-2"/>
                        <div className="flex text-base font-extralight text-white/70">Saida</div>
                    </div>
                </div>

            </div>

            <div className="bg-yellow-500 rounded-sm py-3 mt-5 flex items-center justify-center font-bold">Cadastrar</div>

          </div>

          <button className="flex text-3xl font-light" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    );
  }
  