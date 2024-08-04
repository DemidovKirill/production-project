type Mods = Record<string, boolean | string | undefined>;

export function classNames(className: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  const modsClassNames = Object.keys(mods).filter((key) => mods[key]);

  return [className, ...additional.filter(Boolean), ...modsClassNames].join(' ');
}
