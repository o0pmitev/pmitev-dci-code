function randomRgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
    t = 0.7;
  // return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  return `rgba( ${o(r()) *s}, ${o(r()) *s}, ${o(r()) *s}, .7)`

  console.log(o(r()* s));
  console.log(r() * s);
}
console.log(randomRgba());