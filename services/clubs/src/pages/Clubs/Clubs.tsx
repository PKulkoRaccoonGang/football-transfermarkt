import React from 'react';
import {playerRoutes} from '@packages/shared/src/routes/player';
import {Link} from "react-router-dom";

const Player = () => {
    return (
        <h1>
            Player
            <div>
                <Link to={playerRoutes.second}>go to second page</Link>
            </div>
        </h1>
    );
};

export default Player;
