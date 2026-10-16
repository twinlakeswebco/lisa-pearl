import type { Metadata, Viewport } from "next";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import VoteCountdown from "./components/vote-countdown";
import { FACEBOOK_URL, EMAIL, TAGLINE } from "./lib/site";
import "./globals.css";
export const metadata: Metadata={title:{default:"Lisa Pearl for Clarkson Mayor",template:"%s | Lisa Pearl for Clarkson Mayor"},description:TAGLINE,robots:{index:false,follow:false},icons:{icon:"/favicon.svg"},openGraph:{title:"Lisa Pearl for Clarkson Mayor",description:TAGLINE,type:"website"}};
export const viewport: Viewport={width:"device-width",initialScale:1,themeColor:"#bd252c"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><div className="preview-watermark">THIS WEBSITE IS PROPERTY OF TWIN LAKES WEB CO. - PREVIEW ONLY</div><SiteHeader/><VoteCountdown/>{children}<footer><div className="container footer-main"><Link className="brand" href="/"><strong>LISA PEARL<span>.</span></strong><small>FOR CLARKSON MAYOR</small></Link><p>Hometown charm.<br/>A future with purpose.</p><div className="footer-links"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow Lisa on Facebook</a></div></div><div className="container footer-bottom"><span>Clarkson, Kentucky</span><span>Campaign website preview · Prepared by Twin Lakes / Web Co.</span></div></footer></body></html>}
