// Pass the repo name
const recipe = "create-a-marketplace";

//Generate paths of each code file to render
const contractPath = `${recipe}/cadence/contract.cdc`;
const transactionPath = `${recipe}/cadence/transaction.cdc`;

//Generate paths of each explanation file to render
const smartContractExplanationPath = `${recipe}/explanations/contract.txt`;
const transactionExplanationPath = `${recipe}/explanations/transaction.txt`;

export const createAMarketplace = {
  slug: recipe,
  title: "Create a Marketplace",
  createdAt: new Date(2022, 9, 14),
  author: "Flow Blockchain",
  playgroundLink:
    "https://play.onflow.org/9f2f0aee-490e-4ffb-8f42-1d1067949dee?type=account&id=84aa1c58-bb11-4d12-aab4-5de3c3d0857e&storage=none",
  excerpt:
    "Create a secondary marketplace for your NFTS using the NFT Storefront Contract.",
  smartContractCode: contractPath,
  smartContractExplanation: smartContractExplanationPath,
  transactionCode: transactionPath,
  transactionExplanation: transactionExplanationPath,
  filters: {
    difficulty: "intermediate",
  },
};
