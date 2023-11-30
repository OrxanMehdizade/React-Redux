import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../App.css'

function CrudCompanent() {
    let crudArr = useSelector((state) => state.crudArray);
    let dispatch=useDispatch()
    let [addModelOk,setAddModelOk]=useState(false)
    let [updateModelOk,setUpdateModelOk]=useState(false)
    let [productName,setProductName]=useState('')
    let [productDescription,setProductDescription]=useState('')
    let [productPrice,setProductPrice]=useState('')
    let [updateName,setUpdateName]=useState('')

    return (
        <div>
            <div className='crudCss'>
                <ul className='crudUlClass'>
                    {crudArr.map((item) => (
                        <li key={item.id}>
                            <p>Product Name: {item.product_name}</p>
                            <p>Product Description: {item.product_description}</p>
                            <p>Product Price: {item.product_price}</p>
                            <br/>------------------------------------------------------<br/>
                            <button id='crudBtnId' onClick={()=>{
                                dispatch({type:'DELETE',payload:item.product_name})
                            }}>Delete</button>
                            <button id='crudBtnId' onClick={()=>{
                                setAddModelOk(true)
                            }}>Add</button>
                            <button id='crudBtnId' onClick={()=>{
                                setUpdateModelOk(true)
                            }}>Update</button>
                            <br/>------------------------------------------------------
                        </li>
                    ))}
                </ul>
            </div>
            {addModelOk && <div className='cssModle'>
                <div>
                    <input type="text" placeholder={'Product Name'}/>
                    <input type="text" placeholder={'Product Description'}/>
                    <input type="number" placeholder={'Product Price'}/>
                    <button onClick={()=> {
                        setAddModelOk(false)
                    }}>Add</button>
                </div>
            </div>
            }
            {updateModelOk && <div className='cssModle'>
                <div>
                    <input type="text" placeholder={'Product Name'}/>
                    <input type="text" placeholder={'Product Description'}/>
                    <input type="number" placeholder={'Product Price'}/>
                    <input type="text" placeholder={'Update Name'}/>
                    <button onClick={()=> {
                        setUpdateModelOk(false)
                    }}>Update</button>
                </div>
            </div>
            }
        </div>
    );
}

export default CrudCompanent;
