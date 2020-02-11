// CDG
function cdg(x, y) {
    if( y === 0) {
        return x;
    } else {
        return cdg(y, x%y);
    }
}

console.log(cdg(20, 8)); // ~> 4