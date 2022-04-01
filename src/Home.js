import Files from './data.json'
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react';



const Home = () => {
    const Reply = (id) => {

        console.log('hey bro')
        // return (
        //     <> {
        //         Files.currentUser.map(file => {
        //             return (
        //                 <div className='home'>
        //                     <div className='box'>
        //                         <div className='box3'>
        //                             {/* <img src={require(file.image.png).default} alt="" /> */}
        //                             <img src={file.image.webp} alt="" width="60%" />
        //                             <input type="text" placeholder={file.username} />
        //                             <button className="reply">Reply</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        //     </>
        // );
    }

    const [num, setNum] = useState()

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        setNum(num - 1);
    };


    return (
        <>{
            Files.comments.map(file => {
                // Files.comments.filter((file, index) => index < 1).map(file => {
                return (
                    <div className="home">
                        <div className="box">
                            <div className="box2">
                                <div className="likes">
                                    <i onClick={incNum}>+</i>
                                    <h2 className="num">{file.score}</h2>
                                    <i onClick={decNum}>-</i>
                                </div>
                                <div className="text">
                                    <div className="info">
                                        {/* <img src={file.user.image.png} alt="hey" className='img' /> */}
                                        <div className="name">{file.user.username}</div>
                                        <div className="duration">{file.createdAt}</div>

                                        <button className="reply">
                                            < ReplyIcon className='reply' fontSize='small' />Reply
                                        </button>
                                    </div>
                                    <div className="comment"> {file.content}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}
export default Home;




