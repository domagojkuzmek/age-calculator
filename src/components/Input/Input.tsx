import currentYear from "../../utils/currentYear";
import { TextPreset6 } from "../../styles/typography";
import { InputStyles } from "./InputStyles";

type Date = {
  name: "Day" | "Month" | "Year";
};

function Input({ name }: Date) {
  switch (name) {
    case "Day":
      return (
        <div>
          <label htmlFor="day">
            <TextPreset6>DAY</TextPreset6>
          </label>
          <InputStyles
            id="day"
            min={1}
            max={31}
            step={1}
            placeholder="DD"
            required
          />
        </div>
      );
    case "Month":
      return (
        <div>
          <label htmlFor="month">
            <TextPreset6>Month</TextPreset6>
          </label>
          <InputStyles
            id="month"
            min={1}
            max={12}
            step={1}
            placeholder="MM"
            required
          />
        </div>
      );
    case "Year":
      return (
        <div>
          <label htmlFor="month">
            <TextPreset6>Year</TextPreset6>
          </label>
          <InputStyles
            id="year"
            min={1}
            max={currentYear()}
            step={1}
            placeholder="YY"
            required
          />
        </div>
      );
  }
}

export default Input;
