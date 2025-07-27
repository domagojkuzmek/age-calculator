import Input from "./components/Input/Input";
import ButtonSVG from "./components/Button/ButtonSVG";
import Button from "./components/Button/Button";
import ResultField from "./components/ResultField/ResultField";

function App() {
  return (
    <>
      <form>
        <Input name="Day" />
        <Input name="Month" />
        <Input name="Year" />
      </form>
      <Button children={<ButtonSVG width={44} height={44} />} />

      <ResultField children="years" />
      <ResultField children="months" />
      <ResultField children="days" />
    </>
  );
}

export default App;
