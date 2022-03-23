import Files from './data.json'



const Comment = () => {
    return (
        <>
            {
                Files.currentUser.map(file => {
                    return (

                        <div className='comment-section'>
                            <img src={require('./images/avatars/image-juliusomo.webp')} alt="" />
                            <input type="text" placeholder={file.username} />
                            <button className='response'>reply</button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Comment;