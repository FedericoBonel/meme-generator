const memesEndpoint = "https://api.imgflip.com"

// Gets top 100 most popular memes
export const getTopMemes = async () => {
    try {
        const response = await fetch(`${memesEndpoint}/get_memes`, {
            method: "GET",
            headers: {
                "accept":"application/json"
            }
        });
        const data = await response.json();
        return data.data.memes;
    } catch (error) {
        console.log(error.message)
    }
}