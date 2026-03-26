import { useState, useEffect } from "react";
import { STATIC_PAGES } from "./pages";

// ============================================================
// SHIELDBYTE — VPN & Cybersecurity Affiliate Blog
// Dark cyberpunk / hacker aesthetic
// ============================================================

const ARTICLES = [
  {
    id: "best-vpn-2026",
    category: "VPN Reviews",
    title: "Best VPNs of 2026: 8 Services Tested & Ranked",
    excerpt: "We ran speed tests, checked for DNS leaks, and tested streaming access across 8 top VPNs. Here are the results.",
    readTime: "12 min read",
    date: "Mar 2026",
    icon: "🔐",
    gradient: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
    content: `
      <div class="disclosure">⚡ <strong>Disclosure:</strong> This article contains affiliate links. We may earn a commission when you sign up through our links, at no extra cost to you. This helps fund our independent testing.</div>
      <p>We spent over 80 hours testing 8 of the most popular VPN services across speed, security, streaming access, and value. Every VPN was tested on the same hardware, from the same locations, during the same time periods to ensure fair results.</p>
      
      <h2>Quick Comparison</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>VPN</th><th>Best For</th><th>Price</th><th>Score</th></tr></thead>
          <tbody>
            <tr><td class="product-name">NordVPN</td><td>Overall best</td><td>$3.39/mo</td><td class="score">9.6</td></tr>
            <tr><td class="product-name">Surfshark</td><td>Best value</td><td>$1.99/mo</td><td class="score">9.2</td></tr>
            <tr><td class="product-name">ExpressVPN</td><td>Streaming</td><td>$3.49/mo</td><td class="score">9.0</td></tr>
            <tr><td class="product-name">ProtonVPN</td><td>Privacy-first</td><td>$3.99/mo</td><td class="score">8.8</td></tr>
            <tr><td class="product-name">Private Internet Access</td><td>Budget + power users</td><td>$2.19/mo</td><td class="score">8.5</td></tr>
          </tbody>
        </table>
      </div>

      <h2>1. NordVPN — Best Overall</h2>
      <div class="product-box">
        <div class="product-rank">#1</div>
        <div class="product-info">
          <h3>NordVPN</h3>
          <div class="product-subtitle">Editor's Choice — Best VPN Overall</div>
          <p>NordVPN delivered the fastest speeds in our testing and consistently unblocked streaming services across every region we tested. Their Threat Protection feature adds an extra layer of security beyond the VPN tunnel itself.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Fastest speeds in testing</span><span class="pro">✓ Works with Netflix, BBC iPlayer, Disney+</span><span class="pro">✓ Independently audited no-logs policy</span></div>
            <div><span class="con">✗ Occasional slow connection times</span><span class="con">✗ Premium tier needed for all features</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Get NordVPN — 74% Off →</a>
        </div>
      </div>
      <p>NordVPN runs 7,200+ servers across 111 countries, giving you massive flexibility for both speed and geo-unblocking. In our speed tests from the US, we averaged 850 Mbps on nearby servers and 400+ Mbps internationally — far ahead of most competitors.</p>
      <p>Their NordLynx protocol (based on WireGuard) is the secret sauce behind these speeds. The kill switch worked flawlessly in testing, and we detected zero DNS or WebRTC leaks across 50+ test sessions.</p>

      <h2>2. Surfshark — Best Value</h2>
      <div class="product-box">
        <div class="product-rank">#2</div>
        <div class="product-info">
          <h3>Surfshark</h3>
          <div class="product-subtitle">Best Budget VPN — Unlimited Devices</div>
          <p>Surfshark offers unlimited simultaneous connections at the lowest price point we tested. A strong choice for families or anyone with multiple devices.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Unlimited device connections</span><span class="pro">✓ Cheapest long-term plan at $1.99/mo</span><span class="pro">✓ CleanWeb ad blocker included</span></div>
            <div><span class="con">✗ Speeds slightly below NordVPN</span><span class="con">✗ Smaller server network (3,200+)</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Get Surfshark — 87% Off →</a>
        </div>
      </div>
      <p>Surfshark's unlimited device policy is a game-changer. Most VPNs limit you to 5-8 devices. With Surfshark, you can protect your entire household — phones, laptops, tablets, smart TVs, routers — all on one plan at $1.99/month.</p>

      <h2>3. ExpressVPN — Best for Streaming</h2>
      <div class="product-box">
        <div class="product-rank">#3</div>
        <div class="product-info">
          <h3>ExpressVPN</h3>
          <div class="product-subtitle">Most Reliable for Streaming & Geo-Unblocking</div>
          <p>ExpressVPN is the most consistently reliable VPN for accessing geo-restricted content. It works with every major streaming platform in our testing.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Works with every streaming service tested</span><span class="pro">✓ Excellent apps across all platforms</span><span class="pro">✓ TrustedServer (RAM-only) technology</span></div>
            <div><span class="con">✗ Most expensive option at $3.49/mo</span><span class="con">✗ Limited to 8 simultaneous connections</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Get ExpressVPN — 73% Off →</a>
        </div>
      </div>

      <h2>4. ProtonVPN — Best for Privacy</h2>
      <div class="product-box">
        <div class="product-rank">#4</div>
        <div class="product-info">
          <h3>ProtonVPN</h3>
          <div class="product-subtitle">Maximum Privacy — Swiss Jurisdiction</div>
          <p>Built by the team behind ProtonMail, this VPN is designed for users who put privacy above everything else. Based in Switzerland with strong legal protections.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Swiss jurisdiction — best privacy laws</span><span class="pro">✓ Open-source apps</span><span class="pro">✓ Secure Core (multi-hop) servers</span></div>
            <div><span class="con">✗ Speeds below NordVPN and Surfshark</span><span class="con">✗ Fewer server locations</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Get ProtonVPN — 50% Off →</a>
        </div>
      </div>

      <h2>How We Test VPNs</h2>
      <p>Every VPN in this list was tested using the same methodology: speed tests from 5 global locations using Ookla Speedtest, DNS leak tests via dnsleaktest.com, WebRTC leak checks, streaming access tests on Netflix US/UK, BBC iPlayer, Disney+, and Hulu, and kill switch reliability testing.</p>
      <p>We pay for all VPN subscriptions ourselves. No VPN company has editorial input over our rankings.</p>

      <h2>Frequently Asked Questions</h2>
      <div class="faq"><strong>Is it legal to use a VPN?</strong><p>Yes, VPNs are legal in most countries including the US, UK, and EU. Some countries like China and Russia restrict VPN usage.</p></div>
      <div class="faq"><strong>Do VPNs slow down your internet?</strong><p>Some speed reduction is normal. The top VPNs in our testing reduced speeds by only 10-15%, which is unnoticeable for most activities.</p></div>
      <div class="faq"><strong>Can I use a free VPN instead?</strong><p>Free VPNs often monetize your data — the opposite of privacy. We recommend paid options starting at just $2-3/month for genuine protection.</p></div>
    `
  },
  {
    id: "nordvpn-vs-surfshark",
    category: "Comparison",
    title: "NordVPN vs Surfshark 2026: Which One Actually Wins?",
    excerpt: "Two of the most popular VPNs go head to head on speed, privacy, price, and streaming. One clear winner emerged.",
    readTime: "9 min read",
    date: "Mar 2026",
    icon: "⚔️",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    content: `
      <div class="disclosure">⚡ <strong>Disclosure:</strong> This article contains affiliate links. We earn a commission at no extra cost to you.</div>
      <p>NordVPN and Surfshark are owned by the same parent company (Nord Security), yet they're quite different products. We tested both extensively to find which one deserves your money.</p>
      
      <h2>Quick Verdict</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Category</th><th>NordVPN</th><th>Surfshark</th><th>Winner</th></tr></thead>
          <tbody>
            <tr><td>Speed</td><td>850 Mbps avg</td><td>720 Mbps avg</td><td class="score">NordVPN</td></tr>
            <tr><td>Price</td><td>$3.39/mo</td><td>$1.99/mo</td><td class="score">Surfshark</td></tr>
            <tr><td>Devices</td><td>10</td><td>Unlimited</td><td class="score">Surfshark</td></tr>
            <tr><td>Servers</td><td>6,400+</td><td>3,200+</td><td class="score">NordVPN</td></tr>
            <tr><td>Streaming</td><td>Excellent</td><td>Excellent</td><td class="score">Tie</td></tr>
            <tr><td>Privacy</td><td>Audited</td><td>Audited</td><td class="score">Tie</td></tr>
          </tbody>
        </table>
      </div>
      
      <h2>Speed: NordVPN Wins</h2>
      <p>NordVPN's NordLynx protocol consistently delivered faster speeds in our testing. On nearby servers, NordVPN averaged 850 Mbps versus Surfshark's 720 Mbps. For international connections, the gap was even wider.</p>
      
      <h2>Price: Surfshark Wins</h2>
      <p>Surfshark is simply cheaper. At $1.99/month for the 2-year plan versus NordVPN's $3.39/month, you save about $15/year. Plus, Surfshark includes unlimited device connections — NordVPN limits you to 10.</p>
      
      <h2>Our Recommendation</h2>
      <p><strong>Choose NordVPN if:</strong> You want the fastest speeds, largest server network, and most advanced features. Best for individuals and power users.</p>
      <p><strong>Choose Surfshark if:</strong> You want the best value, need unlimited devices (families), and want solid performance at a lower price.</p>
      <div class="cta-row">
        <a href="#affiliate" class="btn-aff">Get NordVPN — 74% Off →</a>
        <a href="#affiliate" class="btn-aff btn-aff-alt">Get Surfshark — 87% Off →</a>
      </div>
    `
  },
  {
    id: "best-password-manager",
    category: "Password Managers",
    title: "5 Best Password Managers in 2026 (Tested & Compared)",
    excerpt: "Still reusing passwords? These tools fix that. We compared security, ease of use, pricing, and cross-platform support.",
    readTime: "8 min read",
    date: "Feb 2026",
    icon: "🔑",
    gradient: "linear-gradient(135deg, #1B1B2F, #162447, #1F4068)",
    content: `
      <div class="disclosure">⚡ <strong>Disclosure:</strong> This article contains affiliate links.</div>
      <p>The average person has 100+ online accounts. If you're reusing passwords, a single data breach exposes everything. Password managers solve this by generating and storing unique passwords for every account.</p>
      
      <h2>Our Top 5 Picks</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Manager</th><th>Best For</th><th>Price</th><th>Score</th></tr></thead>
          <tbody>
            <tr><td class="product-name">1Password</td><td>Overall best</td><td>$2.99/mo</td><td class="score">9.5</td></tr>
            <tr><td class="product-name">Bitwarden</td><td>Best free option</td><td>Free / $1/mo</td><td class="score">9.2</td></tr>
            <tr><td class="product-name">Dashlane</td><td>Extra features</td><td>$4.99/mo</td><td class="score">8.8</td></tr>
            <tr><td class="product-name">NordPass</td><td>VPN users</td><td>$1.49/mo</td><td class="score">8.5</td></tr>
            <tr><td class="product-name">Keeper</td><td>Enterprise/family</td><td>$2.92/mo</td><td class="score">8.3</td></tr>
          </tbody>
        </table>
      </div>

      <div class="product-box">
        <div class="product-rank">#1</div>
        <div class="product-info">
          <h3>1Password</h3>
          <div class="product-subtitle">Best Password Manager Overall</div>
          <p>1Password combines the best security with the most polished user experience. Watchtower alerts you to compromised passwords, weak credentials, and breached sites automatically.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Best-in-class UI across all platforms</span><span class="pro">✓ Watchtower security monitoring</span><span class="pro">✓ Travel mode hides sensitive vaults</span></div>
            <div><span class="con">✗ No free tier</span><span class="con">✗ Slightly pricier than alternatives</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Try 1Password Free for 14 Days →</a>
        </div>
      </div>

      <div class="product-box">
        <div class="product-rank">#2</div>
        <div class="product-info">
          <h3>Bitwarden</h3>
          <div class="product-subtitle">Best Free Password Manager</div>
          <p>Bitwarden is open-source, independently audited, and offers a genuinely usable free tier. The premium plan at $1/month adds TOTP authentication and advanced features.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Open-source and independently audited</span><span class="pro">✓ Excellent free tier</span><span class="pro">✓ Self-hosting option available</span></div>
            <div><span class="con">✗ UI less polished than 1Password</span><span class="con">✗ Auto-fill occasionally inconsistent</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Try Bitwarden Free →</a>
        </div>
      </div>
    `
  },
  {
    id: "do-you-need-vpn",
    category: "Guides",
    title: "Do You Actually Need a VPN in 2026? (Honest Answer)",
    excerpt: "VPN companies want you scared. We cut through the marketing hype and tell you exactly when a VPN helps — and when it's a waste of money.",
    readTime: "7 min read",
    date: "Feb 2026",
    icon: "🤔",
    gradient: "linear-gradient(135deg, #141E30, #243B55)",
    content: `
      <p>VPN companies spend millions on fear-based marketing: "Hackers are watching you! Your ISP is selling your data! You're one click away from identity theft!" Some of that is true. A lot of it is exaggerated.</p>
      <p>Here's an honest breakdown of when you actually need a VPN and when you're wasting money.</p>
      
      <h2>When You NEED a VPN</h2>
      <div class="faq"><strong>✅ Public Wi-Fi</strong><p>Coffee shops, airports, hotels — these networks are genuinely risky. A VPN encrypts your traffic so nobody on the same network can intercept it. This is the #1 legitimate reason to use a VPN.</p></div>
      <div class="faq"><strong>✅ Bypassing Geo-Restrictions</strong><p>Want to watch content only available in another country? A VPN changes your virtual location. This works for Netflix, BBC iPlayer, sports streams, and more.</p></div>
      <div class="faq"><strong>✅ Privacy from Your ISP</strong><p>Your internet provider can see every website you visit and may sell this data to advertisers. A VPN prevents this by encrypting your traffic.</p></div>
      <div class="faq"><strong>✅ Censored Countries</strong><p>If you're in or traveling to countries with internet censorship (China, Iran, Russia), a VPN is essential for accessing the open internet.</p></div>
      
      <h2>When You DON'T Need a VPN</h2>
      <div class="faq"><strong>❌ "Protecting against hackers"</strong><p>A VPN doesn't protect you from phishing, malware, or weak passwords. Those require good security habits and tools like password managers and 2FA.</p></div>
      <div class="faq"><strong>❌ Complete anonymity</strong><p>VPNs don't make you anonymous. Your VPN provider can still see your traffic. For true anonymity, you'd need Tor — but that's overkill for most people.</p></div>
      
      <h2>Our Verdict</h2>
      <p>If you use public Wi-Fi, want streaming access, or care about ISP privacy, a VPN is worth the $3/month. If you're on a secure home network and don't care about geo-restrictions, you can probably skip it.</p>
      <p>If you do want one, we recommend <strong>NordVPN</strong> for the best overall experience or <strong>Surfshark</strong> for the best value.</p>
      <div class="cta-row">
        <a href="#affiliate" class="btn-aff">Get NordVPN — 74% Off →</a>
        <a href="#affiliate" class="btn-aff btn-aff-alt">Get Surfshark — 87% Off →</a>
      </div>
    `
  },
  {
    id: "best-antivirus-2026",
    category: "Antivirus",
    title: "Best Antivirus Software 2026: Do You Still Need One?",
    excerpt: "Windows Defender has gotten good. But is it enough? We tested 6 antivirus suites to find out who's still worth paying for.",
    readTime: "10 min read",
    date: "Jan 2026",
    icon: "🛡️",
    gradient: "linear-gradient(135deg, #1a1a2e, #0f3460, #16213e)",
    content: `
      <div class="disclosure">⚡ <strong>Disclosure:</strong> This article contains affiliate links.</div>
      <p>Windows Defender has improved dramatically. For most people, it provides solid baseline protection. But premium antivirus suites offer extras that matter: ransomware protection, phishing detection, VPN bundles, dark web monitoring, and identity theft protection.</p>
      
      <h2>Our Top Picks</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Antivirus</th><th>Best For</th><th>Price</th><th>Score</th></tr></thead>
          <tbody>
            <tr><td class="product-name">Bitdefender Total Security</td><td>Overall best</td><td>$49.99/yr</td><td class="score">9.5</td></tr>
            <tr><td class="product-name">Norton 360 Deluxe</td><td>Most features</td><td>$49.99/yr</td><td class="score">9.2</td></tr>
            <tr><td class="product-name">Malwarebytes Premium</td><td>Lightweight</td><td>$44.99/yr</td><td class="score">8.7</td></tr>
            <tr><td class="product-name">Windows Defender</td><td>Free baseline</td><td>Free</td><td class="score">8.0</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="product-box">
        <div class="product-rank">#1</div>
        <div class="product-info">
          <h3>Bitdefender Total Security</h3>
          <div class="product-subtitle">Best Antivirus Overall</div>
          <p>Bitdefender consistently scores highest in independent lab tests from AV-TEST and AV-Comparatives. It's lightweight, feature-rich, and covers up to 5 devices across Windows, Mac, Android, and iOS.</p>
          <div class="pros-cons">
            <div><span class="pro">✓ Top scores in independent lab tests</span><span class="pro">✓ Minimal performance impact</span><span class="pro">✓ VPN included (200MB/day)</span></div>
            <div><span class="con">✗ VPN data limit on basic plan</span><span class="con">✗ Some features Windows-only</span></div>
          </div>
          <a href="#affiliate" class="btn-aff">Get Bitdefender — 60% Off →</a>
        </div>
      </div>
    `
  },
  {
    id: "online-privacy-guide",
    category: "Guides",
    title: "The Complete Online Privacy Guide for 2026",
    excerpt: "A VPN alone isn't enough. Here's a complete step-by-step guide to actually protecting your privacy online.",
    readTime: "15 min read",
    date: "Jan 2026",
    icon: "👁️",
    gradient: "linear-gradient(135deg, #0d1117, #161b22, #21262d)",
    content: `
      <p>If you think installing a VPN makes you "private," think again. True online privacy requires a layered approach. Here's the complete guide.</p>
      
      <h2>Layer 1: Browser & Search</h2>
      <p>Switch from Chrome to <strong>Firefox</strong> or <strong>Brave</strong>. Use <strong>DuckDuckGo</strong> instead of Google. Install <strong>uBlock Origin</strong> to block trackers. These three changes alone eliminate most casual tracking.</p>
      
      <h2>Layer 2: Password Security</h2>
      <p>Use a password manager like <strong>1Password</strong> or <strong>Bitwarden</strong>. Enable 2FA on every important account. Use a unique password for every site. This protects you from data breaches.</p>
      <a href="#affiliate" class="btn-aff" style="margin-bottom:24px">Get 1Password — 14-Day Free Trial →</a>
      
      <h2>Layer 3: VPN</h2>
      <p>A VPN encrypts your internet traffic and hides your IP address. Essential for public Wi-Fi and ISP privacy. We recommend <strong>NordVPN</strong> or <strong>ProtonVPN</strong>.</p>
      <a href="#affiliate" class="btn-aff" style="margin-bottom:24px">Get NordVPN — 74% Off →</a>
      
      <h2>Layer 4: Email Privacy</h2>
      <p>Gmail reads your emails for ad targeting. Switch to <strong>ProtonMail</strong> for encrypted email that even Proton can't read. Use email aliases for signups.</p>
      
      <h2>Layer 5: Device Security</h2>
      <p>Keep your OS and apps updated. Use <strong>Bitdefender</strong> or <strong>Malwarebytes</strong> for malware protection. Enable full-disk encryption on your laptop.</p>
      
      <h2>Layer 6: Phone Privacy</h2>
      <p>Review app permissions. Disable location tracking for apps that don't need it. Use Signal instead of WhatsApp for messaging. Consider a privacy-focused DNS like NextDNS.</p>
    `
  }
];

