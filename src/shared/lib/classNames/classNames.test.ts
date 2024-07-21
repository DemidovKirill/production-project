import { classNames } from './classNames';

describe('classNames', () => {
  test('classNames default', () => {
    expect(classNames('className')).toBe('className');
  });

  test('classNames additional class', () => {
    expect(
      classNames('className', {}, ['class-one', 'class-two']),
    )
      .toBe('className class-one class-two');
  });

  test('classNames mods --all-true class', () => {
    const expected = 'className class-one class-two hovered selected';
    expect(
      classNames(
        'className',
        { hovered: true, selected: true },
        ['class-one', 'class-two'],
      ),
    )
      .toBe(expected);
  });

  test('classNames mods --some-false class', () => {
    expect(
      classNames(
        'className',
        { hovered: true, selected: false },
        ['class-one', 'class-two'],
      ),
    )
      .toBe('className class-one class-two hovered');
  });

  test('classNames mods --some-undefined class', () => {
    expect(
      classNames(
        'className',
        { hovered: true, selected: undefined },
        ['class-one', 'class-two'],
      ),
    )
      .toBe('className class-one class-two hovered');
  });
});
