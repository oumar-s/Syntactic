import './Profile.css'
function Profile(){
    return(
        <div className="Profile bg-gallery w-full h-full">
            <p className='user-information text-midnight text-lg font-mono font-normal text-8xl'> User Information</p>
            <div className="profile-info">
                <a href="/edit-profile-picture">
                <img className="pfp" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt=""></img>
                <div className="edit-pfp text-midnight text-3xl font-mono font-normal">
                    <span>Edit PFP</span>
                 </div>
                </a>
                <div className="username-block"> 
                        <p className="username text-midnight text-4xl font-mono font-normal">
                            USERNAME:
                        </p>
                        <form> 
                            <input type="text" className="current-username border-2 border-midnight w-60 h-8 text-midnight text-4xl font-mono font-normal" value="username"></input>
                        </form>
                </div>
                <div className="email-block">
                        <p className="email text-midnight text-4xl font-mono font-normal">
                            EMAIL:
                        </p>
                        <form> 
                            <input type="text" className="current-username border-2 border-midnight w-60 h-8 text-midnight text-4xl font-mono font-normal" value="email"></input>
                        </form>
                </div>
            </div>
            <p className='change-information text-midnight text-4xl font-mono font-normal'>Change Your Password Or Email</p>
            <div className="change-info">
                <div className="change-email">
                    <form id="email form" method="post">
                        <p className="enter-new-email-text text-midnight text-2xl font-mono font-normal">Enter New Email:</p>
                        <input type="text" className="email-input w-60 border-2 border-midnight"></input>
                        <p className="enter-new-email-text text-midnight text-2xl font-mono font-normal">Confirm New Email:</p>
                        <input type="text" className="confirm-email-input w-60 border-2 border-midnight"></input>
                        <button className="submitButton border-2 border-midnight text-midnight text-2xl font-mono font-normal ml-2" type="submit" class="btn">Submit</button>
                    </form>
                </div>
                <div className="change-password">
                    <form id="password form" method="post">
                    <p className="enter-new-password-text text-midnight text-2xl font-mono font-normal">Enter New Password:</p>
                    <input type="text" className="password-input w-60 border-2 border-midnight"></input>
                    <p className="enter-new-password-text text-midnight text-2xl font-mono font-normal">Confirm New Password:</p>
                    <input type="text" className="confirm-password-input w-60 border-2 border-midnight"></input>
                    <button className="submitButton border-2 border-midnight text-midnight text-2xl font-mono font-normal ml-2" type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default Profile;