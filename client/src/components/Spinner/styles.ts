import styled, { keyframes, css } from 'styled-components';
import starwarslogo from '../../resources/starwarslogo.png';

export type StyleProps = {
  size?: 'small' | 'large';
};

const SIZE = {
  small: '40',
  large: '80',
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
`;

export const SpinElement = styled.div<StyleProps>`
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
  background: url(${starwarslogo});
  background-size: 70px;
  background-position: center;

  ${({ size }) => css`
    width: ${SIZE[size || 'small']}px;
    height: ${SIZE[size || 'small']}px;
  `};
`;
