import React from "react";

export default function Landing() {
    return (
        <div className="landing" id="/">
            <div className="background">
            </div>
            <div className="left">
                <h1>Commodo elit exercitation..</h1>
                <p>
                    Consequat occaecat reprehenderit nulla duis et laboris non
                    Lorem velit. Sunt reprehenderit elit voluptate sint aliquip
                    minim mollit eu exercitation duis consectetur.
                </p>
                <div className="buttons">
                    <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=tr&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img
                            alt="Get it on Google Play"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=tr&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img
                            alt="Get it on Google Play"
                            src={require("../images/pngwing.com.png")}
                        />
                    </a>
                </div>
            </div>
            <div className="right">
                <img src={require("../images/test1.png")} />
            </div>
        </div>
    );
}
