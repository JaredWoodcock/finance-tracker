import Nav from "./components/Nav";
import CurrentDate from "./components/CurrentDate";
import FinanceWorksheet from "./components/FinanceWorksheet";

export default function App() {
  return(
    <div>
      <Nav />
      <CurrentDate />
      <FinanceWorksheet />
    </div>
  )
}