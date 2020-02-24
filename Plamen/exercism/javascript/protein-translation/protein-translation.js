//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {

  const proteins = [];

  if (rna) {
    for (let i = 0; i < rna.length; i += 3) {
      let current = rna.substring(i, i + 3);
      switch (current) {
        case "AUG":
          proteins.push("Methionine");
          break;
        case "UUU":
        case "UUC":
          proteins.push("Phenylalanine");
          console.log(proteins);
          break;
        case "UUA":
        case "UUG":
          proteins.push("Leucine");
          break;
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
          proteins.push("Serine");
          break;
        case "UAU":
        case "UAC":
          proteins.push("Tyrosine");
          break;
        case "UGU":
        case "UGC":
          proteins.push("Cysteine");
          break;
        case "UGG":
          proteins.push("Tryptophan");
          break;
        case "UAA":
        case "UAG":
        case "UGA":
          return proteins;
        default:
          throw new Error('Invalid codon');

      }
    }
  }
  return proteins;
};