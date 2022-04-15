import data from './data'
import ReplyIcon from '@mui/icons-material/Reply';



const Home = () => {


    const incNum = (index) => {
        const element = document.getElementsByClassName('num')[index];
        let num = Number(element.textContent);
        element.textContent = num + 1;
    };

    const decNum = (index) => {
        const element = document.getElementsByClassName('num')[index];
        let num = Number(element.textContent);
        element.textContent = num - 1;
    };

    return (
        <>{
            data.comments.map((file, index) => {
                // Files.comments.filter((file, index) => index < 1).map(file => {
                return (
                    <div className="home">
                        <div className="box">
                            <div className="box2">
                                <div className="likes">
                                    <i onClick={() => incNum(index)}>+</i>
                                    <h2 className="num">{file.score}</h2>
                                    <i onClick={() => decNum(index)}>-</i>
                                </div>
                                <div className="text">
                                    <div className="info">
                                        <img src={file.user.image.png} alt="hey" className='img' />
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


