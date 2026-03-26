import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import ARTICLES from "./articles";
import PAGES from "./pages";

// ============================================================
// SHIELDPICK v5 — VPN-Focused Affiliate Blog
// Proper routing, SEO paths, VPN-only navigation
// ============================================================

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// --- SEO HEAD ---
function PageHead({ title, description }) {
  useEffect(() => {
    document.title = title || "ShieldPick — Honest VPN Reviews & Comparisons";
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);
  return null;
}

// --- EMAIL POPUP ---
function EmailPopup({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (!show) return null;
  return (
    <div style={{ position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,0.7)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center" }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#111827",border:"1px solid #1E293B",borderRadius:14,padding:"44px 36px",maxWidth:420,width:"90%",position:"relative",boxShadow:"0 24px 80px rgba(0,0,0,0.6)" }}>
        <button onClick={onClose} style={{ position:"absolute",top:14,right:16,background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#5A6478",lineHeight:1 }}>×</button>
        {!done ? (<>
          <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#00E5A0",background:"rgba(0,229,160,0.1)",border:"1px solid rgba(0,229,160,0.2)",padding:"4px 12px",borderRadius:4,display:"inline-block",marginBottom:16 }}>FREE GUIDE</div>
          <h3 style={{ fontFamily:"var(--fh)",fontSize:22,color:"#fff",marginBottom:8,fontWeight:700 }}>Get Our VPN Buyer's Guide</h3>
          <p style={{ color:"#8B95A8",fontSize:14,lineHeight:1.6,marginBottom:20,fontFamily:"var(--fh)" }}>How to choose the right VPN, avoid scams, and set it up properly. Plus our top picks for 2026.</p>
          <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} style={{ width:"100%",padding:"12px 14px",borderRadius:8,border:"1px solid #2A3548",background:"#0A0E17",fontSize:14,color:"#E8ECF2",outline:"none",boxSizing:"border-box",marginBottom:10,fontFamily:"var(--fh)" }} />
          <button onClick={()=>email&&setDone(true)} style={{ width:"100%",padding:12,borderRadius:8,background:"#00E5A0",color:"#0A0E17",border:"none",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"var(--fh)" }}>Download Free Guide →</button>
          <p style={{ fontSize:11,color:"#5A6478",marginTop:10,textAlign:"center",fontFamily:"var(--fh)" }}>No spam. Unsubscribe anytime.</p>
        </>) : (
          <div style={{ textAlign:"center" }}><div style={{ fontSize:44,marginBottom:12 }}>✅</div><h3 style={{ fontFamily:"var(--fh)",fontSize:20,color:"#fff",marginBottom:8 }}>Check your inbox!</h3><p style={{ color:"#8B95A8",fontSize:14,fontFamily:"var(--fh)" }}>Your VPN Buyer's Guide is on its way.</p></div>
        )}
      </div>
    </div>
  );
}

// --- HEADER ---
function Header() {
  const loc = useLocation();
  const navItems = [
    { label: "Reviews", path: "/reviews" },
    { label: "Comparisons", path: "/comparisons" },
    { label: "Guides", path: "/guides" },
    { label: "How We Test", path: "/how-we-test" },
  ];
  return (
    <header style={{ borderBottom:"1px solid #1E293B",background:"rgba(10,14,23,0.92)",backdropFilter:"blur(16px)",position:"sticky",top:0,zIndex:100 }}>
      <div style={{ maxWidth:1140,margin:"0 auto",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <Link to="/" style={{ cursor:"pointer",display:"flex",alignItems:"center",gap:8,textDecoration:"none" }}>
          <div style={{ width:28,height:28,background:"#00E5A0",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#0A0E17",fontWeight:800,fontFamily:"var(--fh)" }}>S</div>
          <span style={{ fontFamily:"var(--fh)",fontSize:20,fontWeight:800,color:"#E8ECF2",letterSpacing:"-0.5px" }}>ShieldPick</span>
        </Link>
        <nav style={{ display:"flex",gap:6,alignItems:"center" }}>
          {navItems.map(n=>(
            <Link key={n.path} to={n.path} style={{
              fontFamily:"var(--fh)",fontSize:13,fontWeight:loc.pathname===n.path?600:500,padding:"6px 14px",borderRadius:6,textDecoration:"none",transition:"all 0.2s",letterSpacing:"0.2px",
              color:loc.pathname===n.path?"#00E5A0":"#8B95A8",background:loc.pathname===n.path?"rgba(0,229,160,0.1)":"transparent"
            }}>{n.label}</Link>
          ))}
          <Link to="/deals" style={{ fontFamily:"var(--fh)",background:"#00E5A0",color:"#0A0E17",fontSize:13,fontWeight:600,padding:"6px 14px",borderRadius:6,textDecoration:"none" }}>Deals</Link>
        </nav>
      </div>
    </header>
  );
}

// --- ARTICLE CARD ---
function ArticleCard({ article, idx }) {
  return (
    <Link to={`/${article.slug}`} style={{ background:"#111827",border:"1px solid #1E293B",borderRadius:10,overflow:"hidden",cursor:"pointer",display:"flex",flexDirection:"column",transition:"all 0.3s",textDecoration:"none",color:"inherit",animation:`fadeUp 0.5s ease ${idx*0.08}s both` }}>
      <div style={{ width:"100%",aspectRatio:"16/9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,background:article.gradient,position:"relative" }}>
        {article.icon}
        <div style={{ position:"absolute",bottom:0,left:0,right:0,height:60,background:"linear-gradient(transparent, #111827)" }} />
      </div>
      <div style={{ padding:"18px 22px 22px",flex:1,display:"flex",flexDirection:"column" }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:10,fontWeight:500,textTransform:"uppercase",letterSpacing:1.2,color:"#00E5A0",background:"rgba(0,229,160,0.12)",padding:"3px 10px",borderRadius:4,marginBottom:10,width:"fit-content" }}>{article.category}</span>
        <h2 style={{ fontFamily:"var(--fh)",fontSize:18,fontWeight:600,lineHeight:1.35,marginBottom:8,letterSpacing:"-0.3px",color:"#fff" }}>{article.title}</h2>
        <p style={{ color:"#C0C5D0",fontSize:14,lineHeight:1.6,marginBottom:14,flex:1,fontFamily:"var(--fh)",fontWeight:400 }}>{article.excerpt}</p>
        <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#5A6478",borderTop:"1px solid #1E293B",paddingTop:12,display:"flex",justifyContent:"space-between" }}>
          <span>{article.date}</span><span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

// --- HOMEPAGE ---
function HomePage({ onPopup }) {
  return (<>
    <PageHead />
    {/* Hero */}
    <section style={{ maxWidth:1140,margin:"0 auto",padding:"80px 24px 60px",textAlign:"center",position:"relative",animation:"fadeUp 0.6s ease-out" }}>
      <div style={{ position:"absolute",top:-60,left:"50%",transform:"translateX(-50%)",width:600,height:400,background:"radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 70%)",pointerEvents:"none" }} />
      <div style={{ display:"inline-flex",alignItems:"center",gap:6,fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"#00E5A0",background:"rgba(0,229,160,0.12)",border:"1px solid rgba(0,229,160,0.2)",padding:"5px 14px",borderRadius:20,marginBottom:24,letterSpacing:0.5,position:"relative" }}>● Updated March 2026</div>
      <h1 style={{ fontFamily:"var(--fh)",fontSize:"clamp(36px,5.5vw,56px)",fontWeight:800,lineHeight:1.1,letterSpacing:"-2px",marginBottom:20,color:"#fff",position:"relative" }}>
        Your privacy matters.<br/><span style={{ background:"linear-gradient(135deg, #00E5A0, #60A5FA)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>We test what actually protects it.</span>
      </h1>
      <p style={{ color:"#8B95A8",fontSize:19,maxWidth:540,margin:"0 auto",lineHeight:1.7,fontFamily:"var(--fh)",fontWeight:400,position:"relative" }}>Independent VPN reviews backed by real testing. No sponsored rankings. No fluff. Just honest answers.</p>
    </section>

    {/* Trust Bar */}
    <div style={{ maxWidth:1140,margin:"0 auto 48px",padding:"0 24px",display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap" }}>
      {[["45+","VPNs Tested"],["200+","Reviews Published"],["0","Sponsored Rankings"],["Monthly","Re-Testing"]].map(([b,l])=>(
        <div key={l} style={{ fontFamily:"var(--fh)",fontSize:13,color:"#5A6478",display:"flex",alignItems:"center",gap:8 }}>
          <strong style={{ color:"#8B95A8",fontSize:18 }}>{b}</strong>{l}
        </div>
      ))}
    </div>

    {/* Quick Comparison Table */}
    <section style={{ maxWidth:1140,margin:"0 auto 48px",padding:"0 24px" }}>
      <h2 style={{ fontFamily:"var(--fh)",fontSize:22,fontWeight:700,color:"#fff",marginBottom:16,letterSpacing:"-0.5px" }}>Top VPNs at a Glance</h2>
      <div style={{ border:"1px solid #1E293B",borderRadius:10,overflow:"hidden" }}>
        <table style={{ width:"100%",borderCollapse:"collapse",fontFamily:"var(--fh)",fontSize:14 }}>
          <thead><tr style={{ background:"#111827" }}>
            <th style={{ padding:"14px 18px",textAlign:"left",fontWeight:600,fontSize:12,textTransform:"uppercase",letterSpacing:0.8,color:"#5A6478",borderBottom:"1px solid #1E293B" }}>VPN</th>
            <th style={{ padding:"14px 18px",textAlign:"left",fontWeight:600,fontSize:12,textTransform:"uppercase",letterSpacing:0.8,color:"#5A6478",borderBottom:"1px solid #1E293B" }}>Best For</th>
            <th style={{ padding:"14px 18px",textAlign:"left",fontWeight:600,fontSize:12,textTransform:"uppercase",letterSpacing:0.8,color:"#5A6478",borderBottom:"1px solid #1E293B" }}>Speed</th>
            <th style={{ padding:"14px 18px",textAlign:"left",fontWeight:600,fontSize:12,textTransform:"uppercase",letterSpacing:0.8,color:"#5A6478",borderBottom:"1px solid #1E293B" }}>Price</th>
            <th style={{ padding:"14px 18px",textAlign:"left",fontWeight:600,fontSize:12,textTransform:"uppercase",letterSpacing:0.8,color:"#5A6478",borderBottom:"1px solid #1E293B" }}>Score</th>
            <th style={{ padding:"14px 18px",textAlign:"left",fontWeight:600,fontSize:12,textTransform:"uppercase",letterSpacing:0.8,color:"#5A6478",borderBottom:"1px solid #1E293B" }}></th>
          </tr></thead>
          <tbody>
            {[
              { name:"NordVPN", best:"Overall best", speed:"850+ Mbps", price:"$3.39/mo", score:"9.6", slug:"nordvpn-review", badge:"#1" },
              { name:"Surfshark", best:"Best value", speed:"720+ Mbps", price:"$1.99/mo", score:"9.2", slug:"surfshark-review", badge:"#2" },
              { name:"ExpressVPN", best:"Streaming", speed:"780+ Mbps", price:"$3.49/mo", score:"9.0", slug:"expressvpn-review", badge:"#3" },
              { name:"ProtonVPN", best:"Privacy-first", speed:"650+ Mbps", price:"$3.99/mo", score:"8.8", slug:"is-vpn-worth-it", badge:"#4" },
            ].map((v,i) => (
              <tr key={v.name} style={{ borderBottom:i<3?"1px solid #1E293B":"none" }}>
                <td style={{ padding:"16px 18px",color:"#fff",fontWeight:600 }}><span style={{ color:"#00E5A0",fontFamily:"'JetBrains Mono',monospace",fontSize:12,marginRight:8 }}>{v.badge}</span>{v.name}</td>
                <td style={{ padding:"16px 18px",color:"#8B95A8" }}>{v.best}</td>
                <td style={{ padding:"16px 18px",color:"#8B95A8" }}>{v.speed}</td>
                <td style={{ padding:"16px 18px",color:"#00E5A0",fontFamily:"'JetBrains Mono',monospace",fontWeight:500 }}>{v.price}</td>
                <td style={{ padding:"16px 18px",color:"#00E5A0",fontFamily:"'JetBrains Mono',monospace",fontWeight:600,fontSize:16 }}>{v.score}</td>
                <td style={{ padding:"16px 18px" }}><Link to={`/${v.slug}`} style={{ fontFamily:"var(--fh)",background:"rgba(0,229,160,0.1)",color:"#00E5A0",padding:"6px 14px",borderRadius:6,fontSize:12,fontWeight:600,textDecoration:"none",border:"1px solid rgba(0,229,160,0.2)" }}>Read Review</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Latest Articles */}
    <div style={{ maxWidth:1140,margin:"0 auto",padding:"24px 24px 16px" }}>
      <h2 style={{ fontFamily:"var(--fh)",fontSize:22,fontWeight:700,color:"#fff",letterSpacing:"-0.5px" }}>Latest Reviews & Guides</h2>
    </div>
    <div style={{ maxWidth:1140,margin:"0 auto",padding:"0 24px 64px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20 }}>
      {ARTICLES.slice(0, 9).map((a,i) => <ArticleCard key={a.id} article={a} idx={i} />)}
    </div>

    {/* Newsletter */}
    <section style={{ maxWidth:1140,margin:"0 auto 64px",padding:"0 24px" }}>
      <div style={{ background:"linear-gradient(135deg, #111827, rgba(0,229,160,0.06))",border:"1px solid #2A3548",borderRadius:14,padding:48,textAlign:"center" }}>
        <h2 style={{ fontFamily:"var(--fh)",fontSize:26,fontWeight:700,color:"#fff",marginBottom:10 }}>Stay protected. Stay informed.</h2>
        <p style={{ color:"#8B95A8",fontSize:15,marginBottom:24,fontFamily:"var(--fh)" }}>Weekly security briefing with the latest VPN deals, threat alerts, and privacy tips.</p>
        <button onClick={onPopup} style={{ fontFamily:"var(--fh)",background:"#00E5A0",color:"#0A0E17",border:"none",padding:"13px 28px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer" }}>Get the Free VPN Guide →</button>
      </div>
    </section>
  </>);
}

// --- CATEGORY PAGE ---
function CategoryPage({ category }) {
  const filtered = ARTICLES.filter(a => a.category === category);
  const titles = { Reviews:"VPN Reviews", Comparisons:"VPN Comparisons", Guides:"VPN Guides" };
  const descs = { Reviews:"In-depth reviews of every major VPN service, tested and scored by our editorial team.", Comparisons:"Side-by-side comparisons to help you choose between the top VPNs.", Guides:"Practical guides on VPN setup, streaming, privacy, and security." };
  return (<>
    <PageHead title={`${titles[category]} | ShieldPick`} description={descs[category]} />
    <div style={{ maxWidth:1140,margin:"0 auto",padding:"60px 24px 16px" }}>
      <h1 style={{ fontFamily:"var(--fh)",fontSize:32,fontWeight:800,color:"#fff",letterSpacing:"-1px",marginBottom:8 }}>{titles[category]}</h1>
      <p style={{ fontFamily:"var(--fh)",fontSize:16,color:"#8B95A8",marginBottom:32 }}>{descs[category]}</p>
    </div>
    <div style={{ maxWidth:1140,margin:"0 auto",padding:"0 24px 64px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20 }}>
      {filtered.length > 0 ? filtered.map((a,i) => <ArticleCard key={a.id} article={a} idx={i} />) : (
        <p style={{ color:"#5A6478",fontFamily:"var(--fh)",gridColumn:"1/-1",textAlign:"center",padding:60 }}>More articles coming soon. <Link to="/" style={{ color:"#00E5A0" }}>View all →</Link></p>
      )}
    </div>
  </>);
}

// --- ARTICLE PAGE ---
function ArticlePage({ onPopup }) {
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) return <div style={{ padding:"80px 24px",textAlign:"center",color:"#8B95A8",fontFamily:"var(--fh)" }}><h1 style={{ color:"#fff",marginBottom:16 }}>Article not found</h1><Link to="/" style={{ color:"#00E5A0" }}>← Back to home</Link></div>;
  return (<>
    <PageHead title={article.metaTitle} description={article.metaDesc} />
    <div style={{ maxWidth:740,margin:"0 auto",padding:"48px 24px 80px" }}>
      <Link to="/" style={{ fontFamily:"var(--fh)",fontSize:14,color:"#00E5A0",textDecoration:"none",display:"inline-block",marginBottom:32 }}>← Back to all articles</Link>
      <span style={{ display:"block",fontFamily:"'JetBrains Mono',monospace",fontSize:10,textTransform:"uppercase",letterSpacing:1.2,color:"#00E5A0",background:"rgba(0,229,160,0.12)",padding:"3px 10px",borderRadius:4,marginBottom:12,width:"fit-content" }}>{article.category}</span>
      <h1 style={{ fontFamily:"var(--fh)",fontSize:"clamp(28px,4vw,38px)",fontWeight:800,lineHeight:1.2,letterSpacing:"-1px",color:"#fff",marginBottom:16 }}>{article.title}</h1>
      <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"#5A6478",marginBottom:28,paddingBottom:24,borderBottom:"1px solid #1E293B",display:"flex",gap:20,flexWrap:"wrap" }}>
        <span>Updated {article.updated}</span><span>By Editorial Team</span><span>{article.readTime}</span>
      </div>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      <div style={{ marginTop:60,background:"linear-gradient(135deg, #111827, rgba(0,229,160,0.06))",border:"1px solid #2A3548",borderRadius:14,padding:40,textAlign:"center" }}>
        <h3 style={{ fontFamily:"var(--fh)",fontSize:22,color:"#fff",marginBottom:8 }}>Want more VPN insights?</h3>
        <p style={{ color:"#8B95A8",fontSize:14,marginBottom:20,fontFamily:"var(--fh)" }}>Get our free VPN buyer's guide plus weekly deals and security tips.</p>
        <button onClick={onPopup} style={{ padding:"12px 28px",borderRadius:8,background:"#00E5A0",color:"#0A0E17",border:"none",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"var(--fh)" }}>Get Free VPN Guide →</button>
      </div>
    </div>
  </>);
}

// --- STATIC PAGE ---
function StaticPage({ pageKey }) {
  const page = PAGES[pageKey];
  if (!page) return null;
  return (<>
    <PageHead title={page.metaTitle} description={page.metaDesc} />
    <div style={{ maxWidth:740,margin:"0 auto",padding:"48px 24px 80px" }}>
      <Link to="/" style={{ fontFamily:"var(--fh)",fontSize:14,color:"#00E5A0",textDecoration:"none",display:"inline-block",marginBottom:32 }}>← Back to home</Link>
      <h1 style={{ fontFamily:"var(--fh)",fontSize:"clamp(28px,4vw,38px)",fontWeight:800,lineHeight:1.2,letterSpacing:"-1px",color:"#fff",marginBottom:24 }}>{page.title}</h1>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  </>);
}

// --- FOOTER ---
function Footer() {
  return (
    <footer style={{ borderTop:"1px solid #1E293B",padding:"40px 24px",textAlign:"center" }}>
      <div style={{ maxWidth:1140,margin:"0 auto" }}>
        <div style={{ display:"flex",justifyContent:"center",gap:24,marginBottom:16,flexWrap:"wrap" }}>
          {[["About","/about"],["How We Test","/how-we-test"],["Privacy Policy","/privacy"],["Affiliate Disclosure","/disclosure"],["Deals","/deals"]].map(([label,path])=>(
            <Link key={path} to={path} style={{ fontFamily:"var(--fh)",fontSize:13,color:"#5A6478",textDecoration:"none" }}>{label}</Link>
          ))}
        </div>
        <div style={{ fontFamily:"var(--fh)",fontSize:12,color:"#5A6478" }}>© 2026 ShieldPick. All rights reserved.</div>
        <div style={{ fontFamily:"var(--fh)",fontSize:12,color:"#5A6478",maxWidth:600,margin:"12px auto 0",lineHeight:1.5 }}>ShieldPick is reader-supported. When you buy through links on our site, we may earn an affiliate commission. This does not influence our editorial recommendations.</div>
      </div>
    </footer>
  );
}

// --- MAIN APP ---
export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShowPopup(true), 25000); return () => clearTimeout(t); }, []);

  return (
    <div style={{ minHeight:"100vh",background:"#0A0E17",color:"#E8ECF2" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root { --fh: 'Outfit', sans-serif; --ac: #00E5A0; }
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0A0E17; }
        body::before { content:''; position:fixed; inset:0; background-image: linear-gradient(rgba(30,41,59,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.12) 1px, transparent 1px); background-size:60px 60px; pointer-events:none; z-index:-1; }
        a:hover { opacity:0.9; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .article-content { font-family: 'Outfit', sans-serif; font-size:16px; color:#D0D5E0; line-height:1.75; font-weight:400; }
        .article-content h2 { font-family:var(--fh); font-size:24px; font-weight:700; color:#fff; margin:44px 0 16px; letter-spacing:-0.5px; }
        .article-content h3 { font-family:var(--fh); font-size:20px; font-weight:700; color:#fff; margin:8px 0 4px; }
        .article-content p { margin-bottom:20px; }
        .article-content strong { color: #E8ECF2; }
        .article-content a { color: #00E5A0; text-decoration: none; }
        .article-content .disclosure { background:rgba(255,179,71,0.08); border:1px solid rgba(255,179,71,0.15); border-radius:8px; padding:12px 18px; font-size:13px; color:#FFB347; margin-bottom:32px; }
        .article-content .table-wrap { border:1px solid #1E293B; border-radius:10px; overflow:hidden; overflow-x:auto; margin:24px 0; }
        .article-content table { width:100%; border-collapse:collapse; font-size:14px; }
        .article-content th { background:#111827; padding:14px 18px; text-align:left; font-weight:600; font-size:12px; text-transform:uppercase; letter-spacing:0.8px; color:#5A6478; border-bottom:1px solid #1E293B; }
        .article-content td { padding:14px 18px; border-bottom:1px solid #1E293B; color:#C8CDD8; }
        .article-content tr:last-child td { border-bottom:none; }
        .article-content .product-name { color:#fff; font-weight:600; }
        .article-content .score { font-family:'JetBrains Mono',monospace; color:#00E5A0; font-weight:500; }
        .article-content .product-box { background:#111827; border:1px solid #1E293B; border-radius:10px; padding:28px; margin:24px 0; display:flex; gap:24px; align-items:flex-start; position:relative; overflow:hidden; }
        .article-content .product-box::before { content:''; position:absolute; top:0; left:0; width:100%; height:3px; background:linear-gradient(90deg, #00E5A0, #60A5FA); border-radius:10px 10px 0 0; }
        .article-content .product-rank { width:48px; height:48px; background:rgba(0,229,160,0.12); border:1px solid rgba(0,229,160,0.2); border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; color:#00E5A0; flex-shrink:0; }
        .article-content .product-info { flex:1; }
        .article-content .product-subtitle { font-size:13px; color:#00E5A0; font-weight:500; margin-bottom:10px; }
        .article-content .pros-cons { display:flex; gap:16px; margin:16px 0; flex-wrap:wrap; }
        .article-content .pros-cons > div { display:flex; flex-direction:column; gap:4px; }
        .article-content .pro { color:#00E5A0; font-size:13px; }
        .article-content .con { color:#FF6B6B; font-size:13px; opacity:0.8; }
        .article-content .btn-aff { display:inline-block; font-family:var(--fh); background:#00E5A0; color:#0A0E17; padding:10px 24px; border-radius:8px; font-size:14px; font-weight:600; text-decoration:none; transition:all 0.2s; margin-top:4px; }
        .article-content .btn-aff:hover { background:#fff; opacity:1; }
        .article-content .btn-aff-alt { background:transparent; border:1px solid #00E5A0; color:#00E5A0; margin-left:8px; }
        .article-content .btn-aff-alt:hover { background:#00E5A0; color:#0A0E17; }
        .article-content .cta-row { display:flex; gap:8px; margin-top:24px; flex-wrap:wrap; }
        .article-content .faq { border-bottom:1px solid #1E293B; padding:20px 0; }
        .article-content .faq strong { color:#fff; font-size:16px; display:block; margin-bottom:8px; }
        .article-content .faq p { color:#C8CDD8; font-size:15px; margin:0; }
        @media(max-width:768px) {
          .article-content .product-box { flex-direction:column; }
          .article-content .pros-cons { flex-direction:column; }
          nav { display:none !important; }
        }
      `}</style>

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage onPopup={()=>setShowPopup(true)} />} />
        <Route path="/reviews" element={<CategoryPage category="Reviews" />} />
        <Route path="/comparisons" element={<CategoryPage category="Comparisons" />} />
        <Route path="/guides" element={<CategoryPage category="Guides" />} />
        <Route path="/about" element={<StaticPage pageKey="about" />} />
        <Route path="/how-we-test" element={<StaticPage pageKey="methodology" />} />
        <Route path="/privacy" element={<StaticPage pageKey="privacy" />} />
        <Route path="/disclosure" element={<StaticPage pageKey="disclosure" />} />
        <Route path="/deals" element={<StaticPage pageKey="deals" />} />
        <Route path="/:slug" element={<ArticlePage onPopup={()=>setShowPopup(true)} />} />
      </Routes>

      <Footer />
      <EmailPopup show={showPopup} onClose={()=>setShowPopup(false)} />
    </div>
  );
}
