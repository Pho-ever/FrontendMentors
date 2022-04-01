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
                                {/* THE IMAGE */}
                                <img src={file.image.webp} alt="hey hey" width="60%" />
                                <textarea name="text" placeholder={file.username} />
                                <button className='reply'>send</button>

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