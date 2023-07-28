import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />
        Welcome to my <br />
        web dev portfolio page
      </SectionTitle>
      <SectionText>
        As a MERN stack developer with years of experience, my mission is to
        help clients get web technology solutions that's functionally efficient
        and fit-for-purpose.
      </SectionText>
      <Button onClick={() => (window.location.href = 'https://google.com')}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
