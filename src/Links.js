import React from 'react';

const Links = (props) => {
    return (
        <div className="Links">
            <div className="double-click-help">Double click to edit a todo.</div>
            <div>Created by <a href="https://github.com/avsssai">Siva Addanki</a></div>
            <div className="desc"> <span>A React implementation of todoMVC.</span> &#8226;
                <span>
                    <a className="github" href="https://github.com/avsssai/todoMVC">github repo</a>
                </span>
            </div>
        </div>
    )
}
export default Links;