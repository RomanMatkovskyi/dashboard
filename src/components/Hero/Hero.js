import React from "react";
import {
  HeroSection,
  Container,
  MainTitle,
  Span,
  UserEmail,
  UserPass,
  SubmitButton,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <div>
          <MainTitle>
            Your medication, delivered Say goodbye to all{" "}
            <Span>your healthcare</Span> worries with us
          </MainTitle>
          <form>
            <UserEmail type="email" label="Email address" />
            <UserPass type="password" label="Password" />
            <SubmitButton type="submit">Log In</SubmitButton>
          </form>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Hero;
