import { useState } from 'react';
import Files from './data.json'
import ReplyIcon from '@mui/icons-material/Reply';


const Comment = () => {

    const [num, setNum] = useState()

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        setNum(num - 1);
    };

    return (
        <>
            {
                // Files.comments.map(file => {
                // Files.comments.map((file, index) => index > 1).map(file => {
                Files.comments.filter((file) => file.id === 2).map(file => {
                    return (
                        <> {
                            file.replies.map(a => {
                                return (
                                    < div className='comment-section'>
                                        <div className='second'>
                                            <div className='box2'>
                                                <div className="likes">
                                                    <i onClick={incNum}>+</i>
                                                    <h2 className="num">{a.score}</h2>
                                                    <i onClick={decNum}>-</i>
                                                </div>
                                                <div className='text'>
                                                    <div className="info">
                                                        {/* <img src={a.user.image.png} alt="hey" className='img' width="100%" /> */}
                                                        <div className="name">{a.user.username}</div>
                                                        <div className="duration">{a.createdAt}</div>

                                                        <button className="reply">
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

