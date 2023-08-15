// import PropTypes from 'prop-types';
// import { ListContactItem } from "components/ListContactItem/ListContactItem"
import { List } from './ListContact-style';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ListContactItem } from 'components/ListContactItem/ListContactItem';


export const ListContact = ()=>{

const contacts = useSelector(selectContacts)

const filter = useSelector(selectFilter)


const handleFil = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
    
        return (
            <>
                <List>
                    {handleFil.map(({ id, name, phone }) =>
                        <ListContactItem
                        key={id}
                        id={id}
                        name={name}
                        phone={phone}
                        /> )}
                </List>
            </>
        )
    }


// ListContact.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     })),
//     deleteContact:PropTypes.func.isRequired
// }