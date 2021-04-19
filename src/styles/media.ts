import { generateMedia } from 'styled-media-query';

export const BREAKPOINT_SMALL = 768
export const BREAKPOINT_MEDIUM = 992
export const BREAKPOINT_LARGE = 1200

export const media = generateMedia({
  small: `${BREAKPOINT_SMALL}px`,
  medium: `${BREAKPOINT_MEDIUM}px`,
  large: `${BREAKPOINT_LARGE}px`
})