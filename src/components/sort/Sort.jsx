import {Button} from '../../UI/button/Button'
import cl from './Sort.module.scss'
import { useBtn } from '../../hooks/useBtn'

function Sort({users, setUsers}) {
    const cityBtn = useBtn({
        setUsers,
        users,
        value: 'по городу',
        type: 'CITY',
    });
    const companyBtn = useBtn({
        setUsers,
        users,
        value: 'по компании',
        type: 'COMPANY',
    });

    return <div className={cl.sort}>
        <h2 className={cl.sort__title}>Сортировка</h2>
        <Button handleClick={cityBtn.handleClick}>{cityBtn.value}</Button>
        <Button handleClick={companyBtn.handleClick}>{companyBtn.value}</Button>
    </div>
}

export {Sort}