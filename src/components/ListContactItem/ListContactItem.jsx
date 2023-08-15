import PropTypes from 'prop-types';
import { ItemContact, ButtonDelete } from './ListContactItem-style';
import { useDispatch,   } from 'react-redux';
import { deleteContactsThunk } from 'redux/thunks';


export const ListContactItem = ({name, phone, id,}) => {
    const dispatch = useDispatch()
    
    const handleDelete = ()=>{

        dispatch(deleteContactsThunk(id))
    } 




    return (
        <>
            <ItemContact key={id}>
                {name}: {phone}
                <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
            </ItemContact>
        </>
    )
}

ListContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}