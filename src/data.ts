export interface MultipleChoiceQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option (0-3)
}

export const originalQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: "The active form of vitamin B1 is:",
    options: ["FMN", "TPP", "NADP", "CoA"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Thiamine pyrophosphate is mainly required for:",
    options: ["Carboxylation reactions", "Oxidative decarboxylation reactions", "Hydrolysis of peptide bonds", "Blood clotting factor activation"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Deficiency of thiamine causes:",
    options: ["Scurvy", "Beriberi", "Pellagra", "Rickets"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "The vitamin whose active forms are FMN and FAD is:",
    options: ["B1", "B2", "B3", "B5"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "FAD acts mainly with which group of enzymes?",
    options: ["Dehydrogenases", "Carboxylases", "Hydrolases", "Kinases"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "FADH₂ oxidation in electron transport chain produces according to the sheet:",
    options: ["1 ATP", "2 ATP", "3 ATP", "4 ATP"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Niacin is converted into:",
    options: ["FMN and FAD", "NAD and NADP", "TPP and THF", "CoA and Biocytin"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "Deficiency of niacin causes all EXCEPT:",
    options: ["CNS disturbances", "Dermatitis", "Fatigue", "Rickets"],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "Pantothenic acid is converted into:",
    options: ["Coenzyme A", "Tetrahydrofolate", "Methylcobalamin", "Pyridoxal phosphate"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "The active site of Coenzyme A is:",
    options: ["Terminal phosphate group", "Terminal sulphhydryl group", "Adenine ring", "Ribose sugar"],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: "Coenzyme A is mainly concerned with transfer of:",
    options: ["Amino groups", "Acyl groups", "One carbon units", "Oxygen atoms"],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "Vitamin B5 deficiency may cause:",
    options: ["Atrophy of adrenal cortex", "Night blindness", "Xerophthalmia", "Heavy menstrual bleeding"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Biotin becomes active when it binds with lysine residue forming:",
    options: ["Biocytin", "Calcitriol", "Retinal", "NADH"],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Biotin acts as coenzyme for:",
    options: ["Decarboxylases", "Carboxylases", "Reductases only", "Transaminases"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "Pyruvate carboxylase converts pyruvate into:",
    options: ["Acetyl CoA", "Oxaloacetate", "Lactate", "Alanine"],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "Deficiency of biotin causes:",
    options: ["Dermatitis, alopecia, peripheral neuritis", "Rickets and osteomalacia", "Gum bleeding and anemia only", "Bleeding disorders"],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "Folic acid is converted by dihydrofolate reductase into:",
    options: ["THF", "TPP", "FMN", "CoA"],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: "THF is important because it transfers:",
    options: ["Fatty acids", "One carbon units", "Calcium ions", "Phosphate only"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "Folic acid is required for synthesis of:",
    options: ["Purine and pyrimidine bases", "Bile salts", "Steroid hormones only", "Collagen only"],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "Deficiency of folic acid causes:",
    options: ["Megaloblastic anemia", "Pernicious anemia", "Beriberi", "Pellagra"],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "Active forms of vitamin B12 include:",
    options: ["FMN and FAD", "NAD and NADP", "Deoxyadenosylcobalamin and methylcobalamin", "Retinol and retinal"],
    correctAnswer: 2,
  },
  {
    id: 22,
    question: "Vitamin B12 is required for which reaction?",
    options: ["Homocysteine → Methionine", "Pyruvate → Oxaloacetate", "Acetyl CoA → Malonyl CoA", "Succinate → Fumarate"],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "Vitamin B12 deficiency causes:",
    options: ["Pernicious anemia", "Scurvy", "Rickets", "Night blindness"],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "The only water-soluble vitamin stored in liver is:",
    options: ["Vitamin C", "Vitamin B1", "Vitamin B12", "Vitamin B2"],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "Vitamin C exists in reduced active form called:",
    options: ["Dehydroascorbic acid", "L-ascorbic acid", "Retinoic acid", "Calcitriol"],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "Vitamin C activates hydroxylases because it acts as:",
    options: ["Oxidizing agent", "Reducing agent", "Acyl carrier", "Calcium carrier"],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "Vitamin C is essential for synthesis of:",
    options: ["Collagen and epithelial cells", "Clotting factors II, VII, IX, X", "LDL only", "Bile salts only"],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "Deficiency of vitamin C causes:",
    options: ["Scurvy", "Beriberi", "Pellagra", "Osteomalacia"],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: "Which vitamin facilitates intestinal absorption of iron?",
    options: ["Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K"],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: "Fat-soluble vitamins include all EXCEPT:",
    options: ["A", "D", "E", "C"],
    correctAnswer: 3,
  },
  {
    id: 31,
    question: "Vitamins A, K and E are chemically:",
    options: ["Steroid compounds", "Terpene lipids", "Proteins", "Sugar acids"],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: "Vitamin D is chemically:",
    options: ["Terpene lipid", "Steroid compound", "Protein", "Nucleic acid"],
    correctAnswer: 1,
  },
  {
    id: 33,
    question: "Deficiency of vitamin A causes all EXCEPT:",
    options: ["Night blindness", "Xerophthalmia", "Impaired immunity", "Beriberi"],
    correctAnswer: 3,
  },
  {
    id: 34,
    question: "Retinoic acid is used in treatment of:",
    options: ["Acne", "Rickets", "Scurvy", "Pernicious anemia"],
    correctAnswer: 0,
  },
  {
    id: 35,
    question: "The active form of vitamins D2 and D3 is:",
    options: ["Retinal", "Calcitriol", "THF", "Biocytin"],
    correctAnswer: 1,
  },
  {
    id: 36,
    question: "Calcitriol mainly facilitates absorption of:",
    options: ["Iron", "Calcium", "Copper", "Sodium"],
    correctAnswer: 1,
  },
  {
    id: 37,
    question: "Deficiency of vitamin D causes:",
    options: ["Rickets in children and osteomalacia in adults", "Beriberi only", "Scurvy only", "Pernicious anemia"],
    correctAnswer: 0,
  },
  {
    id: 38,
    question: "Vitamin E is mainly:",
    options: ["Antioxidant protecting membranes", "Coenzyme for carboxylases", "Clotting factor activator", "One carbon carrier"],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: "Deficiency of vitamin E causes all EXCEPT:",
    options: ["Ataxia", "Myopathy", "Retinopathy", "Xerophthalmia"],
    correctAnswer: 3,
  },
  {
    id: 40,
    question: "Vitamin K is essential for activation of clotting factors through:",
    options: ["Hydroxylation of proline", "Carboxylation of glutamate residues", "Oxidative decarboxylation", "Transketolation"],
    correctAnswer: 1,
  }
];

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
