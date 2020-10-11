import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'PresentSafe',
}: Props) => (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
        <nav className="navbar">
          <Link href="/">
            <a className="logo">
              <img src="/logo.png" />
            </a>
          </Link>
          <span className="navbar-toggle" id="js-navbar-toggle">
            <FontAwesomeIcon size={"2x"} icon={faBars} />
          </span>
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="#" className="nav-links">Home</a>
            </li>
            <li>
              <a href="#" className="nav-links">Products</a>
            </li>
            <li>
              <a href="#" className="nav-links">About Us</a>
            </li>
            <li>
              <a href="#" className="nav-links">Contact Us</a>
            </li>
            <li>
              <a href="#" className="nav-links">Blog</a>
            </li>
          </ul>
        </nav>
        <React.Fragment>
          <header>
            <div style={{ display: "flex" }}>
              <div>
                <h1>Clean Desktop. <br /> One Click.</h1>
                <p>Never worry again about hiding your Desktop before screensharing in your next Zoom meeting.</p>
              </div>
              <img style={{ width: 560, borderRadius: 15 }} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ff8e6d7-0736-46da-b3f7-e5645688db36/dd1ydw9-385c3ced-aafd-483e-8d4d-884530a14c27.png/v1/fill/w_1024,h_576,q_80,strp/windows_10__absorption__19h1_dark_wallpaper__by_xreamed_dd1ydw9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC8yZmY4ZTZkNy0wNzM2LTQ2ZGEtYjNmNy1lNTY0NTY4OGRiMzZcL2RkMXlkdzktMzg1YzNjZWQtYWFmZC00ODNlLThkNGQtODg0NTMwYTE0YzI3LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vwhy9tkHXIZ2zG8zjZlKM_tDgr9yzTuEPDOCZmVpW5c" />
            </div>


          </header>


          <main>
            <section className="services">
              <h2>How we help enhance your privacy:</h2>

              <div className="service-container">
                <div className="services-card service-one"></div>
                <div className="service-description">

                  <h3>Hide All Windows and Icons</h3>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>

                </div>
              </div>



              <div className="service-container">

                <div className="services-card service-two"></div>
                <div className="service-description">
                  <h3>Wallpaper for Work</h3>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                </div>
              </div>



              <div className="service-container">
                <div className="services-card service-three"></div>
                <div className="service-description">
                  <h3>Global Mute Button</h3>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                </div>

              </div>
            </section>
            <h2 style={{ marginBottom: 0 }}>We hate subscriptions as much as you do.</h2>
            <h2 style={{ marginBottom: 60 }}>Pay once. Keep forever.</h2>


          </main>


        </React.Fragment>
        {children}
      </div>
      <div className="banner">
        <span>
          All Rights Reserved
          .
      </span>
      </div>
    </>
  )

export default Layout
