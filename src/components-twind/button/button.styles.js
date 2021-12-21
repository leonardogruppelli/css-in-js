import { apply } from 'twind/css';

export const __button = ({ secondary, tertiary, expanded }) => {
  const background = secondary
    ? 'secondary'
    : tertiary
      ? 'tertiary'
      : 'primary';

  return apply`
    inline-flex
    px-6 py-4
    bg-${background}
    rounded
    text-base
    text-white
    uppercase
    transform
    scale-${expanded ? '110' : '100'}
    transition-transform
  `;
}