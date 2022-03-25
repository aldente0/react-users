import {UserItem} from '../userItem/UserItem'

function UserList(props) {
    const {
        users = [],
    } = props
    return <>
        {
            users.map(user => (
                <UserItem
                key={user.id}
                userId={user.id}
                company={user.company.name}
                name={user.name}
                city={user.address.city}
                />
            ))
        }
    </>
}

export {UserList}