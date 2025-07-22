import { useState } from "react"

const Home = () => {
    const [secret, setSecret] = useState('');
    const [expiryHour, setExpiryHour] = useState('');
    const [encryptionId, setEncryptionId] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const encryptSecret = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
             const response = await fetch('/api/secret', {
                method: 'POST',
                 headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    secret: secret,
                })
            });

            const data = await response.json();
            if (data) {
                setEncryptionId(data.id);
            }
        } catch (error) {
            console.error('An error occured: ', error);
        }  finally {
            setIsLoading(false);
        }
    }

  return (
    <div className="max-w-md mx-auto py-40">
        <form onSubmit={encryptSecret} className="space-y-8">
            <div>
                <label htmlFor="secret">
                    Text to encrypt
                </label>
                <input required value={secret} onChange={(e) => setSecret(e.target.value)} id="secret" className="w-full input-border mt-2" type="text" />
            </div>
            
            <div className="">
                <label>
                    Expiry Period:
                    <select value={expiryHour} onChange={(e) => setExpiryHour(e.target.value)} className="ml-4 input-border">
                        <option disabled value=""> Choose an expiry hour </option>
                        <option value="1"> 1 hour </option>
                        <option value="6"> 6 hours </option>
                        <option value="24"> 24 hours </option>
                    </select>
                </label>
            </div>
            <div className="">
                <button type="submit" className={`p-2 px-4 bg-stone-100 ${isLoading && 'opacity-45 pointer-events-none'}`}> Submit </button>
            </div>
        </form>

        {encryptionId && (
         <div className="mt-10">
            <p> Encryption successfull </p>
            <p> Please copy link: http://localhost:5173/s/{encryptionId}</p>
            <p> Note: secret can only be viewed once </p>
        </div> 
        )}
       
    </div>
  )
}

export default Home