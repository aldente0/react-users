import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { getUser } from "../../api"
import { useBtn } from "../../hooks/useBtn";
import {Button} from '../../UI/button/Button'
import { Form } from "../../components/form/Form";
import cl from './UserProfile.module.scss'
import { useInput } from "../../hooks/useInput";

function UserProfile() {
    const {userId} = useParams()
    const name = useInput('', 'text', {
        minLength: 2
    })
    const userName = useInput('', 'text', {
        minLength: 2
    })
    const email = useInput('', 'email', {
        isEmail: true
    })
    const phone = useInput('', 'tel', {
        isPhone: true
    })
    const street = useInput('', 'text', {
        minLength: 3
    })
    const city = useInput('', 'text', {
        minLength: 3
    })
    const zipcode = useInput('', 'text', {
        isZipcode: true
    })
    const website = useInput('', 'url', {
        isWebsite: true
    })
    const comments = useInput('', 'text', {});
    const [formDisabled, setFormDisabled] = useState(true);
    const [formValid, setFormValid] = useState(false);
    const redactBtn = useBtn({
        value: 'Редактировать',
        type: 'INPUTS',
        formDisabled,
        setFormDisabled
    });

    const sendForm = () => {
        const obj = {
            name: name.value,
            userName: userName.value,
            email: email.value,
            street: street.value,
            city: city.value,
            zipcode: zipcode.value,
            phone: phone.value,
            website: website.value,
            comments: comments.value
        }

        console.log(JSON.stringify(obj))
    }

    useEffect(() => {
        getUser(userId).then(data => {
            name.setValue(data.name)
            userName.setValue(data.username)
            email.setValue(data.email)
            street.setValue(data.address.street)
            city.setValue(data.address.city)
            zipcode.setValue(data.address.zipcode)
            phone.setValue(data.phone)
            website.setValue(data.website)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    useEffect(() => {
        if (!name.isInvalidInput && !userName.isInvalidInput && !email.isInvalidInput && !street.isInvalidInput && !city.isInvalidInput && !zipcode.isInvalidInput && !phone.isInvalidInput && !website.isInvalidInput) {
            setFormValid(true);
        } else {
            setFormValid(false)
        }
    }, [name.isInvalidInput,
        userName.isInvalidInput,
        email.isInvalidInput,
        street.isInvalidInput,
        zipcode.isInvalidInput,
        phone.isInvalidInput,
        website.isInvalidInput,
        city.isInvalidInput])

    return <div className={cl.profile}>
        <div className={cl.textAndRedact}>
            <h2>Профиль пользователя</h2>
            <Button handleClick={redactBtn.handleClick}>{redactBtn.value}</Button>
        </div>
        <Form
        name={name}
        userName={userName}
        email={email}
        street={street}
        city={city}
        zipcode={zipcode}
        phone={phone}
        website={website}
        comments={comments}
        formValid={formValid}
        formDisabled={formDisabled}></Form>
        <div className={cl.sendBtnWrapper}>
            <button className={cl.sendBtn} onClick={() => sendForm()} disabled={formDisabled}>
                Отправить
            </button>
        </div>
        
    </div>
}

export {UserProfile}