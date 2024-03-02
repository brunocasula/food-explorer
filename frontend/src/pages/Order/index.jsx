import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import statusPending from "../../assets/status_pending.svg";
import statusPreparing from "../../assets/status_preparing.svg";
import statusDelivered from "../../assets/status_delivered.svg";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from "../../components/Loading";

export function Order() {

  const { user } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  function mapToStatus(status) {
    let text;
    let statusIcon;

    switch (status) {
      case "preparing":
        text = "Preparando";
        statusIcon = statusPreparing;
        break;
      case "delivered":
        text = "Entregue";
        statusIcon = statusDelivered;
        break;
      case "canceled":
        text = "Cancelado";
        statusIcon = statusPending;
        break;
      default:
        text = "Pendente";
        statusIcon = statusPending;
    }

    return <span><img src={statusIcon} alt="status" /> {text} </span>
  }

  function formatDate(date) {
    const dateFormatted = new Date(date);

    const day = String(dateFormatted.getDate()).padStart(2, "0");
    const month = String(dateFormatted.getMonth() + 1).padStart(2, "0");

    const hours = String(dateFormatted.getHours() - 3).padStart(2, "0");
    const minutes = String(dateFormatted.getMinutes()).padStart(2, "0");

    return `${day}/${month} às ${hours}h${minutes}`;
  }

  async function handleOrderStatus(order, event) {
    let statusSelected = event.target.value;

    const cart = {
      id: order.id,
      status: statusSelected,
    };

    try {
      await api.put("/orders", cart);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o status do pedido!");
      }
    } finally {
      location.reload();
    }
  }

  useEffect(() => {

    async function fetchOrders() {
      setLoading(true);
      try {
        const response = await api.get("/orders");

        setOrders(response.data);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();

  }, []);

  return (
    <Container>
      <Header
        setSearch={setSearch}
        search={search}
      />

      <main>
        <Content>

          {loading ?
            <div className="loading">
              <Loading />
            </div>
            :
            orders.length === 0 ?
              <div className="data-empty">
                <h2>Você ainda não possui histórico de pedidos!</h2>
              </div>
              :
              <>
                <h1>Histórico de pedidos</h1>
                <section>

                  <table className="table-wide">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhamento</th>
                        <th>Data e hora</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        orders &&
                        orders.map((order, index) => (

                          <tr key={String(order.id)}>

                            {isAdmin ?
                              <td>
                                <select defaultValue={order.status} onChange={event => handleOrderStatus(order, event)}>
                                  <option value="pending">🔴 Pendente</option>
                                  <option value="preparing">🟠 Preparando</option>
                                  <option value="delivered">🟢 Entregue</option>
                                  <option value="canceled">🔴 Cancelado</option>
                                </select>
                              </td>
                              :
                              <td>{mapToStatus(order.status)}</td>
                            }

                            <td>{String(order.id).padStart(8, "0")}</td>
                            <td>
                              {order.dishes.map(dish => `${dish.quantity} x ${dish.name}, `)}
                            </td>
                            <td>{formatDate(order.created_at)}</td>
                          </tr>

                        ))
                      }
                    </tbody>

                  </table>

                  <section className="section-mobile">
                    {
                      orders &&
                      orders.map((order, index) => (

                        <table key={String(order.id)} className="table-mobile" >
                          <tbody>
                            <tr>
                              <td>{String(order.id).padStart(6, "0")}</td>
                              {!isAdmin && <td>{mapToStatus(order.status)}</td>}
                              <td>{formatDate(order.created_at)}</td>
                            </tr>
                            <tr>
                              <td colSpan="3">{order.dishes.map(dish => `${dish.quantity} x ${dish.name}, `)}</td>
                            </tr>

                            {isAdmin &&
                              <tr>
                                <td colSpan={"3"}>
                                  <select defaultValue={order.status} onChange={event => handleOrderStatus(order, event)}>
                                    {/* 🟡 */}
                                    <option value="pending">🔴 Pendente</option>
                                    <option value="preparing">🟠 Preparando</option>
                                    <option value="delivered">🟢 Entregue</option>
                                    <option value="canceled">🔴 Cancelado</option>
                                  </select>
                                </td>
                              </tr>
                            }

                          </tbody>
                        </table>

                      ))}
                  </section>

                </section>
              </>
          }
        </Content>

      </main>


      <Footer />
    </Container >
  );

}