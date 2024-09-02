import PaymentDetails from "./PaymentDetails"
import PaymentTable from "./PaymentTable"

const PaymentHistoryMainArea = () => {
  return (
    <div>
      {" "}
      <div className="">
        <h3 className="text-center font-bold text-3xl pt-2">Payment History</h3>
      </div>
      <div>
        <PaymentDetails/>
        <PaymentTable/>
      </div>
    </div>
  );
};

export default PaymentHistoryMainArea;
