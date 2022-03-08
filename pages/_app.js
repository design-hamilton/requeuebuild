import '../styles/style.css'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'

// Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #fff;
    --bg: #242627;
    --profilebg: rgb(36 38 39 / 90%);
    --headerBg: linear-gradient(#434343 0%, #0d0d0d 100%);
    --boxBg: #2f2f2f;
    --inTopBg: #434343;
    --inBotBg:#313334;
    --inBotBgTrans:rgb(49 51 52 / 70%);
    --ListBorder:1px solid #434343;
    --CustGredient:linear-gradient(to right, #242627 30%, rgba(47, 47, 47, 0) 100%);  
    --CustBorder:#242627;  
    --CustInfoHead:#4f5355;  
    --addCustmodalBg:rgb(60 60 60 / 50%);  
    --profileMsgBg:inset 0px 0px 10px 0px rgb(0 0 0 / 49%);  
    color:#fff;   
  }
  [data-theme="light"] {
    --fg: #242627;
    --bg: #D9D9D9;
    --profilebg: rgb(217 217 217 / 90%);
    --headerBg: linear-gradient(#fff 0%, #ddd 100%); 
    --boxBg: #ebebeb;
    --inTopBg: #F0F0F0;
    --inBotBg:#CCCCCC; 
    --inBotBgTrans:rgb(204 204 204 / 70%);     
    --ListBorder:1px solid #EFF0F0; 
    --CustGredient:linear-gradient(to right, #d9d9d9 30%, rgba(235, 235, 235, 0) 100%); 
    --CustBorder:#D0D0D0; 
    --CustInfoHead:#979797;  
    --addCustmodalBg:rgb(255 255 255 / 29%);  
    --profileMsgBg:inset 0px 0px 10px 0px rgb(0 0 0 / 13%);  
    color:#242627;
 
  }
`

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
        <div id="modal-root"></div>
      </ThemeProvider>
    </>
  )
}
