import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {

    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const create = async (gameData) => {

    const result = await request.post(baseUrl, gameData );

    return result;
};


//we take the data from the form(gameData) and we make a request to post to the server. body - takes the game data object and converts it into string.

//the idea of this service is to group the resources so we can make all CRUD requests. 