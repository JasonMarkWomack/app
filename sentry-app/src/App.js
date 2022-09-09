import {useState} from 'react';
import React from "react";
import * as Sentry from "@sentry/react";


const People = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users', {
    

        method: 'GET',
        headers: {
          Accept: 'Application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);


  return (
    <><></><div>


 <a href="https://www.facebook.com">FB</a>  
 <br></br>
 <a href="/src/app.html">App Contact</a>
 <br></br>

 <a href="/src/page.html"> About Page</a>


{/* Comment out the one line below to make the app work. */}

 <button onClick={methodDoesNotExist}>Break the world</button>;



      </div><div>


              {err && <h2>{err}</h2>}

              <button onClick={handleClick}>Fetch data</button>

              {isLoading && <h2>Loading</h2>}

              {data.data.map(person => {
                  return (
                      <div key={person.id}>
                          <h2>{person.email}</h2>
                          <h2>{person.first_name}</h2>
                          <h2>{person.last_name}</h2>
                          <br />
                      </div>

                  );
              })}
          </div>
          <a href="https://www.twitter.com">Twitter</a></>
  );
};

 export default Sentry.withProfiler(People);
