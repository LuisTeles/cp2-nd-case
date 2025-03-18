
const TransactionItem = ({ title, price, category, date }) => {
    // Format price as currency
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  
    const isNegative = price < 0 ? 'text-red-400' : 'text-green-300'; // Add color to price

    return (
      <div className="flex justify-between bg-customgray rounded-sm px-5 py-3 my-1 items-center">
        <div className="flex-1 text-sm font-light">{title}</div>
        <div className={`flex-1 text-sm font-light ${isNegative}`}>{formattedPrice}</div>
        <div className="flex-1 text-sm font-light">{category}</div>
        <div className="flex text-sm font-light">{date}</div>
      </div>
    );
  };
  
  export default TransactionItem;
  
  