import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BookList = ({books}) => (
    <div className="container">
        {books && books.map((item, i) => {
            let book = item.node.frontmatter
            return (
                <li>
                    {book.thumbnailImage &&
                        <Img fixed={book.thumbnailImage.childImageSharp.fixed} />
                    }
                    <Link to={book.path}>{book.title}</Link>
                </li>
            )
        })}
    </div>
)

export default BookList