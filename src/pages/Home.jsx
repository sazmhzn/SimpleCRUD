import { Link } from "react-router-dom";
import HeaderBox from "../components/HeaderBox";
import CustomInput from "../components/CustomInput";
import FormComponent from "../components/FormComponent";

const Home = () => {
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        {/* <PaymentTransferForm /> */}
        <FormComponent />
      </section>
    </section>
  );
};

export default Home;
