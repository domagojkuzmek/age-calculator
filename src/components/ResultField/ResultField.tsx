import { useState } from "react";

import { TextPreset1 } from "../../styles/typography";
import { SpanElement } from "./ResultFieldStyles";

type ResultOption = {
  children: string;
};

function ResultField({ children }: ResultOption) {
  const [result, setResult] = useState<string>("- -");

  return (
    <TextPreset1>
      <SpanElement>{result}</SpanElement>
      {children}
    </TextPreset1>
  );
}

export default ResultField;
