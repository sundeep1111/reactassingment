import React from 'react'
import classes from '../Component/DesignMenu.module.css'
import tickblue from '../images/tick-blue.png'
import tickgry from '../images/tick-gray.png'
import userblue from '../images/user-blue.png'
import userorange from '../images/user-orange.png'
import userpink from '../images/user-pink.png'
import userred from '../images/user-red.png'

export default function DesignMenu() {
    return (
        <div>
         <div className={classes.bodymenu_bg}>
         <div><img src={tickgry}/></div>
         <div className={classes.blc}>Dmm design</div>
         <div><img src={userpink}/></div>
         <div className={classes.gry}>20Dec</div>
         <div><span className={classes.pinkbg}></span></div>
         </div>

         <div className={classes.bodymenu_bgwht}>
         <div><img src={tickblue}/></div>
         <div className={classes.blc}>Blurr animation</div>
         <div><img src={userorange}/></div>
         <div className={classes.gry}>22Dec</div>
         <div><span className={classes.org}></span></div>
         </div>
  
         <div className={classes.bodymenu_bg}>
         <div><img src={tickgry}/></div>
         <div className={classes.blc}>Illustration</div>
         <div><img src={userblue}/></div>
         <div className={classes.gry}>26Dec</div>
         <div><span className={classes.bluebg}></span></div>
         </div>

         <div className={classes.bodymenu_bg}>
         <div><img src={tickgry}/></div>
         <div className={classes.blc}>Refunds</div>
         <div><img src={userred}/></div>
         <div className={classes.gry}>26Dec</div>
         <div><span className={classes.redbg}></span></div>
         </div>
        </div>
    )
}
