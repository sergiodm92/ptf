import axios from "axios";

export function shortLink(Link){

    return async function (dispatch){
        try{
            let Linkend = Link
            if(Link.includes("http")==false)Linkend="http://"+Link
            let jsonlink = {"direction":Linkend}
            const json = await axios.post(`https://ptyann.herokuapp.com/`, jsonlink);

                return dispatch({
                type: "LINK",
                payload: json.data.data})
            }
        catch(err){
            return dispatch({
            type: "LOGIN_STATUS",
            payload: "error"})
        }
        
    }
  }
