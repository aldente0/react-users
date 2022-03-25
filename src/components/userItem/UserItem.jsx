import {Link} from 'react-router-dom'
import cl from './UserItem.module.scss'

function UserItem(props) {
    const {
        userId,
        name,
        city,
        company
    } = props

    return <div className={cl.post}>
        <div className='about'>
            <div className={cl.info}><span>ФИО:</span> {name}</div>
            <div className={cl.info}><span>город:</span> {city}</div>
            <div className={cl.info}><span>компания:</span> {company}</div>
        </div>
        <Link className={cl.link} to={'/profile/' + userId}>Подробнее</Link>

    </div>
}

export {UserItem}