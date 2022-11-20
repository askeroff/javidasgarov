import styled from 'styled-components';

interface CenteredFlexProps {
    justifyContent?: string;
}

const CenteredFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: CenteredFlexProps) => (props.justifyContent ? props.justifyContent : 'flex-start')};
`;

export default CenteredFlex;
