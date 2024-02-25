import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export function Search({ setSearch, search, ...rest }) {
  return (
    <Container>
      <FiSearch size={24} />
      <input
        type="text"
        icon={"FiSearch"}
        value={search}
        placeholder="Busque por pratos ou ingredientes"
        onChange={e => { setSearch(e.target.value) }}
      />
    </Container>
  )
}