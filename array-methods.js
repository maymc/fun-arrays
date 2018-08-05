var dataset = require('./dataset.json');

/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/
// var hundredThousandairs = null;
console.log("exercise 1", dataset.bankBalances[0]);

const hundredThousandairs = dataset.bankBalances.filter((element, index, array) => dataset.bankBalances[index].amount > 100000);

/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting new array to `datasetWithRoundedDollar`
*/

var datasetWithRoundedDollar = null;
// datasetWithRoundedDollar = dataset.bankBalances.slice();
// console.log("exercise 2: ", datasetWithRoundedDollar[0]);
// console.log("Orig dataset: ", dataset.bankBalances[0]);

// datasetWithRoundedDollar.map((element, index, array) => {
//   datasetWithRoundedDollar[index]["rounded"] = Math.round(datasetWithRoundedDollar[index].amount);
// });
// console.log(datasetWithRoundedDollar[0]);
// console.log("here:", dataset.bankBalances[0]);


datasetWithRoundedDollar = dataset.bankBalances.map((element) => {
  // let newElement = {};
  // newElement["amount"] = element.amount;
  // newElement["state"] = element.state;
  // newElement["rounded"] = Math.round(element.amount);
  // return newElement;

  // var newElement = JSON.parse(JSON.stringify(element));
  // newElement["rounded"] = Math.round(element.amount);
  // return newElement;

  return {
    amount: element.amount,
    state: element.state,
    rounded: Math.round(element.amount)
  };
})
console.log("exercise 2: ", datasetWithRoundedDollar[0]);

/*
DO NOT MUTATE DATA.

create a new dataset where each bank object is a new object.
`amount` and `state` values will be transferred to the new object.
This new object is different, you will add one new key of `roundedDime`

`roundedDime` value is `amount` rounded to the nearest 10th of a cent

Example 1
{
  "amount": "134758.46",
  "state": "HI"
  "roundedDime": 134758.5
}
Example 2
{
  "amount": "134758.44",
  "state": "HI"
  "roundedDime": 134758.4
}
assign the resulting new array to `roundedDime`
*/

var datasetWithRoundedDime = null;
// console.log(dataset.bankBalances[0]);
// datasetWithRoundedDime = dataset.bankBalances.slice();
// console.log("exercise 3: ", datasetWithRoundedDime[0]);

// datasetWithRoundedDime.map((element, index, array) => {
//   datasetWithRoundedDime[index]["roundedDime"] = Math.round(datasetWithRoundedDime[index].amount * 10) / 10;
// });
// console.log(datasetWithRoundedDime[0]);

datasetWithRoundedDime = dataset.bankBalances.map((element) => {
  // let newElement = {};
  // newElement["amount"] = element.amount;
  // newElement["state"] = element.state;
  // newElement["roundedDime"] = Math.round(element.amount * 10) / 10;

  // let newElement = JSON.parse(JSON.stringify(element));
  // newElement["roundedDime"] = Math.round(element.amount * 10) / 10;
  // return newElement;
  return {
    amount: element.amount,
    state: element.state,
    roundedDime: Math.round(element.amount * 10) / 10
  };
})
console.log("exercise 3: ", datasetWithRoundedDime[0]);




// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object
var sumOfBankBalances = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */
var sumOfInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest cent

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var stateSums = null;

/*
  for all states *NOT* in the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  sum the amount for each state (stateSum)
  take each `stateSum` and calculate 18.9% interest for that state
  sum the interest values that are greater than 50,000 and save it to `sumOfHighInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var sumOfHighInterests = null;

/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = null;

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs: hundredThousandairs,
  datasetWithRoundedDollar: datasetWithRoundedDollar,
  datasetWithRoundedDime: datasetWithRoundedDime,
  sumOfBankBalances: sumOfBankBalances,
  sumOfInterests: sumOfInterests,
  sumOfHighInterests: sumOfHighInterests,
  stateSums: stateSums,
  lowerSumStates: lowerSumStates,
  higherStateSums: higherStateSums,
  areStatesInHigherStateSum: areStatesInHigherStateSum,
  anyStatesInHigherStateSum: anyStatesInHigherStateSum
};
