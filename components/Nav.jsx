"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {

  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promptopia Logo"
          width={30} height={30}
          className="object-contain"
        ></Image>

        <p className="logo_text">Prompyopia</p>
      </Link>

      {/* destop Navigation */}

      <div className="sm:flex hidden" >
        <div>
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>

              <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
              <Link href="/profile" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg" alt="profile" width={37} height={37} className="rounded-full" />
              </Link>
            </div>
          ) : (
            <>
              {providers && Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn" >
                  Sign In
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* mobile Navigation */}
      <div className="sm:hidden flex relative">


        {isUserLoggedIn ? (

          <div className="flex">
            <Image src="/assets/images/logo.svg" alt="profile" width={37} height={37} className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />

            {toggleDropDown && (
              <div className="dropdown">

              </div>
            )
            }

          </div>

        ) : (<>
          {providers && Object.values(providers).map((provider) => (
            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn" >
              Sign In
            </button>
          ))}
        </>)


        }


      </div>

    </nav>
  )
}

export default Nav