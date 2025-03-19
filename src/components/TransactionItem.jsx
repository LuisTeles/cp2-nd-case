
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";

const TransactionItem = ({ title, price, category, date, type }) => {
    // Format price as currency
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price);
  
    const isNegative = type === ("saida") ? 'text-red-400' : 'text-green-300'; // Add color to price
    const formattedPriceWithSpace = formattedPrice.replace('R$', price < 0 ? ' R$' : 'R$'); // Adjust spacing for negative numbers

    return (
      <div className="flex sm:justify-between bg-customgray rounded-sm px-5 py-3 my-1 sm:items-center flex-col sm:flex-row gap-1 sm:gap-0 shadow-xl">
        <div className="flex-1 text-sm font-light">{title}</div>
        <div className={`flex-1 text-sm font-light ${isNegative}`}>{formattedPriceWithSpace}</div>
        <div className="flex-1 flex justify-between items-center">
          <div className="flex text-sm font-light flex-row items-center justify-center"><BookmarkIcon className="size-3 mr-2 sm:hidden flex"/>{category}</div>
          <div className="flex text-sm font-light flex-row items-center justify-center"><CalendarIcon className="size-3 mr-2 sm:hidden flex"/>{date}</div>
        </div>
      </div>
    );
  };
  
  export default TransactionItem;
  
  