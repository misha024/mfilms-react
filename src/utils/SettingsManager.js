export const saveSettings = (settings) => {
    const settingsJson = loadSettings() || {}
    settingsJson[settings['name']] = settings['value']
    localStorage.setItem('settings', JSON.stringify(settingsJson));
}

const defaultSettings = {
    show_poster: true,
    show_name: true,
    show_description: true,
    quantity_card: 50
}

export const loadSettings = () => {
    const settingsJSON = localStorage.getItem('settings');
    return settingsJSON ? JSON.parse(settingsJSON) : defaultSettings
}