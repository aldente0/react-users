import cl from './UsersPage.module.scss'
import {UserList} from '../../components/userList/UserList'
import { Preloader } from '../../UI/preloader/Preloader';

function UsersPage({users, setUserId}) {
    return <div className={cl.users}>
        <h1 className={cl.users__title}>Список пользователей</h1>
        {
            users.length ? <UserList users={users} setUserId={setUserId} /> : <Preloader/>
        }
    </div>
}

export {UsersPage}