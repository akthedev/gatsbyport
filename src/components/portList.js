import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PortList = ({portv}) => (
    <ul>
        {portv && portv.map((item, i) => {
            let port = item.node.frontmatter
            return (
                <li>
                    {port.thumbnailImage &&
                        <Img fixed={port.thumbnailImage.childImageSharp.fixed} />
                    }
                    <Link to={port.path}>{port.title}</Link>
                </li>
            )
        })}
    </ul>
)

export default PortList