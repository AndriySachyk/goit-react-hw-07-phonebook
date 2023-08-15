// import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Form, ButtonForm } from './FormContact-style';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContactsThunk } from 'redux/thunks';


export const FormContact = () => {


const dispatch = useDispatch()   
const contacts = useSelector(selectContacts)

  
const handleSubmit = event => {
event.preventDefault();

  const form = event.target

  const newContact = {
    name: form.elements.name.value,
    phone:form.elements.number.value,
}

if (contacts.find(
  contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  )
  ) {
    return Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
  }
  


dispatch(addContactsThunk(newContact))
  form.reset()
  
};
  




  
  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter a contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
      <label htmlFor="number">Number</label>
      <input
          type="tel"
          name="number"
          placeholder="Enter a contact number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
      <ButtonForm type="submit">Add Contact</ButtonForm>
      </Form>
    </>
)
}
    
    
    
      // handleChange = ({ target }) => {
      //   this.setState({
      //     [target.name]: target.value, 
      //   });
      // };
    
    
      // handleSubmit = event => {
      //   event.preventDefault();
    
      //   this.props.createContact({
      //     name: this.state.name,
      //     number: this.state.number,
      //   });
      //   this.setState({
      //     name: '',
      //     number: '',
      //   });
      // };
    
    
//     FormContact.propTypes = {
//       createContact: PropTypes.func.isRequired,
// }