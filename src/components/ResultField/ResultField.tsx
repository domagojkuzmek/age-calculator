import { TextPreset1 } from "../../styles/typography";
import { SpanElement } from "./ResultFieldStyles";

type ResultOption = {
  children: string;
};

function ResultField({ children }: ResultOption) {
  return (
    <TextPreset1>
      <SpanElement>- -</SpanElement>
      {children}
    </TextPreset1>
  );
}

export default ResultField;
