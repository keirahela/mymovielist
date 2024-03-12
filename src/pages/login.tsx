import { useTranslation } from 'react-i18next';
import './style/LoginPage.css'; // Import CSS for styling

function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className="login-container">

      <button className="discord-button" onClick={() => window.location.href = 'https://discord.com/oauth2/authorize?client_id=1125638027100831754&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fapi%2Fdiscord%2Fcallback&scope=identify+guilds'}>
        <span>{t("LOGIN_W_DISCORD")}</span>
        <svg className='discord-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
        </svg>
      </button>
    </div>
  );
}

export default LoginPage;
