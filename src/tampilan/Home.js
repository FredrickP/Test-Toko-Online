import { useEffect, useState } from "react";
const Home = () => {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {

        setUsername(localStorage.getItem('user_name'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setAddress(localStorage.getItem('address'));


    }, []);

    const saveAccount = () => {
        localStorage.setItem('user_name', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('address', address);

        if (address.length > 3 && email.length > 3 && phone.length > 3 && address.length > 3) {
            localStorage.setItem('is_complete', true);
        }

        setShow(false);
    }


    const dialogComponent = () => {
        return (
            <div className="dialog center fixed-full-screen">
                <div className="card app-dialog-content">
                    <div className="">
                        <div class="center"><h4>Update Account</h4></div>
                        <div class="input-wrapper aliceblue outline full-width">
                            <input class="input full-width" type="name" placeholder="Username" value={username}  maxLength={30} onChange={(evt) => {
                                const text = evt.currentTarget.value;
                                setUsername(text);
                            }}/>
                            <div class="horizontal-spacing"></div>
                            <div class="horizontal-spacing"></div>
                        </div>
                        <div class="vertical-spacing"></div>
                        <div class="input-wrapper aliceblue outline full-width">
                            <input class="input full-width" type="name" placeholder="Masukan email anda" value={email} maxLength={30} onChange={(evt) => {
                                const text = evt.currentTarget.value;
                                setEmail(text);
                            }}/>
                            <div class="horizontal-spacing"></div>
                            <div class="horizontal-spacing"></div>
                        </div>
                        <div class="vertical-spacing"></div>
                        <div class="input-wrapper aliceblue outline full-width">
                            <input class="input full-width" type="name" placeholder="Masukan nomor telepon" value={phone} maxLength={30} onChange={(evt) => {
                                const text = evt.currentTarget.value;
                                setPhone(text);
                            }}/>
                            <div class="horizontal-spacing"></div>
                            <div class="horizontal-spacing"></div>
                        </div>
                        <div class="vertical-spacing"></div>
                        <div class="input-wrapper aliceblue outline full-width">
                            <input class="input full-width" type="name" placeholder="Masukkan alamat lengkap" value={address} maxLength={30} onChange={(evt) => {
                                const text = evt.currentTarget.value;
                                setAddress(text);
                            }}/>
                            <div class="horizontal-spacing"></div>
                            <div class="horizontal-spacing"></div>
                        </div>
                        <div class="vertical-spacing"></div>
                        <div class="vertical-spacing"></div>
                        <div className="dialog-footer">
                            <div class={`button primary outline is-left`} onClick={(evt) => {
                                setShow(false);
                            }}>
                                <span>Cancel</span>
                            </div>
                        </div>
                        <div className="dialog-footer">
                            <div class={`button primary is-right`} onClick={(evt) => {
                                saveAccount();
                            }}>
                                <span>Save</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="container">
                <div className="vertical-spacing"></div>
                <span>Username: {localStorage.getItem('user_name')}</span>
                <div className="vertical-spacing"></div>
                <span>Email: {localStorage.getItem('email')}</span>
                <div className="vertical-spacing"></div>
                <span>Telepon: {localStorage.getItem('phone')}</span>
                <div className="vertical-spacing"></div>
                <span>Alamat: {localStorage.getItem('address')}</span>
                <div className="vertical-spacing"></div>
                <div className="center">
                    <div className="button primary" onClick={(evt) => {
                                setShow(true);
                    }}>Lengkapi data diri</div>
                </div>
            </div>
            {show ? dialogComponent() : null}
        </div>
    );
}

export default Home;