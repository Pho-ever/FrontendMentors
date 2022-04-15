const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <>
            <div className="overlay" onClick={onClose} />
            <div className="modal">
                <div>
                    <h2>Delete Comment</h2>
                    <h4>Are you sure you want to delete this comment? This will remove this comment and it can't be undone
                    </h4>
                    <div>
                        <button onClick={onClose} className="no">NO, CANCEL</button>
                        <button className="yes">YES, DELETE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;