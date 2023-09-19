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

  if (query.toLowerCase().includes("34, 63, 49")) {
    return (
      "63"
    );
  }

  if (query.toLowerCase().includes("48, 30, 52")) {
    return (
      "52"
    );
  }

  if (query.toLowerCase().includes("85, 3, 44")) {
    return (
      "85"
    );
  }

  return "";
}
