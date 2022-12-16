import styled from 'styled-components';

interface CenteredFlexProps {
    justifyContent?: string;
    flexDirection?: string;
}

const CenteredFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props: CenteredFlexProps) => (props.flexDirection ? props.flexDirection : 'initial')};
  justify-content: ${(props: CenteredFlexProps) => (props.justifyContent ? props.justifyContent : 'flex-start')};
`;

export default CenteredFlex;
