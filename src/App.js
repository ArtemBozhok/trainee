import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";

function App(props) {
    let isModal = props.state.isModalShowed;

    if (!isModal) {
        document.body.style.overflow = '';
        return (
            <div className="App">
                <Header modal={props.state.toggleModal}/>
                <Products state={props.state}/>
            </div>
        );
    } else {
        document.body.style.overflow = 'hidden';
        return (
            <div className="App">
                <Modal
                    pushProduct={props.state.pushNewProduct}
                    addProduct={props.state.addNewProduct}
                    modal={props.state.toggleModal}
                    inputs={props.state.newProductInfo}
                />
                <Header />
                <Products state={props.state}/>
            </div>
        )
    }

}

export default App;
