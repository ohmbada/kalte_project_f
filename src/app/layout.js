import Footer from '@/src/app/components/Footer'
import Header from '@/src/app/components/Header'
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout({ children }) {
    return (
        <html lang="kr">
            <head />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <title>칼퇴 프로젝트</title>
            <body className='layout'>
                <header className='header'>
                    <Header />
                </header>
                <main className='main'>
                    {children}
                </main>
                <footer className='footer'>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}