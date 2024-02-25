import { Container, Content, Logo, Logout, Menu, ButtonCart } from "./styles";
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { PiReceipt } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo.svg";
import { Button } from "../Button";
import { Search } from "../Search";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { MenuMobile } from "../MenuMobile";
import { useState } from "react";
import { useCart } from "../../hooks/cart";

export function Header({ setSearch, search, ...rest }) {

  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { user, signOut } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  const { dataCart } = useCart();

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

  function handleCart() {
    navigate(`/cart`)
  }

  return (
    <Container>

      <MenuMobile
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        setSearch={setSearch}
      />

      <Content>
        <Menu>
          <FiMenu
            onClick={() => setMenuIsOpen(true)}
          />
        </Menu>

        <Logo to={"/"}>
          <img src={logoIcon} alt="" />
          <h1>food explorer</h1>

          {isAdmin &&
            <span>admin</span>
          }
        </Logo>

        <div className="search">
          <Search
            setSearch={setSearch}
            search={search}
          />
        </div>

        {!isAdmin &&
          < button
            className="button-text"
            onClick={handleFavorites}
          >
            Meus favoritos
          </button>
        }

        <button
          className="button-text"
          onClick={handleOrders}
        >
          Histórico de pedidos
        </button>


        <div className="button">
          {isAdmin ?

            <Button
              title="Novo prato"
              onClick={handleNewDish}
            />
            :
            <>
              <Button
                title={`Pedidos (${dataCart.length})`}
                icon={PiReceipt}
                onClick={handleCart}
              />
            </>

          }
        </div>

        {isAdmin ?
          <div className="blank">
            &nbsp;
          </ div>
          :
          <ButtonCart>
            <span>{dataCart.length}</span>
            <button
              onClick={handleCart}
            >

              <PiReceipt />
            </button>
          </ButtonCart>
        }

        <Logout
          onClick={handleSingOut}
        >
          <FiLogOut />
        </Logout>

      </Content>
    </Container >
  );
}