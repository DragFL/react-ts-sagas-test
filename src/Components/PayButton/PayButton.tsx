import "./PayButton.scss";

type PropTypes = {
    price: number;
}

const PayButton: React.FC <PropTypes> = ({price}) => {
  return (
    <form action="https://checkout.wompi.co/p/" method="GET">
      <input
        type="hidden"
        name="public-key"
        value="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
      />
      <input type="hidden" name="currency" value="COP" />
      <input type="hidden" name="amount-in-cents" value={price*100} />
      <input type="hidden" name="reference" value="4XMPGKWWPKWQ" />
      <input type="hidden" name="signature:integrity" value="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5" />
      <button type="submit" className="waybox-button">
        Pagar con Wompi
      </button>
    </form>
  );
};

export default PayButton;
