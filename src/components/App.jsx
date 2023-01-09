import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = option => {
   switch (option) {
    case 'good':
      setGood(prevGood=>prevGood + 1);
      break;
    case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;
    case 'bad':
      setBad( prevBad => prevBad + 1);
      break;
    default:
      return;  
  }
};

 const countTotalFeedback = () => {
  return good + neutral + bad;
 };

 const countPositiveFeedback = () => {
    return Math.round((good * 100)/countTotalFeedback());
 };

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title=" Statistics">
        {countTotalFeedback() ===0 ? (
          <Notification message="There is no feedback"/>
        ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedback()}
              />)}
            </Section>
      </>
    );
 }

export default App;


// export default class App extends Component{
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
  
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const result = good + neutral + bad;
//     return result;
//   };

//   countPositiveFeedback = () => {
//     const result = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good * 100) / result;
//     return Math.round(percentage);
//   };

//   onLeaveFeedback = (evt) => {
//     const name = evt.target.name;
//     this.setState((prevState) => ({
//       [name]: prevState[name] + 1
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedback();

//     const objKey = Object.keys(this.state);
//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         <Section title=" Statistics">
//         {total === 0 ? (
//           <Notification message="There is no feedback"/>
//         ) : (
            
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={positivePercentage}
//               />)}
//             </Section>
//       </>
//     )
//   }
// }
