import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ViewSecretPage = () => {
    const [decryptedValue, setDecryptedValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const decryptSecret = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/secret/${id}`); 
                const data = await response.json();
                if (data.error) {
                    setErrorMessage(data.message);
                } else if (data.success) {
                    setDecryptedValue(data.text);
                }
            } catch (error) {
                console.error('Error decrypting secret: ', error)
            } finally {
                setIsLoading(false);
            }
        } 
        decryptSecret();
    }, [])

  return (
    <>
        <div>ViewSecretPage</div>
        { decryptedValue && !isLoading && (
         <div>
             <div> Thank you, your secret value is: </div>    
            <div> { decryptedValue } </div>
        </div>  
        )}

        { !decryptedValue && !isLoading && errorMessage && (
            <div> { errorMessage } </div>
        ) }
       
    </>

  )
}

export default ViewSecretPage