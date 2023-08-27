import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter"; //(리덕스 스토어)

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
