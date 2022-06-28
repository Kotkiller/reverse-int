module.exports = function reverse (n) {
    if (n<0){
        return (Math.sign(n)*parseInt(n.toString().split('').reverse().join('')))*-1;
    }
    else {
        return Math.sign(n)*parseInt(n.toString().split('').reverse().join(''));
    }
             }


