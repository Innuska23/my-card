import { StyledBtn } from "../../styles/Button.styled";
import { BoxCard, ButtonWrapper, HeaderBox, ImageBox, ParagraphBox, WrapperCard } from "./Card.styled";

function Card() {
    return (
        <WrapperCard>
            <BoxCard>
                <ImageBox alt="Desert" src={require('../../assets/images/img.jpg')} />
                <HeaderBox>Headline</HeaderBox>
                <ParagraphBox>Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit molestie ornare in venen.</ParagraphBox>
                <ButtonWrapper>
                    <StyledBtn btnType={'primary'}>See more</StyledBtn>
                    <StyledBtn btnType={'secondary'}>Save</StyledBtn>
                </ButtonWrapper>
            </BoxCard>
            <BoxCard>
                <ImageBox alt="Desert" src={require('../../assets/images/img.jpg')} />
                <HeaderBox>Headline</HeaderBox>
                <ParagraphBox>Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit molestie ornare in venen.</ParagraphBox>
                <ButtonWrapper>
                    <StyledBtn btnType={'primary'}>See more</StyledBtn>
                    <StyledBtn btnType={'secondary'}>Save</StyledBtn>
                </ButtonWrapper>
            </BoxCard>
            <BoxCard>
                <ImageBox alt="Desert" src={require('../../assets/images/img.jpg')} />
                <HeaderBox>Headline</HeaderBox>
                <ParagraphBox>Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit molestie ornare in venen.</ParagraphBox>
                <ButtonWrapper>
                    <StyledBtn btnType={'primary'}>See more</StyledBtn>
                    <StyledBtn btnType={'secondary'}>Save</StyledBtn>
                </ButtonWrapper>
            </BoxCard>
            <BoxCard>
                <ImageBox alt="Desert" src={require('../../assets/images/img.jpg')} />
                <HeaderBox>Headline</HeaderBox>
                <ParagraphBox>Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit molestie ornare in venen.</ParagraphBox>
                <ButtonWrapper>
                    <StyledBtn btnType={'primary'}>See more</StyledBtn>
                    <StyledBtn btnType={'secondary'}>Save</StyledBtn>
                </ButtonWrapper>
            </BoxCard>
        </WrapperCard>
    )
}

export default Card;