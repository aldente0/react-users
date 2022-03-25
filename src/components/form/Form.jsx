import cl from './Form.module.scss'
import {FormGroup} from '../formGroup/FormGroup'

function Form(props) {

    const {
        name,
        userName,
        email,
        street,
        city,
        zipcode,
        phone,
        website,
        comments,
        formDisabled,
    } = props

    return <div className={cl.form}>
        <FormGroup input={name} formDisabled={formDisabled}>Name</FormGroup>
        <FormGroup input={userName} formDisabled={formDisabled}>User name</FormGroup>
        <FormGroup input={email} formDisabled={formDisabled}>E-mail</FormGroup>
        <FormGroup input={street} formDisabled={formDisabled}>Street</FormGroup>
        <FormGroup input={city} formDisabled={formDisabled}>City</FormGroup>
        <FormGroup input={zipcode} formDisabled={formDisabled}>Zip code</FormGroup>
        <FormGroup input={phone} formDisabled={formDisabled}>Phone</FormGroup>
        <FormGroup input={website} formDisabled={formDisabled}>Website</FormGroup>
        <FormGroup input={comments} formDisabled={formDisabled} isTextArea={true}>Comments</FormGroup>
        
    </div>
}

export {Form}