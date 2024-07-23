import "@/styles/globals.css";

// INTERNAL IMPORT
import {NavBar , Footer} from "../Components";
import {CrowdFundingProvider} from "../Context/CrowdFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
    <CrowdFundingProvider>   
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </CrowdFundingProvider>
    </>
  );
  
}

// npm run dev
// npx hardhat node
// npx hardhat run --network localhost scripts/deploy.js