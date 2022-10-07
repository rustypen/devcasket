import { supabase } from "@/utils/supabaseClient";
import { faGithub, faGitlab, faBitbucket } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from "next/router"
import { ChangeEvent } from "react";

const LoginUsingThirdParty = ({icon, label}: any) => {
  return (
    <button className="w-full flex justify-center items-center border border-gray-200 rounded p-2 my-2">
      <FontAwesomeIcon icon={icon} />
      <span className='ml-3'>
        {label}
      </span>
    </button>
  )
}

const ACCOUNTS = [
  {
    label: "Github",
    icon: faGithub,
  },
  {
    label: "Gitlab",
    icon: faGitlab,
  },
  {
    label: "Bitbucket",
    icon: faBitbucket,
  },
]

const LoginPage = () => {

  const router = useRouter();
  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {error, user, session} = await supabase.auth.signIn({
      email: e.target?.email?.value
    })
    if (error) throw error
    alert('Check your email for the login link!')
    // if (session?.refresh_token) {
    //   supabaseClient.auth.setSession(session.refresh_token)
    //     .then(() => router.push("/"))
    // }
  }
  
  return (
    <div className="min-h-screen">
      <div className="p-4 mx-auto max-w-sm mt-10">
        <h6 className="font-semibold text-xl text-center">Welcome Back</h6>
        {
          ACCOUNTS.map(item => (
            <LoginUsingThirdParty key={item.label} {...item}/>
          ))
        }
        <hr className="h-1 my-4"/>
        <form onSubmit={handleLogin}>
          <fieldset>
            <label htmlFor="emailId" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="emailId"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 block rounded w-full p-2 text-sm placeholder:text-sm"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-400 px-4 py-3 leading-none text-white font-semibold text-sm block w-full rounded"
            >
              Sign in
            </button>
          </fieldset>
        </form>
        <div className="text-sm my-4">Not registered yet? Create an account</div>
      </div>
    </div>
  )
};

export default LoginPage;

export async function getServerSideProps(ctx: any) {
  const {user, error} = await supabaseClient.auth.api.getUserByCookie(ctx)
  console.log(user)
  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {},
  }
}
