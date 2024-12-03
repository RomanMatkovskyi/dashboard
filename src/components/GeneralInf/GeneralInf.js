import sprite from "../../images/sprite.svg";
import {
  SectionWrapper,
  Card,
  NameWrapper,
  CardName,
  CarQuantity,
} from "./GeneralInf.styled";

const GeneralInf = () => {
  return (
    <SectionWrapper>
      <Card>
        <NameWrapper>
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#streamline_finance`}></use>
          </svg>
          <CardName>All products</CardName>
        </NameWrapper>
        <CarQuantity>8,430</CarQuantity>
      </Card>
      <Card>
        <NameWrapper>
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#streamline_finance`}></use>
          </svg>
          <CardName>All suppliers</CardName>
        </NameWrapper>
        <CarQuantity>211</CarQuantity>
      </Card>
      <Card>
        <NameWrapper>
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#users`}></use>
          </svg>
          <CardName>All Customers </CardName>
        </NameWrapper>
        <CarQuantity>140</CarQuantity>
      </Card>
    </SectionWrapper>
  );
};

export default GeneralInf;
