import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
    title : "PromptPlatz",
    description : "PromptPlatz is a platform for creating and sharing prompts for creative writing.",
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" href="/assets/images/logo.svg" />
        </head>
        <Provider>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
        </Provider>
    </html>
  )
}

export default RootLayout;
