import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UrlPage = () => {

    const navigate = useNavigate();

  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleInputChange = (event: any) => {
    setLongUrl(event.target.value);
  };

  const handleCancel = () => {
    navigate('/dashboard');
  }

  const handleShortenUrl = () => {
    
    const apiKey = 'd7c27503eb5b1521587c964adb834a75145376ef';
    const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

    fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ long_url: longUrl }),
    })
      .then(response => response.json())
      .then(data => {
        setShortUrl(data.link);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


    return ( 
        <div>
           <Link to="/dashboard">
           <svg fill="none" 
           className="w-10 h-10 text-blue-700 float-right mr-5"
           stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
</svg>
           </Link>
            <h1 className="mt-10 text-center text-4xl font-serif">Create new</h1>

            <form action="">
                <div className="flex flex-col m-3">
                <label htmlFor="" className="mt-20 text-center text-lg font-serif">
                    Enter your long URL
                </label>

                <input type="text" 
                className="mt-2 md:w-1/2 w-full mx-auto border-2  border-blue-700 rounded-lg p-3" 
                placeholder="https://www.example.com/my_long_url"
                value={longUrl} onChange={handleInputChange}
                />
                </div>

        {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
                
            <div className="flex m-3  md:flex-row flex-col md:mt-80 mt mt-44 md:float-right">
            <button 
                className="border w-full border-slate-400 hover:bg-slate-300 text-blue-900 px-5 py-3 rounded-lg mr-10 font-serif" onClick={handleCancel}>
                    Cancel
                </button>

                <button 
                className="border mt-2 w-full bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 mr-5 rounded-lg font-serif" onClick={handleShortenUrl}>
                    Create
                </button>
            </div>   
            </form>

           
        </div>
     );
}
 
export default UrlPage;