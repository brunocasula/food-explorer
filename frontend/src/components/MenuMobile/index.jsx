import { Search } from "../Search";
import { Container } from "./styles";
import { FiX } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";

export function MenuMobile({ menuIsOpen, onCloseMenu, setSearch }) {

  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  function handleSingOut() {
    signOut();
    navigate(`/`);
  }

  function handleNewDish() {
    navigate(`/new`);
  }

  function handleFavorites() {
    navigate(`/favorites`);
  }

  function handleOrders() {
    navigate(`/orders`);
  }

  return (
    < Container data-menu-is-open={menuIsOpen} >
      <header>
        <button
          onClick={onCloseMenu} >
          <FiX />
        </button>
        <h3>Menu</h3>
      </header>
      <main>
        <Search
          setSearch={setSearch}
        />

        <nav>
          <ul>
            {isAdmin && <li><button onClick={handleNewDish}>Novo prato</button></li>}
            {!isAdmin && <li><button onClick={handleFavorites}>Meus favoritos</button></li>}
            <li><button onClick={handleOrders}>{isAdmin ? `Pedidos` : `Histórico de pedidos`}</button></li>
            <li><button onClick={handleSingOut} >Sair</button></li>
          </ul>
        </nav>

      </main>

      <div className="footer">
        <Footer />
      </div>



    </Container >

  )
}