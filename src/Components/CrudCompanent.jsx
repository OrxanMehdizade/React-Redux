import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function CrudCompanent() {
    let crudArr = useSelector((state) => state.crudArray);
    let dispatch=useDispatch()

    return (
        <div className='App'>
            <ul>
                {crudArr.map((item) => (
                    <li key={item.id}>
                        <p>{item.product_name}</p>
                        <p>{item.product_description}</p>
                        <p>{item.product_price}</p>
                        <button onClick={()=>{
                            dispatch({type:'DELETE',payload:item.product_name})
                        }}>Delete</button>
                        <button onClick={()=>{
                            dispatch({type:'DELETE',payload:item.product_name})
                        }}>Add</button>
                        <button onClick={()=>{
                            dispatch({type:'DELETE',payload:item.product_name})
                        }}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudCompanent;
