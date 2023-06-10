import Settings from '../app';

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  it('should set user setting', () => {
    settings.setUserSetting('theme', 'light');
    expect(settings.settings.get('theme')).toEqual('light');
  });

  it('should not set invalid user setting', () => {
    settings.setUserSetting('theme', 'invalid-value');
    expect(settings.settings.get('theme')).toEqual('dark');
  });

  it('should return settings with default and user settings', () => {
    settings.setUserSetting('theme', 'light');
    settings.setUserSetting('music', 'rock');

    const expected = new Map([
      ['theme', 'light'],
      ['music', 'rock'],
      ['difficulty', 'easy'],
    ]);

    expect(settings.settings).toEqual(expected);
  });
});
