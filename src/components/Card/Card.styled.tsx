import styled, { css } from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

export const WrapperCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const BoxCard = styled.div`
    width: 300px;
    height: 350px;
    padding: 10px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background-color: ${myTheme.colors.secondary};
    border-radius: 15px;
`

export const HeaderBox = styled.h1`
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin-top: 20px;
`

export const ImageBox = styled.img`
    background-image: url('../../images/img.jpg');
    border-radius: 10px;
    width: 280px;
    height: 170px;
`

export const ParagraphBox = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
    margin-top: 20px;
`

export const ButtonWrapper = styled.div`
    margin-top: 19px;
    display: flex;
    gap: 12px;
`