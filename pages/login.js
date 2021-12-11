import {  getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className=' flex flex-col items-center bg-green-50   min-h-screen w-full justify-center'>
      <div className='bg-white bg-blend-overlay flex flex-col items-center p-20 rounded-xl shadow-xl shadow-cyan-500/50'>
      <img className='w-52 mb-5 hover:scale-95 transform transition duration-200 ease-in-out animate-bounce' src='https://links.papareact.com/9xl' alt=''/>
      
      {Object.values(providers).map((provider) => (
       <div key={provider.name}>
         <button className=' bg-green-500 text-white p-5 rounded-lg'
         onClick={()=> signIn(provider.id, {callbackUrl: "/"})}
         >login with {provider.name}</button>
       </div>
     ))} 
      </div>
     
    </div>
  );
}

export default Login;

export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}