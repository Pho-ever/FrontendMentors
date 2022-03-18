import Files from './data.json'
// import { useState } from 'react'






const Home = () => {


    return (
        <>{
            Files.comments.map((file = file.id === 1) => {
                return (
                    <div className="home">
                        <div className="box">
                            <div className="box2">
                                <div className="likes">
                                    <i >+</i>
                                    <h2 className="num">{file.score}</h2>
                                    <i>-</i>
                                </div>
                                <div className="text">
                                    <div className="info">
                                        <div className="img">{ }</div>
                                        <div className="name">{file.user.username}</div>
                                        <div className="duration">{file.createdAt}</div>
                                        <div className="reply">Reply</div>
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




