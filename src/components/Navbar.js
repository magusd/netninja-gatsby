import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site{ 
        siteMetadata {
          title
        }
      }
    }
  `)
  const {title} = data.site.siteMetadata
  return (
    <nav>
      <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
