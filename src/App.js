import React from 'react'

// import {} from './containers'
import {Navbar} from './components'
import "./app.css"

const App = () => {
    if (localStorage.getItem("loggedIn", undefined)){
        // sets default value for loggedIn
        // localStorage.setItem("loggedIn", false);
    }

    return (
        <div>
            <Navbar> </Navbar>
            <div>
                <h1>Pulse Performance</h1>

                <h2>About Us</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed. Vestibulum sed arcu non odio euismod lacinia at. Ultrices tincidunt arcu non sodales. Leo in vitae turpis massa sed elementum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Cursus risus at ultrices mi tempus imperdiet nulla. Erat pellentesque adipiscing commodo elit at. Enim nulla aliquet porttitor lacus. Viverra mauris in aliquam sem fringilla ut. Risus viverra adipiscing at in tellus integer. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elementum nibh tellus molestie nunc non. Auctor urna nunc id cursus metus aliquam eleifend mi. Pellentesque dignissim enim sit amet. Feugiat nibh sed pulvinar proin. Rhoncus aenean vel elit scelerisque mauris pellentesque.
                </p>
<br></br>
<h2>Our Mission</h2>
<p>
Pulvinar sapien et ligula ullamcorper. Ut diam quam nulla porttitor. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Diam ut venenatis tellus in. Ornare massa eget egestas purus viverra accumsan in. Justo nec ultrices dui sapien eget mi proin. Egestas quis ipsum suspendisse ultrices gravida. Urna porttitor rhoncus dolor purus non. Nulla facilisi etiam dignissim diam quis enim lobortis. Purus gravida quis blandit turpis cursus. In eu mi bibendum neque egestas congue quisque. Diam sit amet nisl suscipit adipiscing. Suspendisse interdum consectetur libero id. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris.
</p>
<br></br>
<h2>Our Values</h2>
<p>
Libero volutpat sed cras ornare arcu dui. Sapien nec sagittis aliquam malesuada. Viverra accumsan in nisl nisi scelerisque eu. Tellus id interdum velit laoreet id donec. Vel pretium lectus quam id leo in vitae turpis. Gravida dictum fusce ut placerat orci nulla pellentesque. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Quam pellentesque nec nam aliquam sem et tortor. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Ultricies mi eget mauris pharetra et ultrices neque. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Volutpat ac tincidunt vitae semper quis lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Egestas purus viverra accumsan in. Pellentesque elit eget gravida cum. Quis auctor elit sed vulputate mi sit amet mauris commodo. Odio facilisis mauris sit amet. A diam maecenas sed enim ut sem viverra aliquet. Cras pulvinar mattis nunc sed blandit libero volutpat. Tortor at risus viverra adipiscing at in tellus integer.
</p>
<br></br>
<h2>Our History</h2>
<p>
Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Pellentesque id nibh tortor id aliquet. Aliquam id diam maecenas ultricies. Mollis aliquam ut porttitor leo a diam sollicitudin. Nunc sed blandit libero volutpat sed. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Ultricies leo integer malesuada nunc vel. Nibh venenatis cras sed felis. Leo integer malesuada nunc vel risus commodo. At varius vel pharetra vel turpis nunc eget lorem. Sed velit dignissim sodales ut eu sem integer vitae. Consectetur lorem donec massa sapien faucibus et. Dictum fusce ut placerat orci nulla. Pharetra diam sit amet nisl. Feugiat in fermentum posuere urna nec tincidunt praesent. Non nisi est sit amet facilisis.
</p>
            </div>
        </div>
    )
}

export default App