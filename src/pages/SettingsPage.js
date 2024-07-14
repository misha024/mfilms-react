import '../styles/SettingsPage.css';
import {CustomSwitchBlock} from "../components/CustomSwitchBlock";
import {loadSettings, saveSettings} from "../utils/SettingsManager";
import {CustomRadioBlock} from "../components/CustomRadioBlock";

const switchChangeHandler = (name, value) => saveSettings({name: name, value: value})
const radioChangeHandler = (name, targetInput) => {
    // Off other inputs
    const container = targetInput.closest(".c-radio-block")
    const allInputs = container.querySelectorAll("input[type=radio]")
    allInputs.forEach(input => input.checked = false)
    targetInput.checked = true
    // save settings
    const value = Number(targetInput.value)
    saveSettings({name, value})
}

const SettingsPage = () => {
    const {
        show_poster,
        show_name,
        show_description,
        quantity_card
    } = loadSettings()

    return (
        <>
            <h1 className="page-name">Настройки</h1>
            <div className="settings-container">
                <div className="setting">
                    <h4 className="setting-title">Показывать постер</h4>
                    <CustomSwitchBlock name={"show_poster"} checked={show_poster} callback={switchChangeHandler} />
                </div>
                <div className="setting">
                    <h4 className="setting-title">Показывать имя</h4>
                    <CustomSwitchBlock name={"show_name"} checked={show_name} callback={switchChangeHandler} />
                </div>
                <div className="setting">
                    <h4 className="setting-title">Показывать описание</h4>
                    <CustomSwitchBlock name={"show_description"} checked={show_description} callback={switchChangeHandler} />
                </div>
                <div className="setting">
                    <h4 className="setting-title">Кол-во карточек</h4>
                    <CustomRadioBlock name={"quantity_card"}
                                      optionsValue={[50, 100, 150, 200, 250, 300]}
                                      checked={quantity_card}
                                      disabled={[300]}
                                      callback={radioChangeHandler}
                    />
                </div>
            </div>
        </>
    );
}

export default SettingsPage