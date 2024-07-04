type Mods = Record<string, boolean | string>;

export function classNames(className: string, mods: Mods, additional: string[]): string {
  const modsClassNames = Object.keys(mods).filter(key => mods[key]);

  return [className, ...additional, ...modsClassNames].join(' ')
}