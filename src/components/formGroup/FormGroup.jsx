import cl from './FormGroup.module.scss'

function FormGroup(props) {
    const {
        input,
        formDisabled,
        isTextArea = false
    } = props

    return <div className={cl.formGroup}>
        <div className={cl.inputName}>{props.children}</div>
        {
            !isTextArea ? <input className={
                input.isInvalidInput ? (`${cl.input} ${cl.error}`) : cl.input
            } onChange={input.handleChange} type={input.type} value={input.value} disabled={formDisabled}/>
            : <textarea className={cl.textarea} disabled={formDisabled} ></textarea>
        }
    </div>
}
export {FormGroup}