/**
 * Created by jovialis (Dylan Hanson) on 9/12/20
 **/

import axios from "axios";

export default function() {

    return axios.create({
        headers: {
            Origin: process.env.MY_URL,
            Authorization: `Bearer ${process.env.MY_SECRET}`
        }
    });

}