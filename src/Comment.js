import data from './data'
import Modal from './Modal';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from "react";


const Comment = () => {

    const [isOpen, setIsOpen] = useState(false)

    const incNum = (index) => {
        const element = document.getElementsByClassName('numm')[index];
        let numm = Number(element.textContent);
        element.textContent = numm + 1;
    };

    const decNum = (index) => {
        const element = document.getElementsByClassName('numm')[index];
        let numm = Number(element.textContent);
        element.textContent = numm - 1;

    };

    return (
        <>
            {
                // Files.comments.map(file => {
                // Files.comments.map((file, index) => index > 1).map(file => {
                // data.comments.filter((file) => file.id === 2).map((file) => {
                data.comments.map((file) => {
                    return (
                        <> {
                            file.replies.map((a, index) => {
                                return (
                                    < div className='comment-section'>
                                        <div className='second'>
                                            <div className='box2'>
                                                <div className="likes">
                                                    <i onClick={() => incNum(index)}>+</i>
                                                    <h2 className="numm">{a.score}</h2>
                                                    <i onClick={() => decNum(index)}>-</i>
                                                </div>
                                                <div className='text'>
                                                    <div className="info">
                                                        {/* <img src={`${a.user.image.png}`} alt="pic" className='img' width="100%" /> */}
                                                        <img src={a.user.image.png} alt="" className='img' />
                                                        <div className="name">{a.user.username}</div>
                                                        <div className="duration">{a.createdAt}</div>
                                                        <button className="reply">
                                                            <button className='delete' onClick={() => setIsOpen(true)} >Delete</button>
                                                            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
                                                            < ReplyIcon className='reply' fontSize='small' />Reply
                                                        </button>
                                                    </div>
                                                    <div className="comment"> {a.content}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                        </>
                    )
                })
            }
        </>
    );
}


export default Comment;

