import axios from 'axios';



export const getRandomUser  = async () => {
    const res = await axios.get('https://random-data-api.com/api/users/random_user');
    return {name : `${res.data.first_name} ${res.data.last_name}`,gender: `${res.data.gender}`,from:`${res.data.address.city}`, img : res.data.avatar};

}

