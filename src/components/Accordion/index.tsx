import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  IconWrapper,
} from "./styles";
import { AccordionProps } from "./interface";

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else if (activeIndex !== null) {
      setActiveIndex(null);
      setTimeout(() => {
        setActiveIndex(index);
      }, 400);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <AccordionContainer data-aos="fade-up" data-aos-duration="600">
      {items?.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <AccordionItem key={index}>
            <AccordionHeader isOpen={isOpen} onClick={() => toggle(index)}>
              {item.title}
              <IconWrapper isOpen={isOpen}>
                <FiPlus />
              </IconWrapper>
            </AccordionHeader>
            <AccordionContent isOpen={isOpen}>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
};
