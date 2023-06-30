import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
// import { db } from '../Config/Firebase';
// import { onSnapshot, collection } from "firebase/firestore";
// import firebase from 'firebase/app';
import "firebase/firestore"
// import { getDatabase, ref, set } from "firebase/database";

const UrlPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    longUrl: '',
    shortUrls: '',
  })
  const [name, setName] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const { handleSubmit, register, formState: { errors }, } = useForm();

  const handleCancel = () => {
    navigate('/dashboard');
  }

  const submit: SubmitHandler<any> = async data => {
    if (!data) return;
    console.log(data);

    const apiKey = "d7c27503eb5b1521587c964adb834a75145376ef";
    const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

    const response = await axios.post(
      apiUrl,
      { long_url: data.longUrl },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
      setShortUrls(response.data.link);
      setName(data.name);  
      setForm({
        ...form,
        [longUrl]: longUrl
      })
      }
      
     return ( 
        <div>
           <Link to="/dashboard">
           <svg fill="none" 
           className="w-10 h-10 text-blue-700 float-right mr-5"
           stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" 
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 
        2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
          </svg>
           </Link>
            <h1 className="mt-10 text-center text-4xl font-serif">Create new</h1>
            <p className="text-center text-lg font-serif">Paste your long URL below to shorten it</p>
            <hr className="mt-5 border-2 border-blue-700 w-1/2 mx-auto"/>
        
            
         
            <form onSubmit={handleSubmit(submit)}>
                <div className="flex flex-col m-3">
                <label htmlFor="url" className="mt-20 text-center text-lg font-serif">
                    Enter your long URL
                </label>
                <input type="text" {...register("name")  
               } 
               onChange={(event) => {
                event?.target.value
                setName('')
               }}
                 placeholder="Enter the name of the Url"
                className="mt-2 md:w-1/2 w-full mx-auto border-2  border-blue-700 rounded-lg p-3" />

                <input type="text" 
                
                className="mt-2 md:w-1/2 w-full mx-auto border-2  border-blue-700 rounded-lg p-3" 
                placeholder="https://www.example.com/my_long_url"
                
                {...register("longUrl")  
               }
               onChange={(event) => {
                event?.target.value
                setLongUrl('')
               }}
                />
                <p className="md:ml-60 text-center text-xs md:text-sm text-red-500">

                {errors.email?.type === "required" && "Url is required"}</p>
                </div>    
           
            <div className="flex m-3  md:flex-row flex-col md:mt-80 mt mt-44 md:float-right">
            <button 
                className="border w-full border-slate-400 hover:bg-slate-300 text-blue-900 
                px-5 py-3 rounded-lg mr-10 font-serif" onClick={handleCancel}>
                    Cancel
                </button>

                <button type="submit"
                className="border mt-2 w-full bg-blue-500 hover:bg-blue-400 text-white px-5
                 py-3 mr-5 rounded-lg font-serif" >
                    Create
                </button>
            </div>   
            </form>

            <div>
            {shortUrls && (
        <div className="md:ml-96 ml-36 ">
          <p>Short URL:</p>
          <p className="text-blue-700 text-2xl">{name}</p>
          <a href={shortUrls} target="_blank" rel="noreferrer">
            {shortUrls}
           </a>
        </div>
      )}
            </div>

           
        </div>
     );
}
 
export default UrlPage;

 // const storeShortenedURL = (shortUrls: any) => {
  //   firebase.firestore().collection('shortenedUrls').add({
  //     url: shortUrls,
  //     created_at: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  //   .then(() => {
  //     console.log('Shortened URL stored in Firebase Cloud Firestore');
  //   })
  //   .catch((error: any) => {
  //     console.error('Error storing shortened URL:', error);
  //   });
  // };

  // try {
      //   const shortUrls = await submit(longUrl);
      //   storeShortenedURL(shortUrls);
      // } catch (error) {
      //   console.error('Error shortening URL:', error);
      // }
  // console.log(shortUrls)

// console.log(response)
    // saveShortLink(response.data.link);
    
// async function saveShortLink(data: any) {
  //   const db = getDatabase();
    
  //   console.log(await set(ref(db), {
  //     "url": data
  //   }))
  //   console.log(db)
  // }
  
// /  useEffect(() => {
  //   // push the shortened link to the firebase collection "shortenedUrls"
    
  //   const shortUrlsQuery = collection(db, "shortenedUrls");
  //   const unsubscribeShortUrls = onSnapshot(shortUrlsQuery, (querySnapshot) => {
  //     console.log("Query snapshot received:", querySnapshot);
    
  //     const shortUrlsArr: { id: string }[] = [];
  //     querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
  //       console.log("Document ID:", doc.id);
  //       console.log("Document data:", doc.data());
    
  //       shortUrlsArr.push({ ...doc.data(), id: doc.id });
  //     });
    
  //     console.log("shortUrlsArr:", shortUrlsArr);
  //     setShortUrls(shortUrlsArr);
      

  //   });
    
  //   return () => {
  //     unsubscribeShortUrls();
  //   };
    

  // }, []);


  // const unsubscribe = onSnapshot(collection(db, "shortenedUrls"), (snapshot) => {
    //   console.log("Snapshot received:", snapshot);
    
    //   const newShortUrls = snapshot.docs.map((doc) => {
    //     console.log("Document ID:", doc.id);
    //     console.log("Document data:", doc.data());
    
    //     return {
    //       id: doc.id,
    //       ...doc.data(),
    //     };
    //   });
    
    //   console.log("New short URLs:", newShortUrls);
    
    //   setShortUrls(newShortUrls);
    // });

    // return () => {
    //   unsubscribe();
    // }

    
 //  const shortUrlsQuery = collection(db, "shortenedUrls");
//   const unsubscribeShortUrls = onSnapshot(shortUrlsQuery, (querySnapshot) => {
//     const shortUrlsArr: { id: string }[] = [];
//     querySnapshot.forEach((doc) => {
//       shortUrlsArr.push({ ...doc.data(), id: doc.id });
//     });
//     setShortUrls(shortUrlsArr);
//   });

//   return () => {
//     unsubscribeShortUrls();
//   };
  