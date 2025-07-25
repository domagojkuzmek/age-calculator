import currentYear from "../../currentYear";

type Date = {
  name: "Day" | "Month" | "Year";
};

function Input({ name }: Date) {
  switch (name) {
    case "Day":
      return (
        <div>
          <label htmlFor="day">Day</label>
          <input type="text" id="day" min={1} max={31} required />
        </div>
      );
    case "Month":
      return (
        <div>
          <label htmlFor="month">Month</label>
          <input type="text" id="month" min={1} max={12} required />
        </div>
      );
    case "Year":
      return (
        <div>
          <label htmlFor="month">Year</label>
          <input type="text" id="year" min={1} max={currentYear()} required />
        </div>
      );
  }
}

export default Input;
