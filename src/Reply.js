import Files from './data.json'

const Reply = () => {
    return (
        <> {
            Files.currentUser.map(file => {
                return (
                    <div className='home'>
                        <div className='box'>
                            <div className='box3'>
                                {/* <img src={require(file.image.png).default} alt="" /> */}
                                <img src={file.image.webp} alt="" width="60%" />
                                <input type="text" placeholder={file.username} />
                                <button className="reply">Reply</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        </>
    );
}

export default Reply;