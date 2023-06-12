import { useState } from 'react';
import axios from 'axios';

const LinkShortener = () => {
  const [longLink, setLongLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const shortenLink = async () => {
    try {
      const response = await axios(`https://api.shrtco.de/v2/shorten?url-${longLink}` );
      setShortLink(response.data.shortLink.full_short_link);
      setLongLink('')
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Link Shortener</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a long link..."
            value={longLink}
            onChange={(e) => setLongLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={shortenLink}
          >
            Shorten Link
          </button>
        </div>
        {shortLink && (
          <div className="mb-4">
            <p className="text-green-500 font-medium">{shortLink}</p>
          </div>
        )}
        {errorMessage && (
          <div className="mb-4">
            <p className="text-red-500">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkShortener;
