import { css } from 'styled-components';

// btn + btn--outline
export const BtnOutline = css`
    display: block;
    cursor: pointer;
    padding: 0.8em 1.4em;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;
    transition: transform 0.2s ease-in-out;

    color: var(--clr-primary);
    border: 2px solid var(--clr-primary);
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        background-color: var(--clr-primary);
        right: 100%;
        bottom: 0;
        left: 0;
        top: 0;
        z-index: -1;
        transition: right 0.2s ease-in-out;
    }

    &:hover, &:focus{
        color: var(--clr-bg);
    }

    &:hover:before, &:focus:before {
        right: 0;
    }
`;

// btn + btn--plain
export const BtnPlain = css`
    display: block;
    cursor: pointer;
    padding: 0.8em 1.4em;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;
    transition: transform 0.2s ease-in-out;

    text-transform: initial;
    background-color: var(--clr-bg-alt);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border: 0;

    &:hover {
        transform: translateY(-4px);
    }
`;

// btn + btn--icon
export const BtnIcon = css`
    display: block;
    cursor: pointer;
    padding: 0.8em 1.4em;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;
    transition: transform 0.2s ease-in-out;

    padding: 0;

    &:focus {
        color: var(--clr-primary);
    }
    &:hover {
        color: var(--clr-primary);
    }

    &:active {
        transform: translateY(-5px);
    }
`;
// link
export const Link = css`
    text-decoration:none;
    color: var(--clr-primary);
    padding: 0 0 0.3em 0;
    position: relative;

    &:hover {
        color: var(--clr-primary);
    }

    &::before {
        content: '';
        display: inline;
        width: 0%;
        height: 0.2em;
        position: absolute;
        bottom: 0;
        background-color: var(--clr-primary);
        transition: width 0.2s ease-in;
    }

    &:hover::before,
    &:focus::before {
        width: 100%;
    }
`;
