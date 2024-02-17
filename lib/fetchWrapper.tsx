import {getTokenWorkaround} from "@/app/actions/authActions";


const baseUrl = "http://localhost:3001";

async function get(url: string)
{
	  const requestOptions = {
			method: "GET",
			headers: await getHeaders()
	  }
}

async function getHeaders()
{
	  const token = await getTokenWorkaround();
	  const headers = {
			'Content-type': 'application/json',
			'Accept': 'application/json'
	  } as any;
	  
	  if (token)
			headers.Authorization = "Bearer " + token.access_token
	  
	  return headers;
}