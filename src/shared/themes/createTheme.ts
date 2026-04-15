import { BaseTheme } from '../types';

const createTheme = <T extends BaseTheme>(themeObject: T): T => themeObject;

export default createTheme;
