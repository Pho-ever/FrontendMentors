import { useState } from "react";




const Home = () => {

    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num + 1)
    };

    const decNum = () => {
        setNum(num - 1)
    }

    // export default decNum;
    // export default incNum;

    return (
        <div className="home">
            <div className="box">
                <div className="likes">
                    <i onClick={incNum}> + </i>
                    <div> {num} </div>
                    <i onClick={decNum}> - </i>
                </div>
                <div className="text">
                    <div className="info">
                        {/* <img src="{''}" alt="" /> */}
                        <div className="img">heyy</div>
                        <div className="name"> Baby</div>
                        <div className="duration"> 1 month ago</div>
                        <div className="reply">Reply</div>
                    </div>
                    <div className="comment"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa iusto nesciunt iste id, dolores facere deserunt commodi obcaecati eveniet.</div>
                </div>
            </div>
        </div>

    );
}

export default Home;