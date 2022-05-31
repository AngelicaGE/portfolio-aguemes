import styled from 'styled-components'
//import styledNative from 'styled-components/native'


export const StyledParagraphButton = styled.p`
    @media(min-width:300px) {
        font-size: 1rem;
    }

    @media(min-width:768px) {
        font-size: 2rem;

    }
    @media(min-width:1024px) {
        font-size: 2rem;

    }
`;

export const StyledAnchor = styled.a`
    text-decoration:none;
    cursor: pointer;

    @media(min-width:300px) {
        font-size: 1rem;
    }

    @media(min-width:768px) {
        font-size: 2rem;

    }
    @media(min-width:1024px) {
        font-size: 2rem;

    }
`;

export const StyledNavLink = styled.ul`
    a{
        text-decoration:none;
        cursor: pointer;
        color: white;
    }
    .active{
        text-decoration:underline;
    }


    @media(min-width:300px) {
        a{
            font-size: 1rem;
        }
    }

    @media(min-width:768px) {
        a{
            font-size: 2rem;
        }
    }
    @media(min-width:1024px) {
        a{
            font-size: 2rem;
        }
    }
`;