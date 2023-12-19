import { CONTENT } from "../../content/content"


const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-header">
                <div>
                    <img src="/assets/images/navbar/logo.svg" className="loader-img" width="74" height="76" alt="..." />
                </div>
                <div>
                    <h1 className="loader-h1">{CONTENT.navbar.navTitle}</h1>
                    <p className="loader-p">{CONTENT.navbar.navDesc}</p>
                </div>
            </div>
            <div className="loader">
                <img src="/assets/images/loader-icon.gif" width="100" height="100" alt="..." />
            </div>
        </div>
    )
}

export default Loader