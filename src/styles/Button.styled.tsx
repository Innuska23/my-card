import styled, { css } from 'styled-components';
import { myTheme } from './Theme.styled';

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' | 'secondary'
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: transparent;
    border-color: 2px solid transparent;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    cursor: pointer;

    ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
        color: ${myTheme.buttons.primary};
        background-color: ${myTheme.buttons.secondary};

        &:hover{
            color: ${myTheme.buttons.secondary};
            background-color: ${myTheme.buttons.primary};
            border: 2px solid ${myTheme.buttons.secondary};
                }
    `}
    ${props => props.btnType === 'secondary' && css<StyledBtnPropsType>`
            color: ${myTheme.buttons.secondary};
            border: 2px solid ${myTheme.buttons.secondary};

            &:hover{
            color: ${myTheme.buttons.primary};
            background-color: ${myTheme.buttons.secondary};
            border: 2px solid transparent;
                }
    `}
`

