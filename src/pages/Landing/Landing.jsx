import './Landing.css'

const Landing = () => {

    return (
        <div className='landing'>
            <div className='bubble'></div>
            <div className='bubble2'></div>
            <div className='bubble3'></div>
            <div className='landing-wrap'>
                <h1 className='landing-title'>SOMETHING AWESOME IS COMING SOON</h1>
                <p className='landing-text'>Your all-in-one affliate marketing tracking software <b>track, automate and optimize </b>your campaigns</p>
                <div className='landing-time'>
                    <div className='landing-hour'>
                        <h2>7</h2>
                        <p>Days</p>
                    </div>
                    <div className='landing-hour'>
                        <h2>24</h2>
                        <p>Hours</p>
                    </div>
                    <div className='landing-hour'>
                        <h2>54</h2>
                        <p>Minutes</p>
                    </div>
                    <div className='landing-hour'>
                        <h2>11</h2>
                        <p>Seconds</p>
                    </div>
                </div>
                <form className='landing-form'>
                    <div className='form-group'>
                        <div className='form-group-div'>
                            <input type='text' name='firstname' placeholder='First Name.' className='form-group-input'/>
                        </div>
                        <div className='form-group-div'>
                            <input type='text' name='lastname' placeholder='Last Name.' className='form-group-input'/>
                        </div>
                    </div>
                    <div className='form-group-cta'>
                        <div className='form-group-email'>
                            <input type='email' name='email' placeholder='Enter your email address.' className='form-group-input-email'/>
                        </div>
                        <button type='submit' className='form-group-btn'>
                            Join our waiting list
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Landing;