import React from 'react'

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer">
    <div className="row">
        <ul className="footer__social-links">
            <li className="footer__social-link-item">
                <a href="https://github.com/lakindu62" title="Link to Github Profile" target="_blank">
                    <img src="/images/github.svg" className="footer__social-image" alt="Github" />
                </a>
            </li>
            <li className="footer__social-link-item">
                <a href="https://www.linkedin.com/in/lakindu-rathmanagolla-aa8b3a26a/" target="_blank">
                    <img src="/images/linkedin.svg" title="Link to Linkedin Profile" className="footer__social-image" alt="Linkedin" />
                </a>
            </li>
        </ul>
    </div>
</footer>
  )
}
