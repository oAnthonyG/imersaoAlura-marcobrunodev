import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
:root {
  --color-black-dark: #000;
  --color-gray-light: #f5f5f5;
  --color-primary-medium: #d32727;
  --color-black-medium: rgba(0, 0, 0, 0.6);
  --color-gray100: #e4e4e4;
  --color-blue100: #6bd1ff;

  --color-green100: #9cd33b;
  --color-green200: #9cd33b;
  --color-green300: #00c86f;

  --color-orange100: #ffba05;
  --color-orange200: #ff8c2a;

  --color-pink100: #dc6ebe;

  --color-purple100: #6b5be2;

  --color-pixelart: #f91c24;
}
`;

export default Colors;
