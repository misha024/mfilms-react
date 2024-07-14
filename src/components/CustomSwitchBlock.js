import '../styles/components/CustomSwitchBlock.css';

const CustomSwitchBlock = (keys) => {
    const {name, checked, disabled, callback} = keys
    return (
        <div className="c-switch-block">
            <input id={name}
                   type="checkbox"
                   disabled={disabled}
                   defaultChecked={checked}
                   onChange={e => callback(e.target.getAttribute("id"), e.target.checked)}
            />
            <label htmlFor={name}></label>
        </div>
    )
}

export {CustomSwitchBlock}