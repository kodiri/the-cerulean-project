import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer.js';
import JavaScriptPlaylist from '../../components/youtubeplayer/JavaScriptPlaylist.js';
import './javascript.scss';

class JavaScript extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <JavaScriptPlaylist />
                <Footer />
            </div>
        )
    }
}

export default JavaScript;