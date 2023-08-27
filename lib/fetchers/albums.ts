import spotifyAPI from "./axios";

async function albums() {
    try{
        const resp = await spotifyAPI.get('/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc',
        {
            headers: {
                Authorization: `Bearer ${process.env.SPOTIFY_CLIENT_ID}`,
              },
        })
        console.log(resp.data);
    }catch(error){
        console.error('Error fetching data from spotify API : ',error);
    }
}

export default albums;