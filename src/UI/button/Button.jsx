import cl from './Button.module.scss'

function Button(props) {
    const {
        isSendBtn,
        handleClick
    } = props

    return <span
    className={isSendBtn ? cl.sendBtn : cl.btn}
    onClick={() => handleClick()} >{props.children}</span>
}

export {Button}