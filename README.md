
[![Gitleaks](https://github.com/sahilmate/pledge-pulse/actions/workflows/gitleaks.yml/badge.svg)](https://gitAAhub.com/sahilmate/crowdfunding-dapp/actions/workflows/gitleaks.yml)

# Pledge Pulse

A decentralized crowdfunding platform built using Next.js, React, Hardhat, and Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Smart Contract Details](#smart-contract-details)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Pledge Pulse is a decentralized application (dApp) that allows users to create and participate in crowdfunding campaigns using the Ethereum blockchain. 

## Features

- Create and manage crowdfunding campaigns.
- Donate to campaigns.
- View campaign details and donation history.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pledge-pulse.git
   cd pledge-pulse
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Hardhat dependencies:**

   ```bash
   npx hardhat
   ```

4. **Install Tailwind CSS:**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

## Usage

### Starting the Development Server

1. **Run the Next.js development server:**

   ```bash
   npm run dev
   ```

2. **Start the Hardhat local blockchain:**

   ```bash
   npx hardhat node
   ```

3. **Deploy the smart contract to the local blockchain:**

   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```

## Deployment

To deploy the smart contract to a live network, update the Hardhat configuration with the network details and run the deployment script:

```bash
npx hardhat run --network <network-name> scripts/deploy.js
```

## Project Structure

```plaintext
pledge-pulse/
├── contracts/
│   └── Crowdfunding.sol        # Solidity contract
├── pages/
│   ├── index.js                # Main landing page
│   └── ...                     # Other Next.js pages
├── public/                     # Public assets
├── scripts/
│   └── deploy.js               # Deployment script
├── styles/
│   └── globals.css             # Global CSS file
├── tailwind.config.js          # Tailwind CSS configuration
├── hardhat.config.js           # Hardhat configuration
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

## Smart Contract Details

### Crowdfunding.sol

The Crowdfunding smart contract allows users to create and participate in crowdfunding campaigns.

#### Functions

- `createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline)`: Creates a new campaign.
- `donateToCampaign(uint256 _id)`: Allows users to donate to a campaign.
- `getDonators(uint256 _id)`: Returns the list of donators and their donations for a campaign.
- `getCampaigns()`: Returns the list of all campaigns.

### Deployment Script

**scripts/deploy.js**

This script deploys the Crowdfunding contract to the specified network.

```javascript
const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(`CrowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## Testing

### Lock.js

The test file for a sample lock contract to ensure proper deployment and functionality.

To run the tests, use the following command:

```bash
npx hardhat test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.


