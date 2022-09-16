import { useRef, useState } from "react";
import YouTube from "react-youtube";
// npm install react-youtube

const YOUTUBE = [
    { id: 1, url: "raw3Nu0_mBQ", title: "IT Technology", des: "IT 기술이 창조하는 승강기 스마트 시스템" },
    { id: 2, url: "K4D9-0WIpA4", title: "Green Technology", des: "지구환경을 생각하는 녹색기술" },
]

const Promotion = () => {
    const MOVIE = useRef();

    const [url, setUrl] = useState('raw3Nu0_mBQ');
    const [tit, setTit] = useState(0);
    // (초기값)

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            mute: 1,
            // autohide: 1,
            // playsinline: 1,
            // playlist: 'raw3Nu0_mBQ',
            paused: 1,
        },
    };
    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div className="movie" ref={MOVIE} id="player">
                    <YouTube videoId={url} opts={opts} className="u" />
                    <div className="movie_title">
                        {
                            YOUTUBE[tit].title
                        }
                    </div>
                </div>

                <div className="des">
                    {
                        YOUTUBE.map((youtube, idx) => {
                            return (
                                <li key={youtube.id} onClick={() => {
                                    setUrl(youtube.url);
                                    setTit(idx)
                                }} className={youtube.id === idx ? 'on' : ''}>
                                    <div className="tit">{youtube.title}</div>
                                    <p>{youtube.des}</p>
                                </li>
                            )
                        })
                    }


                    {/* <button onClick={() => setUrl('raw3Nu0_mBQ')}>01 movie</button>
                    <button onClick={() => setUrl('8g200ZVGTX8')}>02 movie</button>
                    <button onClick={() => setUrl('K4D9-0WIpA4')}>03 movie</button> */}
                </div>
            </div>
        </section>
    )
}

export default Promotion;