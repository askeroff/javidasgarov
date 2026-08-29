import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout/Layout';

const Arrow = () => <span aria-hidden="true">↗</span>;

function IndexPage() {
  return (
    <Layout>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Javid Asgarov, home">JA<span className="brand-dot">.</span></a>
        <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#now">Now</a><a href="#contact">Links</a></nav>
        <div className="availability"><span /> Work in progress</div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Javid Asgarov · Web developer</p>
            <h1>I make things<br /><em>for the web.</em></h1>
            <p className="hero-intro">This used to be an old portfolio. I’m slowly turning it into something new. For now, it’s a small corner of the internet with my name on it.</p>
            <div className="hero-actions"><a className="button button-primary" href="#now">What’s happening <span aria-hidden="true">↓</span></a><a className="text-link" href="https://github.com/askeroff" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
          </div>
          <div className="hero-visual" aria-label="Javid Asgarov">
            <div className="portrait-frame"><img src="/javid-asgarov.jpg" alt="Javid Asgarov" /></div>
            <div className="code-note" aria-hidden="true"><span>STATUS</span><code>still figuring it out</code></div>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </section>

        <section className="manifesto section-shell" id="about">
          <p className="section-label">About</p>
          <p className="manifesto-copy">I’m a software engineer. Most of my work happens somewhere between <em>JavaScript</em>, TypeScript, and the browser.</p>
          <div className="capabilities">
            <article><span>01</span><h2>At work</h2><p>I build and maintain web applications. That’s the main thing.</p></article>
            <article><span>02</span><h2>On the side</h2><p>I try things, leave some unfinished, and occasionally put code on GitHub.</p></article>
            <article><span>03</span><h2>This website</h2><p>A placeholder for now. It can grow when there is something worth adding.</p></article>
          </div>
        </section>

        <section className="work section-shell" id="now">
          <div className="wip-layout">
            <div><p className="section-label">Right now</p><span className="wip-stamp">WIP</span></div>
            <div className="wip-copy"><h2>This is a work<br />in progress.</h2><p>No case studies. No shiny project cards. Nothing pretending to be more finished than it is. I’ll add things here when I actually have something I want to show.</p></div>
          </div>
        </section>

        <section className="proof section-shell">
          <p className="section-label">Elsewhere</p>
          <div className="proof-grid">
            <div className="proof-stat"><strong>Hi.</strong><span>That’s all<br />for now.</span></div>
            <blockquote>You can still find me in the usual places.</blockquote>
            <div className="proof-links"><a href="https://github.com/askeroff" target="_blank" rel="noreferrer"><span>GitHub</span><Arrow /></a><a href="https://stackoverflow.com/users/4208724/javid-asgarov" target="_blank" rel="noreferrer"><span>Stack Overflow</span><Arrow /></a><a href="https://www.linkedin.com/in/javidasgarov" target="_blank" rel="noreferrer"><span>LinkedIn</span><Arrow /></a></div>
          </div>
        </section>

        <section className="contact section-shell" id="contact"><p className="section-label">That’s it</p><h2>More later.<br /><em>Probably.</em></h2><a className="button button-light" href="https://www.linkedin.com/in/javidasgarov" target="_blank" rel="noreferrer">Find me on LinkedIn <Arrow /></a></section>
      </main>

      <footer className="site-footer section-shell"><p>© {new Date().getFullYear()} Javid Asgarov</p><div><a href="https://github.com/askeroff" target="_blank" rel="noreferrer">GitHub</a><a href="https://twitter.com/javidasgarov" target="_blank" rel="noreferrer">X / Twitter</a><a href="https://www.linkedin.com/in/javidasgarov" target="_blank" rel="noreferrer">LinkedIn</a></div><a href="#top">Back to top ↑</a></footer>
    </Layout>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <><title>Javid Asgarov — Web Developer</title><meta name="description" content="Javid Asgarov is a software engineer working on the web. This site is a work in progress." /><meta property="og:title" content="Javid Asgarov — Web Developer" /><meta property="og:description" content="A small corner of the internet. Work in progress." /><meta property="og:type" content="website" /><meta property="og:url" content="https://www.javidasgarov.com" /></>;
