import data from './data'



const Reply = () => {
    return (
        <div className='home'>
            <div className='box'>
                <div className='box3'>
                    <img src={data.currentUser.image.webp} alt="hey" />
                    <textarea name="text" placeholder="Add a comment" />
                    <button className='reply'>send</button>
                </div>
            </div>
        </div>

    );
}

export default Reply;