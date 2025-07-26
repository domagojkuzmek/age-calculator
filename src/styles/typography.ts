import styled from "styled-components";
import { colors } from "./colors";

export const typography = {
    fonts: {
        primary: '"Poppins", sans-serif'
    },

    fontSize: {
        "fs-12": '0.75rem',
        "fs-14": '0.875rem',
        "fs-20": '1.25rem',
        "fs-32": '2rem',
        "fs-56": '3.5rem'
    },

    fontWeight: {
        normal: 100,
        bold: 400,
        extraBold: 900
    },

    lineHeight: {
        "height110": 1.1,
        "height150": 1.5,
    },

    letterSpacing: {
        minus: '-2px',
        normal: '0px',
        plus: '4px'
    },

    fontStyle: {
        "normal": "normal",
        "italic": "italic"
    }

}

// Typography style guide

export const TextPreset6 = styled.p`
    font-size: ${typography.fontSize["fs-12"]};
    font-family: ${typography.fonts.primary};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.height150};
    letter-spacing: ${typography.letterSpacing.plus};
    color: ${colors.grey["grey-500"]}
    `;
    
export const TextPreset4 = styled.input.attrs({ type: 'number' })`
    font-size: ${typography.fontSize["fs-20"]};
    font-family: ${typography.fonts.primary};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.height150};
    letter-spacing: ${typography.letterSpacing.normal};
    color: ${colors.grey["grey-500"]}
`;