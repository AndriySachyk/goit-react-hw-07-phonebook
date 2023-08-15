import {Section} from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import {ListContact} from './ListContact/ListContact';
import {Filter} from './FilterContact/FilterContact';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'redux/thunks';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import Loading from './Loading/Loading';
import Error from './Error/Error';
// import { selectContacts } from 'redux/selectors';



export const App = () => {
  const dispatch = useDispatch()
  
  const contacts = useSelector(selectContacts)
  
  const isLoading = useSelector(selectIsLoading) 
  
  const error = useSelector(selectError)
  
  
  useEffect(()=>{
    dispatch(getAllContactsThunk())
  },[dispatch])
  
  return (
    <>
        <Section title="Phonebook">
          <FormContact />
        </Section>
        <Section title="Contacts">
          <Filter/>
          {isLoading&& <Loading/>}
          {error && <Error error={error}/>}
          {contacts&&<ListContact/>}
        
        </Section>
      </>
    );
}
