import { useDispatch, useSelector } from 'react-redux';
import { BoxFilter, LableFilter, InputFilter} from './FilterContact-style';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/sliceFilter';



export const Filter= ()=>{
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()


   const handleChange = (even)=>{
        dispatch(filterContact(even.target.value))
    }

return (
    <>
        <BoxFilter>
            <LableFilter htmlFor="filter">Find contacts by name</LableFilter>
            <InputFilter
                type="text"
                name="filter"
                onChange={handleChange}
                id="filter"
                placeholder="Enter a name you want to find"
                value={filter.value}
            />
        </BoxFilter>
        
    </>
)
}


