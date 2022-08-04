import { useState, useEffect } from "react";
import "./MemeForm.css";
import { getTopMemes } from "../../api/MemesAPI";

const MemeForm = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "",
    });
    const [memesData, setMemesData] = useState([]);

    useEffect(() => {
        const fetchMemes = async () => {
            const memes = await getTopMemes();
            setMemesData(memes);
        };

        fetchMemes();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMeme((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const getRandomMeme = () => {
        const memeIndex = Math.floor(Math.random() * memesData.length);

        setMeme((lastMeme) => ({
            ...lastMeme,
            imgUrl: memesData[memeIndex].url,
        }));
    };

    return (
        <main className="main-container">
            <div className="form-container">
                <div className="form-container_inp">
                    <input
                        id="top-text"
                        name="topText"
                        type="text"
                        placeholder="Top text"
                        value={meme.topText}
                        onChange={handleInputChange}
                    />
                    <input
                        id="bottom-text"
                        name="bottomText"
                        type="text"
                        placeholder="Bottom text"
                        value={meme.bottomText}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="form-container_btn" onClick={getRandomMeme}>
                    Get new meme image 🖼️
                </button>
            </div>
            {meme.imgUrl && (
                <div className="meme">
                    <img
                        className="meme-img"
                        src={meme.imgUrl}
                        alt="meme-img"
                    />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            )}
        </main>
    );
};

export default MemeForm;