// --- COMPONENTS ---

const EmailPopup = ({ show, onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  if (!show) return null;
  return (
    <div style={{ position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,0.7)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center" }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#111827",border:"1px solid #1E293B",borderRadius:14,padding:"44px 36px",maxWidth:420,width:"90%",position:"relative",boxShadow:"0 24px 80px rgba(0,0,0,0.5)" }}>
        <button onClick={onClose} style={{ position:"absolute",top:14,right:14,background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#5A6478",lineHeight:1 }}>×</button>
        {!submitted ? (<>
          <div style={{ fontFamily:"var(--fh)",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--ac)",marginBottom:16 }}>Free Security Guide</div>
          <h3 style={{ fontFamily:"var(--fh)",fontSize:22,fontWeight:700,color:"#fff",marginBottom:8 }}>Get the Ultimate VPN & Security Guide</h3>
          <p style={{ color:"#8B95A8",fontSize:14,lineHeight:1.6,marginBottom:24,fontFamily:"var(--fh)",fontWeight:400 }}>Our complete guide to choosing a VPN, setting up a password manager, and protecting your privacy — delivered free to your inbox.</p>
          <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} style={{ width:"100%",padding:"13px 16px",borderRadius:8,border:"1px solid #2A3548",background:"#0A0E17",fontSize:14,color:"#E8ECF2",outline:"none",boxSizing:"border-box",marginBottom:12,fontFamily:"var(--fh)" }} />
          <button onClick={()=>email&&setSubmitted(true)} style={{ width:"100%",padding:"13px",borderRadius:8,background:"var(--ac)",color:"#0A0E17",border:"none",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"var(--fh)" }}>Send Me the Free Guide →</button>
          <p style={{ fontSize:11,color:"#5A6478",marginTop:10,textAlign:"center",fontFamily:"var(--fh)" }}>No spam. Unsubscribe anytime.</p>
        </>) : (
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:44,marginBottom:14 }}>✅</div>
            <h3 style={{ fontFamily:"var(--fh)",fontSize:20,color:"#fff",marginBottom:8 }}>Check your inbox!</h3>
            <p style={{ color:"#8B95A8",fontSize:14,fontFamily:"var(--fh)" }}>Your VPN & Security Guide is on its way.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = ({ onNav }) => (
  <header style={{ borderBottom:"1px solid #1E293B",background:"rgba(10,14,23,0.92)",backdropFilter:"blur(16px)",position:"sticky",top:0,zIndex:100 }}>
    <div style={{ maxWidth:1140,margin:"0 auto",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
      <div onClick={()=>onNav("home")} style={{ cursor:"pointer",display:"flex",alignItems:"center",gap:8 }}>
        <div style={{ width:28,height:28,background:"var(--ac)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#0A0E17",fontWeight:800,fontFamily:"var(--fh)" }}>S</div>
        <span style={{ fontFamily:"var(--fh)",fontSize:20,fontWeight:800,color:"#E8ECF2",letterSpacing:"-0.5px" }}>ShieldPick</span>
      </div>
      <nav style={{ display:"flex",gap:6,alignItems:"center" }}>
        <span onClick={()=>onNav("home")} style={{ fontFamily:"var(--fh)",color:"#8B95A8",fontSize:13,fontWeight:500,padding:"6px 14px",borderRadius:6,cursor:"pointer",transition:"all 0.2s",letterSpacing:"0.2px" }}>VPNs</span>
        <span onClick={()=>onNav("home")} style={{ fontFamily:"var(--fh)",color:"#8B95A8",fontSize:13,fontWeight:500,padding:"6px 14px",borderRadius:6,cursor:"pointer",transition:"all 0.2s",letterSpacing:"0.2px" }}>Antivirus</span>
        <span onClick={()=>onNav("home")} style={{ fontFamily:"var(--fh)",color:"#8B95A8",fontSize:13,fontWeight:500,padding:"6px 14px",borderRadius:6,cursor:"pointer",transition:"all 0.2s",letterSpacing:"0.2px" }}>Passwords</span>
        <span onClick={()=>onNav("page_methodology")} style={{ fontFamily:"var(--fh)",color:"#8B95A8",fontSize:13,fontWeight:500,padding:"6px 14px",borderRadius:6,cursor:"pointer",transition:"all 0.2s",letterSpacing:"0.2px" }}>How We Test</span>
        <span onClick={()=>onNav("page_deals")} style={{ fontFamily:"var(--fh)",background:"var(--ac)",color:"#0A0E17",fontSize:13,fontWeight:600,padding:"6px 14px",borderRadius:6,cursor:"pointer" }}>Deals</span>
      </nav>
    </div>
  </header>
);

const FeaturedCard = () => (
  <section style={{ maxWidth:1140,margin:"0 auto 48px",padding:"0 24px" }}>
    <div style={{ background:"linear-gradient(135deg, #111827 0%, rgba(0,229,160,0.04) 100%)",border:"1px solid #2A3548",borderRadius:14,padding:"36px 40px",display:"flex",alignItems:"center",gap:36,position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",top:0,left:0,width:4,height:"100%",background:"linear-gradient(180deg, #00E5A0, #60A5FA)",borderRadius:"4px 0 0 4px" }} />
      <div style={{ width:80,height:80,background:"rgba(0,229,160,0.12)",border:"1px solid rgba(0,229,160,0.2)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,flexShrink:0 }}>🛡️</div>
      <div style={{ flex:1 }}>
        <div style={{ fontFamily:"var(--fh)",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--ac)",marginBottom:8 }}>★ Editor's Choice — March 2026</div>
        <h3 style={{ fontFamily:"var(--fh)",fontSize:24,fontWeight:700,color:"#fff",marginBottom:6,letterSpacing:"-0.5px" }}>NordVPN — Best Overall VPN</h3>
        <p style={{ color:"#8B95A8",fontSize:15,marginBottom:14,fontFamily:"var(--fh)",fontWeight:400 }}>Fastest speeds in our testing, excellent security audit results, and works reliably with streaming services worldwide.</p>
        <div style={{ display:"flex",gap:24,marginBottom:16,flexWrap:"wrap" }}>
          {[["9.6","/10 Score"],["7,200+","Servers"],["111","Countries"],["$3.39","/mo"]].map(([b,l])=>(
            <span key={l} style={{ fontFamily:"var(--fh)",fontSize:13,color:"#5A6478" }}><strong style={{ color:"var(--ac)" }}>{b}</strong>{l}</span>
          ))}
        </div>
        <a href="#affiliate" style={{ display:"inline-block",fontFamily:"var(--fh)",background:"var(--ac)",color:"#0A0E17",padding:"11px 28px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none" }}>Visit NordVPN →</a>
      </div>
    </div>
  </section>
);

const ArticleCard = ({ article, onNav, idx }) => (
  <div onClick={()=>onNav(article.id)} style={{
    background:"#111827",border:"1px solid #1E293B",borderRadius:10,overflow:"hidden",cursor:"pointer",display:"flex",flexDirection:"column",
    transition:"all 0.3s",animation:`fadeUp 0.5s ease ${idx*0.1}s both`
  }}
  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.borderColor="#2A3548";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.4)";}}
  onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.borderColor="#1E293B";e.currentTarget.style.boxShadow="";}}
  >
    <div style={{ width:"100%",aspectRatio:"16/9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,background:article.gradient,position:"relative" }}>
      {article.icon}
      <div style={{ position:"absolute",bottom:0,left:0,right:0,height:60,background:"linear-gradient(transparent, #111827)" }} />
    </div>
    <div style={{ padding:"18px 22px 22px",flex:1,display:"flex",flexDirection:"column" }}>
      <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:10,fontWeight:500,textTransform:"uppercase",letterSpacing:1.2,color:"var(--ac)",background:"rgba(0,229,160,0.12)",padding:"3px 10px",borderRadius:4,marginBottom:10,width:"fit-content" }}>{article.category}</span>
      <h2 style={{ fontFamily:"var(--fh)",fontSize:18,fontWeight:600,lineHeight:1.35,marginBottom:8,letterSpacing:"-0.3px",color:"#fff" }}>{article.title}</h2>
      <p style={{ color:"#8B95A8",fontSize:14,lineHeight:1.6,marginBottom:14,flex:1,fontFamily:"var(--fh)",fontWeight:400 }}>{article.excerpt}</p>
      <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#5A6478",borderTop:"1px solid #1E293B",paddingTop:12,display:"flex",justifyContent:"space-between" }}>
        <span>{article.date}</span><span>{article.readTime}</span>
      </div>
    </div>
  </div>
);

const ArticlePage = ({ id, onNav, onPopup }) => {
  const article = ARTICLES.find(a=>a.id===id);
  if(!article) return null;
  useEffect(()=>{window.scrollTo(0,0);},[id]);
  return (
    <div style={{ maxWidth:740,margin:"0 auto",padding:"48px 24px 80px" }}>
      <button onClick={()=>onNav("home")} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"var(--fh)",fontSize:14,color:"var(--ac)",marginBottom:32,padding:0 }}>← Back to all articles</button>
      <h1 style={{ fontFamily:"var(--fh)",fontSize:"clamp(28px,4vw,38px)",fontWeight:800,lineHeight:1.2,letterSpacing:"-1px",color:"#fff",marginBottom:16 }}>{article.title}</h1>
      <div style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"#5A6478",marginBottom:28,paddingBottom:24,borderBottom:"1px solid #1E293B",display:"flex",gap:20 }}>
        <span>{article.date}</span><span>By Editorial Team</span><span>{article.readTime}</span>
      </div>
      <div className="article-content" dangerouslySetInnerHTML={{__html:article.content}} />
      <div style={{ marginTop:60,padding:40,background:"linear-gradient(135deg, #111827, rgba(0,229,160,0.06))",border:"1px solid #2A3548",borderRadius:14,textAlign:"center" }}>
        <h3 style={{ fontFamily:"var(--fh)",fontSize:22,fontWeight:700,color:"#fff",marginBottom:8 }}>Stay protected. Stay informed.</h3>
        <p style={{ color:"#8B95A8",fontSize:15,marginBottom:20,fontFamily:"var(--fh)" }}>Get our free VPN & Security guide + weekly threat alerts.</p>
        <button onClick={onPopup} style={{ fontFamily:"var(--fh)",background:"var(--ac)",color:"#0A0E17",border:"none",padding:"13px 28px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer" }}>Get the Free Guide →</button>
      </div>
    </div>
  );
};

const Footer = ({ onNav }) => (
  <footer style={{ borderTop:"1px solid #1E293B",padding:"40px 24px",textAlign:"center" }}>
    <div style={{ maxWidth:1140,margin:"0 auto" }}>
      <div style={{ display:"flex",justifyContent:"center",gap:24,marginBottom:16,flexWrap:"wrap" }}>
        {[["About","page_about"],["How We Test","page_methodology"],["Privacy Policy","page_privacy"],["Affiliate Disclosure","page_disclosure"],["Deals","page_deals"]].map(([label,target])=>(
          <span key={label} onClick={()=>onNav(target)} style={{ fontFamily:"var(--fh)",fontSize:13,color:"#5A6478",cursor:"pointer",transition:"color 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.color="#00E5A0"}
            onMouseLeave={e=>e.currentTarget.style.color="#5A6478"}
          >{label}</span>
        ))}
      </div>
      <div style={{ fontFamily:"var(--fh)",fontSize:12,color:"#5A6478" }}>© 2026 ShieldPick. All rights reserved.</div>
      <div style={{ fontFamily:"var(--fh)",fontSize:12,color:"#5A6478",maxWidth:600,margin:"12px auto 0",lineHeight:1.5 }}>ShieldPick is reader-supported. When you buy through links on our site, we may earn an affiliate commission. This does not influence our editorial recommendations.</div>
    </div>
  </footer>
);

// --- MAIN APP ---
export default function ShieldPick() {
  const [page, setPage] = useState("home");
  const [showPopup, setShowPopup] = useState(false);
  useEffect(()=>{const t=setTimeout(()=>setShowPopup(true),20000);return()=>clearTimeout(t);},[]);

  return (
    <div style={{ minHeight:"100vh",background:"#0A0E17",color:"#E8ECF2" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root { --fh: 'Outfit', sans-serif; --ac: #00E5A0; }
        * { margin:0; padding:0; box-sizing:border-box; }
        body::before { content:''; position:fixed; inset:0; background-image: linear-gradient(rgba(30,41,59,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.15) 1px, transparent 1px); background-size:60px 60px; pointer-events:none; z-index:-1; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .article-content { font-family: 'Outfit', sans-serif; font-size:16px; color:#8B95A8; line-height:1.75; font-weight:400; }
        .article-content h2 { font-family:var(--fh); font-size:24px; font-weight:700; color:#fff; margin:44px 0 16px; letter-spacing:-0.5px; }
        .article-content h3 { font-family:var(--fh); font-size:20px; font-weight:700; color:#fff; margin:8px 0 4px; }
        .article-content p { margin-bottom:20px; }
        .article-content .disclosure { background:rgba(255,179,71,0.08); border:1px solid rgba(255,179,71,0.15); border-radius:8px; padding:12px 18px; font-size:13px; color:#FFB347; margin-bottom:32px; }
        .article-content .table-wrap { border:1px solid #1E293B; border-radius:10px; overflow:hidden; margin:24px 0; }
        .article-content table { width:100%; border-collapse:collapse; font-size:14px; }
        .article-content th { background:#111827; padding:14px 18px; text-align:left; font-weight:600; font-size:12px; text-transform:uppercase; letter-spacing:0.8px; color:#5A6478; border-bottom:1px solid #1E293B; }
        .article-content td { padding:14px 18px; border-bottom:1px solid #1E293B; color:#8B95A8; }
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
        .article-content .btn-aff:hover { background:#fff; }
        .article-content .btn-aff-alt { background:transparent; border:1px solid #00E5A0; color:#00E5A0; margin-left:8px; }
        .article-content .btn-aff-alt:hover { background:#00E5A0; color:#0A0E17; }
        .article-content .cta-row { display:flex; gap:8px; margin-top:24px; flex-wrap:wrap; }
        .article-content .faq { border-bottom:1px solid #1E293B; padding:20px 0; }
        .article-content .faq strong { color:#fff; font-size:16px; display:block; margin-bottom:8px; }
        .article-content .faq p { color:#8B95A8; font-size:15px; margin:0; }
        @media(max-width:768px) {
          .article-content .product-box { flex-direction:column; }
          .article-content .pros-cons { flex-direction:column; }
          nav { display:none !important; }
        }
      `}</style>

      <Header onNav={setPage} />

      {page === "home" ? (<>
        {/* Hero */}
        <section style={{ maxWidth:1140,margin:"0 auto",padding:"80px 24px 60px",textAlign:"center",position:"relative",animation:"fadeUp 0.6s ease-out" }}>
          <div style={{ position:"absolute",top:-60,left:"50%",transform:"translateX(-50%)",width:600,height:400,background:"radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, transparent 70%)",pointerEvents:"none" }} />
          <div style={{ display:"inline-flex",alignItems:"center",gap:6,fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"var(--ac)",background:"rgba(0,229,160,0.12)",border:"1px solid rgba(0,229,160,0.2)",padding:"5px 14px",borderRadius:20,marginBottom:24,letterSpacing:0.5 }}>● Updated March 2026</div>
          <h1 style={{ fontFamily:"var(--fh)",fontSize:"clamp(36px,5.5vw,56px)",fontWeight:800,lineHeight:1.1,letterSpacing:"-2px",marginBottom:20,color:"#fff" }}>
            Your privacy matters.<br/><span style={{ background:"linear-gradient(135deg, #00E5A0, #60A5FA)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>We test what actually protects it.</span>
          </h1>
          <p style={{ color:"#8B95A8",fontSize:19,maxWidth:540,margin:"0 auto",lineHeight:1.7,fontFamily:"var(--fh)",fontWeight:400 }}>Independent VPN and security reviews backed by real testing. No sponsored rankings. No fluff. Just honest answers.</p>
        </section>

        {/* Trust Bar */}
        <div style={{ maxWidth:1140,margin:"0 auto 48px",padding:"0 24px",display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap" }}>
          {[["45+","VPNs Tested"],["200+","Reviews Published"],["0","Sponsored Rankings"],["Monthly","Re-Testing"]].map(([b,l])=>(
            <div key={l} style={{ fontFamily:"var(--fh)",fontSize:13,color:"#5A6478",display:"flex",alignItems:"center",gap:8 }}>
              <strong style={{ color:"#8B95A8",fontSize:18 }}>{b}</strong>{l}
            </div>
          ))}
        </div>

        <FeaturedCard />

        {/* Section Header */}
        <div style={{ maxWidth:1140,margin:"0 auto",padding:"48px 24px 24px",display:"flex",alignItems:"baseline",justifyContent:"space-between" }}>
          <h2 style={{ fontFamily:"var(--fh)",fontSize:22,fontWeight:700,color:"#fff",letterSpacing:"-0.5px" }}>Latest Reviews & Guides</h2>
        </div>

        {/* Article Grid */}
        <div style={{ maxWidth:1140,margin:"0 auto",padding:"0 24px 64px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20 }}>
          {ARTICLES.map((a,i)=><ArticleCard key={a.id} article={a} onNav={setPage} idx={i} />)}
        </div>

        {/* Newsletter */}
        <section style={{ maxWidth:1140,margin:"0 auto 64px",padding:"0 24px" }}>
          <div style={{ background:"linear-gradient(135deg, #111827, rgba(0,229,160,0.06))",border:"1px solid #2A3548",borderRadius:14,padding:48,textAlign:"center" }}>
            <h2 style={{ fontFamily:"var(--fh)",fontSize:26,fontWeight:700,color:"#fff",marginBottom:10 }}>Stay protected. Stay informed.</h2>
            <p style={{ color:"#8B95A8",fontSize:15,marginBottom:24,fontFamily:"var(--fh)" }}>Get our weekly security briefing with the latest VPN deals, threat alerts, and privacy tips.</p>
            <button onClick={()=>setShowPopup(true)} style={{ fontFamily:"var(--fh)",background:"var(--ac)",color:"#0A0E17",border:"none",padding:"13px 28px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer" }}>Get the Free Security Guide →</button>
          </div>
        </section>
      </>) : page.startsWith("page_") ? (
        /* Static Pages (About, Privacy, Disclosure, Methodology, Deals) */
        (() => {
          const pageKey = page.replace("page_", "");
          const staticPage = STATIC_PAGES[pageKey];
          if (!staticPage) return <div style={{padding:"80px 24px",textAlign:"center",color:"#8B95A8"}}>Page not found</div>;
          window.scrollTo(0, 0);
          return (
            <div style={{ maxWidth:740,margin:"0 auto",padding:"48px 24px 80px" }}>
              <button onClick={()=>setPage("home")} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"var(--fh)",fontSize:14,color:"var(--ac)",marginBottom:32,padding:0 }}>← Back to home</button>
              <h1 style={{ fontFamily:"var(--fh)",fontSize:"clamp(28px,4vw,38px)",fontWeight:800,lineHeight:1.2,letterSpacing:"-1px",color:"#fff",marginBottom:24 }}>{staticPage.title}</h1>
              <div className="article-content" dangerouslySetInnerHTML={{ __html: staticPage.content }} />
            </div>
          );
        })()
      ) : (
        <ArticlePage id={page} onNav={setPage} onPopup={()=>setShowPopup(true)} />
      )}

      <Footer onNav={setPage} />
      <EmailPopup show={showPopup} onClose={()=>setShowPopup(false)} />
    </div>
  );
}
