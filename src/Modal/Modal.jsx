import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({ isOpen: true })}>Открыть модальное окно</button>
                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Заголовок</h1>
                            <p>Текст модального окна</p>
                            <button onClick={() => this.setState({ isOpen: false })}>Закрыть</button>
                        </div>
                    </div>)}
            </>
        )
    }
}