import Input from "../../UI/Input";

const EmotionItemForm = (props) => {
  return (
    <form>
      <Input
        label="Level"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default EmotionItemForm;
