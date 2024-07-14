import '../styles/components/CustomRadioBlock.css';

const CustomRadioBlock = (keys) => {
    const {name, optionsValue, checked, disabled, callback} = keys
    return (
    <div className="c-radio-block">
        {optionsValue.map(value => {
            const isChecked = value === checked
            const isDisabled = disabled.includes(value)
            const id = `c-radio-${value}`
            return (
                <div className="c-radio">
                    <input type="radio"
                           id={id}
                           value={value}
                           disabled={isDisabled}
                           defaultChecked={isChecked}
                           onChange={e => callback(name, e.target)}
                    />
                    <label htmlFor={id}>{value}</label>
                </div>
            )
        })}
    </div>
    )
}

export {CustomRadioBlock}