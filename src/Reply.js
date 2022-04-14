// import Files from './data.json'
import data from './data'



const Reply = () => {
    return (
        <div className='home'>
            <div className='box'>
                <div className='box3'>
                    {/* <img src={require(file.image.png).default} alt="" /> */}
                    {/* THE IMAGE */}
                    <img src={data.currentUser.image.webp} alt="hey" width="60%" />
                    {/* <img src={require(data.currentUser.image.webp)} alt="hey" width="60%" /> */}
                    <textarea name="text" placeholder={data.currentUser.username} />
                    <button className='reply'>send</button>
                </div>
            </div>
        </div>

    );
}

export default Reply;