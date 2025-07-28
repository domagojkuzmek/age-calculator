import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { media } from "../../styles/media";

export const InputStyles = styled.input.attrs({ type: 'number' })`
    width: 88px;
    height: 46px;
    border: 2px solid ${colors.grey["grey-200"]};
    border-radius: 8px;
    padding: 16px 8px;


    // Text Preset 4
    font-size: ${typography.fontSize["fs-20"]};
    font-family: ${typography.fonts.primary};
    font-weight: ${typography.fontWeight.extraBold};
    line-height: ${typography.lineHeight.height150};
    letter-spacing: ${typography.letterSpacing.normal};
    color: ${colors.grey["grey-500"]};

      &:focus {
        outline: none;
    }

    @media screen and (${media.tablet}) {
        width: 170px;  
        height: 64px; 
    };
    @media screen and (${media.desktop}) {
        width: 160px;   
    };`;