import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { creatProduct } from "../../action/setData";
import classes from './Model_Product.css';
import ButtonClose from "../Templete/ButtonClose/ButtonClose";
import { useNavigate } from "react-router-dom";

const CreateProduct = props => {

    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [department, setDepartment] = useState('');
    const [price, setPrice] = useState('');
    const [productId, setProductId] = useState('');
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) navigate('/');
        // if (!close) navigate('/product');
    }, [close]);

    const saveData = () => {
        const objData = {
            productName: productName,
            department: department,
            price: price,
            productId: productId,
        }
        props.creatProduct(objData, navigate);
    };
    return (
        <div className="container">
            <ButtonClose close={setClose}/>
            <div className="card">
                <h1 className="card_title">Create Product</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input className="input_field" type="text" value={productName} onChange={e => setProductName(e.currentTarget.value)} />
                        <label className="input_label">Product name</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={department} onChange={e => setDepartment(e.currentTarget.value)} />
                        <label className="input_label">Department</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={price} onChange={e => setPrice(e.currentTarget.value)} />
                        <label className="input_label">Price</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={productId} onChange={e => setProductId(e.currentTarget.value)} />
                        <label className="input_label"> Product Id</label>
                    </div>
                    <button className="card_button" onClick={() => saveData()}>Save New Product</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { creatProduct })(CreateProduct);
