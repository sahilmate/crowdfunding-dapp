import React, { useEffect, useContext, useState } from "react";

// INTERNAL IMPORT
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";
const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getuserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);
  const [allcampaign, setAllCampaign] = useState([]);
  const [userCampaign, setUserCampaign] = useState([]);

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getuserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    };
  }, []);


  //DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      
      <Card 
        title="All Listed Campaigns"
        allcampaign={allcampaign} 
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card 
        title="Your Created Campaigns"
        allcampaign={userCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}         
        />
      )}
    </>
  );
};

export default index;
