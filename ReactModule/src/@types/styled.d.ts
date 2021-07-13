import 'styled-components';
import { ColorsType } from 'src/types/colorsType';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
