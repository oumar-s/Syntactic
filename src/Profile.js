import './Profile.css'
function Profile(){
    return(
        <div className="Profile">
            <p className='user-information'> User Information</p>
            <div className="profile-info">
                <a href="/edit-profile-picture">
                <img className="pfp" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt=""></img>
                <div className="edit-pfp">
                    <span>Edit PFP</span>
                 </div>
                </a>
                <div className="username-block"> 
                        <p className="username">
                            USERNAME:
                        </p>
                        <form> 
                            <input type="text" className="current-username" value="username"></input>
                        </form>
                </div>
                <div className="email-block">
                        <p className="email">
                            EMAIL:
                        </p>
                        <form> 
                            <input type="text" className="current-username" value="email"></input>
                        </form>
                </div>
            </div>
            <p className='change-information'>Change Your Password Or Email</p>
            <div className="change-info">
                <div className="change-email">
                    <form id="email form" method="post">
                        <p className="enter-new-email-text">Enter New Email:</p>
                        <input type="text" className="email-input"></input>
                        <p className="enter-new-email-text">Confirm New Email:</p>
                        <input type="text" className="confirm-email-input"></input>
                        <button id="submitButton" type="submit" class="btn">Submit</button>
                    </form>
                </div>
                <div className="change-password">
                    <form id="password form" method="post">
                    <p className="enter-new-password-text">Enter New Password:</p>
                    <input type="text" className="password-input"></input>
                    <p className="enter-new-password-text">Confirm New Password:</p>
                    <input type="text" className="confirm-password-input"></input>
                    <button id="submitButton" type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default Profile;