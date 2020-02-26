export default class ITunesService {

    state = {
        data : {}
    }

    getResource = async (value) => {
        const res = await fetch(`https://itunes.apple.com/search?term=${value}`);

        if(!res.ok){
            throw new Error(`Could not fetch; received ${res.status}`); 
        }

        return await res.json();
    }

    getTracks = async (value)=>{
        const res = await this.getResource(value);
        return res;
    }

}