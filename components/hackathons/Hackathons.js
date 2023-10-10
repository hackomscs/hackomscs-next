import Header from 'components/shared/Header';
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Hackathons() {
  const content = [
    {
      button: "How many team members can I invite?",
      panel:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      uuid: "id1",
    },
    {
      button: "What is the maximum file upload size?",
      panel:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      uuid: "id2",
    },
    {
      button: "How do I reset my password?",
      panel:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      uuid: "id3",
    },
    {
      button: "Can I cancel my subscription?",
      panel:
        "Yes! Send us a message and we’ll process your request no questions asked.",
      uuid: "id4",
    },
    {
      button: "Do you provide additional support?",
      panel:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      uuid: "id5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    if (activeIndex === -1) setActiveIndex(index);
    else if (activeIndex !== index) setActiveIndex(index);
    else setActiveIndex(-1);
  };

  return (
    <>
      <Header title="FAQ" rightJustify givenId="faq" />
      <Accordion allowZeroExpanded className="w-full" preExpanded={["id2"]}>
        {content.map((contenido, indx) => (
          <AccordionItem
            key={indx}
            id={contenido.uuid}
            uuid={contenido.uuid}
            className="border-b-[1px] py-[15.7px]"
          >
            <AccordionItemHeading className="" onClick={() => handleClick(indx)}>
              <AccordionItemButton className="flex justify-between items-center">
                <h1
                  className={
                    "text-[#4A4B5E] text-lg hover:text-[#F47C57] " +
                    `${activeIndex === indx ? "font-bold" : "font-normal"
                    }`
                  }
                >
                  {contenido.button}
                </h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="pt-[5px] ">
              <p className="text-[#787887]">{contenido.panel}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>

    </>
  )
}