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

    const handleAddProduct = () => {
        dispatch({
            type:'ADD-ARRAY',
            payload:{
                product_name: productName,
                product_description: productDescription,
                product_price: parseInt(productPrice),
            }
        });
    }

    const handleUpdateProduct=()=>{
        dispatch({
            type: 'UPDATE-ARRAY',
            payload: {
                upName: updateName,
                upArray: {
                    product_name: productName,
                    product_description: productDescription,
                    product_price: parseInt(productPrice),
                },
            },
        });
    }

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
                            <button id='crudDelBtnId' onClick={()=>{
                                dispatch({type:'DELETE',payload:item.product_name})
                            }}>Delete</button>
                            <br/>------------------------------------------------------
                        </li>
                    ))}
                </ul>
            </div>
            <button id='crudUABtnId' onClick={()=>{
                setAddModelOk(true)
            }}>Add</button>
            <button id='crudUABtnId' onClick={()=>{
                setUpdateModelOk(true)
            }}>Update</button>
            {addModelOk && <div className='cssModle'>
                <div>
                    <input type="text"
                           onChange={(event)=>
                           setProductName(event.target.value)}
                           value={productName}
                           placeholder={'Product Name'}/>
                    <input type="text"
                           onChange={(event)=>
                           setProductDescription(event.target.value)}
                           value={productDescription}
                           placeholder={'Product Description'}/>
                    <input type="number"
                           onChange={(event)=>setProductPrice(event.target.value)}
                           placeholder={'Product Price'}
                           value={productPrice}/>
                    <button onClick={()=> {
                        handleAddProduct()
                        setAddModelOk(false)
                    }}>Add</button>
                </div>
            </div>
            }
            {updateModelOk && <div className='cssModle'>
                <div>
                    <input type="text"
                           value={productName}
                           onChange={(event)=>
                           setProductName(event.target.value)}
                           placeholder={'Product Name'}/>
                    <input type="text"
                           value={productDescription}
                           onChange={(event)=>
                               setProductDescription(event.target.value)}
                           placeholder={'Product Description'}/>
                    <input type="number"
                           value={productPrice}
                           onChange={(event)=>setProductPrice(event.target.value)}
                           placeholder={'Product Price'}/>
                    <input
                        type='text'
                        placeholder='Update Name'
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)}
                    />
                    <button onClick={()=> {
                        handleUpdateProduct()
                        setUpdateModelOk(false)
                    }}>Update</button>
                </div>
            </div>
            }
        </div>
    );
}

export default CrudCompanent;
