import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function Player() {
    const { t } = useTranslation();
    const { id } = useParams();
    
    return (
      <div>
        <h2>Player</h2>
      </div>
    );
}

export default Player;