export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "jurista"
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return (
      "jurista"
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "Juan Pablo U"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largeMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largeMatch) {
    const x: number = parseInt(largeMatch[1]);
    const y: number = parseInt(largeMatch[2]);
    const z: number = parseInt(largeMatch[3]);
    return (Math.max(x,y,z)).toString();
  }

  const multiply = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiply) {
    const x: number = parseInt(multiply[1]);
    const y: number = parseInt(multiply[2]);
    return (x*y).toString();
  }


  const cubeSquare = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (cubeSquare) {
    for (let index = 0; index < cubeSquare.length; index++) {
      let numL = Number(cubeSquare[index]);
      if (Math.sqrt(numL) % 2 == 0){
        if (Math.cbrt(numL) % 2 == 0){
          return cubeSquare[index]
        }
      }
    }
  }

  const primeNum = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (primeNum) {
    for (var i = 0; i <= primeNum.length; i++) {
      for (var j = 2; j <= i; j++) {
        if (i % j === 0 && j !== i) {
          return primeNum[j];
        }
      }
    }
  }

  return "";
}
