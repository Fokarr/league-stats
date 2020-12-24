require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.RIOT_API_KEY

const getSummonerByName = async name => {
    try {
        const response = await axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=" + apiKey)
        return response.data
    } 
    catch(e) {
        return e
    }
}

const getMatchHistory = async accountId => {
    try {
        const response = await axios.get("https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + accountId + "?api_key=" + apiKey)
        return response.data
    }
    catch(e) {
        return e
    }
}

exports.getSummonerByName = getSummonerByName;
exports.getMatchHistory = getMatchHistory;
