export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  setUserSetting(name, value) {
    const allowedValues = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };

    if (allowedValues[name] && allowedValues[name].includes(value)) {
      this.userSettings.set(name, value);
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
