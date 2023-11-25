import React, { useState } from 'react';

import Header from '../../components/shared/Header';
import styled from 'styled-components';
import CONSTRAINTS from '../../constants/constraints';

import 'react-accessible-accordion/dist/fancy-example.css';


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Container = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  margin-bottom: 50px;

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
  }
`

const AccordionHeading = styled(AccordionItemHeading)`
  color: var(--subheader);
`

export default function Hackathons() {
  const content = [
    {
      button: 'What is hackOMSCS?',
      panel:
        'HackOMSCS is a 24-hour virtual hackathon taking place in January 2024 (Date TBD). HackOMSCS is free to register and participate. It is entirely student run, and open to anyone!',
      uuid: 'id1',
    },
    {
      button: 'What is a hackathon?',
      panel:
        'Hackathons are often described as a hybrid between a career fair and a science fair. A creative community of programmers - from novices to experienced - come together for 24 hours to make amazing projects. The projects are then judged by tech professionals from industry and academia, and winners receive awesome prizes!',
      uuid: 'id2',
    },
    {
      button: 'It\'s My First Hackathon. Should I apply?',
      panel:
        'Yes! Experience is not required. Hackathons are open creative and learning environments for everyone. There is also a competition category for first hack!',
      uuid: 'id3',
    },
    {
      button: 'I don\'t know anyone. How can I join a team?',
      panel:
        'No worries! We will have a team formation event at the start of the hackathon. The maxiumum number is 4 people per team - but you can hack solo if you\'d like!',
      uuid: 'id4',
    },
    {
      button: 'I have more questions...',
      panel:
        'Please email us at support@hackomscs.com',
      uuid: 'id10',
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
      <Header title="Frequently Asked Questions" givenId="faq" />
      <Container>
        <Accordion allowMultipleExpanded allowZeroExpanded className="w-full">
          {content.map((contenido, indx) => (
            <AccordionItem
              key={indx}
              id={contenido.uuid}
              uuid={contenido.uuid}
              className="border-b-[1px] py-[15.7px]"
            >
              <AccordionHeading className="" onClick={() => handleClick(indx)}>
                <AccordionItemButton className="flex justify-between items-center">
                  <h1
                    className={
                      'text-[#4A4B5E] text-lg hover:text-[#F47C57] ' +
                    `${activeIndex === indx ? 'font-bold' : 'font-normal'
                    }`
                    }
                  >
                    {contenido.button}
                  </h1>
                </AccordionItemButton>
              </AccordionHeading>
              <AccordionItemPanel className="pt-[5px] ">
                <p className="text-[#787887]">{contenido.panel}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>

    </>
  )
}