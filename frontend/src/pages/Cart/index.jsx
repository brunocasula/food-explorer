import { Container, Content, CartDish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import dishNoImage from "../../assets/dish_no_image.svg";
import qrCode from "../../assets/qr_code.svg";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { MdOutlinePix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { PiReceipt } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiForkKnife } from "react-icons/pi";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

export function Cart() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const [disableControl, setDisableControl] = useState(false);

  const [creditNumber, setCreditNumber] = useState("");
  const [creditValidate, setCreditValidate] = useState("");
  const [creditCvc, setCreditCvc] = useState("");

  const paymentPix = "pix";
  const paymentCredit = "credit";
  const paymentAwaiting = "awaiting";
  const paymentApproved = "approved";
  const paymentFinished = "finalized";

  const [payment, setPayment] = useState(paymentPix);

  const { dataCart, handleRemoveDishFromCart, handleResetCart, total } = useCart();

  function handlePayment(status) {
    setPayment(status);
  }

  function handleFinishedCart2(payment_method) {
    setInterval(() => {
      setPayment(paymentAwaiting)
    }, 5000);

    setInterval(() => {
      setPayment(paymentApproved)
    }, 5000);

    setInterval(() => {
      setPayment(paymentFinished)
    }, 5000);
  }

  async function handleFinishedCart(payment_method) {

    try {
      setDisableControl(true);
      const response = await api.post(`/orders`,
        {
          "status": "pending",
          "total_price": total,
          payment_method,
          "orders_items": dataCart,
        });

      setPayment(paymentAwaiting);

      setTimeout(() => {
        setPayment(paymentApproved)
      }, 3000);

      setTimeout(() => {
        setPayment(paymentFinished)
        toast.info(`Pedido finalizado com sucesso!`);
      }, 6000);

      setTimeout(() => {
        handleResetCart();
        navigate(`/`);
      }, 9000);


    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível criar o pedido!");
      }
      setDisableControl(false);
    }

  }

  useEffect(() => {
    setDisableControl(!(dataCart?.length > 0));

  }, [dataCart]);

  return (
    <Container>
      <Header />

      <main>
        <Content>

          {dataCart.length === 0 ?
            <div className="data-empty">
              <h2>Você ainda não possui nenhum pedido no carrinho!</h2>
            </div>
            :
            <>
              <div className="my-cart">
                <h1>Meu pedido</h1>
                <section>

                  {
                    dataCart.map((cart, index) => (

                      <CartDish
                        key={String(index)}
                      >
                        <img src={cart.image ? `${api.defaults.baseURL}/files/${cart.image}` : dishNoImage}
                          alt="Imagem do prato." />
                        <section>
                          <div>
                            <h3>{`${cart.quantity} x ${cart.name.substring(0, 13)}`}</h3>
                            <span>{`R$ ${cart.price}`}</span>
                          </div>
                          <button
                            onClick={() => handleRemoveDishFromCart(cart.id)}>
                            Excluir
                          </button>
                        </section>
                      </CartDish>

                    ))

                  }

                </section>
                <h3>Total: R$ {total}</h3>
              </div>

              <div className="my-payment">
                <h1>Pagamento</h1>
                <section>

                  <div className="payment">
                    <section className="payment-button">
                      <button
                        disabled={disableControl}
                        onClick={e => handlePayment(paymentPix)}
                      >
                        <MdOutlinePix />
                        PIX
                      </button>
                      <button
                        disabled={disableControl}
                        onClick={e => handlePayment(paymentCredit)}
                      >
                        <FaCreditCard />
                        Crédito
                      </button>
                    </section>

                    <section className="payment-method">
                      {(payment === paymentPix) &&
                        <div className="pix-method">

                          <img src={qrCode} alt="" />
                          <Button
                            title="Finalizar pagamento"
                            icon={PiReceipt}
                            disabled={disableControl}
                            onClick={() => handleFinishedCart(payment)}
                          />
                        </div>
                      }

                      {(payment === paymentCredit) &&
                        <div className="credit-method">
                          <form action="">
                            <fieldset>
                              <div className="input-wrapper">
                                <label htmlFor="">Número do cartão</label>
                                <input
                                  type="number"
                                  placeholder="0000 0000 0000 0000"
                                  onChange={e => setCreditNumber(e.target.value)}
                                  disabled={disableControl}
                                  maxLength={16}
                                />
                              </div>

                              <div className="input-inline">
                                <div className="input-wrapper">
                                  <label htmlFor="">Validade</label>
                                  <input
                                    type="text"
                                    placeholder="04/25"
                                    onChange={e => setCreditValidate(e.target.value)}
                                    disabled={disableControl}
                                    maxLength={5}
                                  />
                                </div>


                                <div className="input-wrapper">
                                  <label htmlFor="">CVC</label>
                                  <input
                                    type="text"
                                    placeholder="000"
                                    onChange={e => setCreditCvc(e.target.value)}
                                    disabled={disableControl}
                                    maxLength={3}
                                  />
                                </div>
                              </div>

                              <Button
                                title="Finalizar pagamento"
                                icon={PiReceipt}
                                disabled={disableControl || !creditNumber || !creditValidate || !creditCvc}
                                onClick={() => handleFinishedCart(payment)}
                              />

                            </fieldset>
                          </form>
                        </div>
                      }

                      {(payment === paymentAwaiting) ?
                        <div className="awaiting">
                          <FiClock />
                          <p>Aguardando pagamento no caixa</p>
                        </div>
                        :
                        (payment === paymentApproved) ?
                          <div className="approved">
                            <FaRegCircleCheck />
                            <p>Pagamento aprovado!</p>
                          </div>
                          :

                          (payment === paymentFinished) &&
                          <div className="finished">
                            <PiForkKnife />
                            <p>Pedido Entregue!</p>
                          </div>
                      }

                    </section>

                  </div>

                </section>
              </div>
            </>
          }

        </Content>
      </main>

      <Footer />
    </Container >
  );

}