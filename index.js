const hackerSpeak = str => {
  let newArr = str.split(' ');
  let hackArr = [];
  for (let i = 0; i < newArr.length; i++) {
    hackArr.push(newArr[i].replace(/a/g,"4").replace(/o/g,"0").replace(/e/g, "3").replace(/i/g, "1").replace(/s/g, "5"));

    //  console.log(hackArr);
  }
  return hackArr.join(' ').toString();
}

console.log(hackerSpeak("become a coder"));