// ============================================================
// SHIELDPICK — Static Pages (About, Privacy, Disclosure, How We Test)
// ============================================================

export const STATIC_PAGES = {
  about: {
    title: "About ShieldPick",
    content: `
      <h2>Who We Are</h2>
      <p>ShieldPick is an independent cybersecurity review site founded in 2026. We test VPNs, password managers, antivirus software, and other security tools so you can make informed decisions about your digital privacy.</p>
      <p>We believe everyone deserves honest, unbiased reviews — not rankings influenced by the highest bidder.</p>

      <h2>Our Mission</h2>
      <p>The cybersecurity market is flooded with marketing hype. VPN companies want you to think you'll be hacked without their product. Antivirus vendors use scare tactics to push upgrades. We cut through that noise.</p>
      <p>Every product we review is tested by our editorial team using standardized methodology. We measure real-world performance — speed, security, usability, and value — and report what we find, whether it's good or bad.</p>

      <h2>How We Make Money</h2>
      <p>ShieldPick is reader-supported. When you click an affiliate link on our site and purchase a product, we may earn a commission at no extra cost to you. This is how we fund our testing and keep the site running.</p>
      <p><strong>Important:</strong> Affiliate relationships never influence our editorial rankings or scores. We've given low scores to products with high commissions, and high scores to products with no affiliate program at all. Our reputation depends on honest reviews.</p>

      <h2>Our Team</h2>
      <div class="product-box">
        <div class="product-rank">👤</div>
        <div class="product-info">
          <h3>Editorial Team</h3>
          <div class="product-subtitle">Security Researchers & Writers</div>
          <p>Our team includes cybersecurity professionals, privacy advocates, and tech journalists with years of experience testing and reviewing security products. We stay up to date with the latest threats, vulnerabilities, and industry developments to ensure our reviews reflect current reality.</p>
        </div>
      </div>

      <h2>Contact Us</h2>
      <p>Have a question, suggestion, or correction? We'd love to hear from you.</p>
      <p>Email: <strong>hello@shieldpick.com</strong></p>
      <p>For business inquiries: <strong>partnerships@shieldpick.com</strong></p>
    `
  },

  methodology: {
    title: "How We Test",
    content: `
      <h2>Our Testing Methodology</h2>
      <p>Every product reviewed on ShieldPick goes through a rigorous, standardized testing process. We don't just read spec sheets — we install, configure, and use every product ourselves.</p>

      <h2>VPN Testing</h2>
      <p>Our VPN reviews are based on the following criteria, each weighted to produce a final score out of 10:</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Criteria</th><th>Weight</th><th>What We Test</th></tr></thead>
          <tbody>
            <tr><td class="product-name">Speed</td><td class="score">25%</td><td>Download/upload speeds to 10+ server locations using Ookla Speedtest</td></tr>
            <tr><td class="product-name">Security</td><td class="score">25%</td><td>Encryption protocols, DNS/WebRTC leak tests, kill switch reliability</td></tr>
            <tr><td class="product-name">Privacy</td><td class="score">20%</td><td>Logging policy, independent audits, jurisdiction, transparency reports</td></tr>
            <tr><td class="product-name">Streaming</td><td class="score">15%</td><td>Netflix, Disney+, BBC iPlayer, Hulu, Amazon Prime unblocking</td></tr>
            <tr><td class="product-name">Value</td><td class="score">15%</td><td>Price per month, device limits, features included, money-back guarantee</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Speed Testing Protocol</h3>
      <p>All speed tests are conducted on a 1 Gbps fiber connection using a Windows 11 machine. We test each VPN at minimum 3 times per server location at different times of day, and report the average. Server locations tested: US (New York, Los Angeles), UK (London), Germany (Frankfurt), Japan (Tokyo), Australia (Sydney), Singapore, Canada (Toronto), Netherlands (Amsterdam), Brazil (São Paulo).</p>

      <h3>Security Testing Protocol</h3>
      <p>We verify encryption using Wireshark packet analysis. DNS leak tests are performed using browserleaks.com, dnsleaktest.com, and ipleak.net. Kill switch testing involves forcibly dropping the VPN connection and monitoring for IP exposure. WebRTC leak tests are performed in Chrome, Firefox, and Edge.</p>

      <h3>Privacy Assessment</h3>
      <p>We review the VPN's privacy policy in detail, check for independent security audits (PwC, Deloitte, Cure53, etc.), evaluate the jurisdiction's data retention laws, and review the company's track record on transparency and data requests from authorities.</p>

      <h2>Password Manager Testing</h2>
      <p>We evaluate password managers on: security architecture (zero-knowledge encryption), cross-platform compatibility, autofill reliability, password generation quality, sharing features, 2FA support, and pricing.</p>

      <h2>Antivirus Testing</h2>
      <p>We reference independent lab results from AV-TEST and AV-Comparatives, then supplement with our own real-world testing: installation impact on system performance, false positive rates, feature completeness, and user interface quality.</p>

      <h2>Re-Testing Schedule</h2>
      <p>We re-test all products on a monthly basis to ensure our reviews stay current. VPN speeds fluctuate, features change, and prices update — our reviews should reflect current reality, not a snapshot from months ago.</p>

      <h2>Editorial Independence</h2>
      <p>No company can pay for a higher ranking on ShieldPick. Our affiliate relationships are clearly disclosed, and our editorial team has final say on all scores and recommendations. We've declined partnership offers from companies that requested editorial influence.</p>
    `
  },

  privacy: {
    title: "Privacy Policy",
    content: `
      <p><em>Last updated: March 2026</em></p>

      <h2>Information We Collect</h2>
      <p>ShieldPick collects minimal data from visitors:</p>
      <p><strong>Analytics:</strong> We use privacy-respecting analytics to understand which articles are most helpful. This data is aggregated and cannot identify individual users.</p>
      <p><strong>Email subscriptions:</strong> If you voluntarily subscribe to our newsletter, we collect your email address. You can unsubscribe at any time.</p>
      <p><strong>Cookies:</strong> We use essential cookies for site functionality and affiliate link tracking. No advertising cookies are used.</p>

      <h2>How We Use Your Information</h2>
      <p>Email addresses are used solely for sending our newsletter. We never sell, rent, or share your email with third parties.</p>
      <p>Analytics data helps us understand which content is most useful so we can create better reviews and guides.</p>

      <h2>Affiliate Links</h2>
      <p>When you click an affiliate link on our site, the affiliate network (such as Impact, CJ Affiliate, or the VPN provider's own program) may place a cookie on your browser to track the referral. This is standard practice for affiliate marketing and is how we earn commissions that fund our testing.</p>

      <h2>Third-Party Services</h2>
      <p>We use the following third-party services:</p>
      <p>• <strong>Vercel</strong> — Website hosting<br/>• <strong>Mailchimp/MailerLite</strong> — Email newsletter delivery<br/>• <strong>Affiliate networks</strong> — Referral tracking (NordVPN, Surfshark, ExpressVPN, etc.)</p>

      <h2>Your Rights</h2>
      <p>You have the right to: access the data we hold about you, request deletion of your data, unsubscribe from emails at any time, and opt out of cookies through your browser settings.</p>

      <h2>Contact</h2>
      <p>For privacy-related questions: <strong>privacy@shieldpick.com</strong></p>
    `
  },

  disclosure: {
    title: "Affiliate Disclosure",
    content: `
      <h2>How ShieldPick Makes Money</h2>
      <p>ShieldPick is a free resource. We do not charge readers for access to our reviews, guides, or comparisons. Instead, we earn money through affiliate commissions.</p>

      <h2>What Are Affiliate Links?</h2>
      <p>Some links on ShieldPick are "affiliate links." This means that if you click on the link and purchase the product, ShieldPick will receive a commission from the seller. This comes at <strong>no additional cost to you</strong> — you pay the same price whether you use our link or go directly to the website.</p>

      <h2>Which Products Have Affiliate Relationships?</h2>
      <p>We currently have affiliate partnerships with:</p>
      <p>• NordVPN<br/>• Surfshark<br/>• ExpressVPN<br/>• ProtonVPN<br/>• 1Password<br/>• Bitwarden<br/>• Bitdefender<br/>• Norton</p>
      <p>This list may change over time. Not all products we review have affiliate programs — and we review those products anyway, because our job is to help you make informed decisions.</p>

      <h2>Does This Affect Our Reviews?</h2>
      <p><strong>No.</strong> Our editorial rankings and scores are determined solely by our testing results and editorial judgment. We have given low scores to products with lucrative affiliate programs, and high scores to products with no affiliate program at all.</p>
      <p>Our reputation depends on trust. If we started ranking products by commission instead of quality, you'd stop reading — and we'd lose our business. Honest reviews are not just our ethical obligation, they're our business model.</p>

      <h2>How to Identify Affiliate Links</h2>
      <p>Affiliate links on ShieldPick are typically buttons that say "Get [Product Name]" or "Visit [Product Name]." All article pages containing affiliate links include a disclosure notice at the top.</p>

      <h2>FTC Compliance</h2>
      <p>This disclosure is provided in accordance with the Federal Trade Commission's guidelines on endorsements and testimonials.</p>

      <h2>Questions?</h2>
      <p>If you have any questions about our affiliate relationships, email us at <strong>hello@shieldpick.com</strong></p>
    `
  },

  deals: {
    title: "Best VPN Deals — March 2026",
    content: `
      <p>We track the best VPN deals and discounts so you don't have to. All prices verified and updated weekly.</p>

      <div class="product-box">
        <div class="product-rank">🔥</div>
        <div class="product-info">
          <h3>NordVPN — 74% Off</h3>
          <div class="product-subtitle">Best Overall Deal</div>
          <p>2-year plan at $3.39/month (was $11.99). Includes Threat Protection, 6 simultaneous devices, and 30-day money-back guarantee. Our #1 rated VPN.</p>
          <p><strong>Score: 9.6/10</strong></p>
          <a href="#affiliate" class="btn-aff">Get This Deal →</a>
        </div>
      </div>

      <div class="product-box">
        <div class="product-rank">💰</div>
        <div class="product-info">
          <h3>Surfshark — 87% Off</h3>
          <div class="product-subtitle">Best Value Deal</div>
          <p>2-year plan at $1.99/month (was $12.95). Unlimited devices, CleanWeb ad blocker, and 30-day money-back guarantee. Best for families.</p>
          <p><strong>Score: 9.2/10</strong></p>
          <a href="#affiliate" class="btn-aff">Get This Deal →</a>
        </div>
      </div>

      <div class="product-box">
        <div class="product-rank">⚡</div>
        <div class="product-info">
          <h3>ExpressVPN — 73% Off</h3>
          <div class="product-subtitle">Best for Streaming</div>
          <p>1-year plan at $3.49/month (was $12.95). Includes 3 months free. Unblocks every streaming platform. Premium experience.</p>
          <p><strong>Score: 9.0/10</strong></p>
          <a href="#affiliate" class="btn-aff">Get This Deal →</a>
        </div>
      </div>

      <div class="product-box">
        <div class="product-rank">🔒</div>
        <div class="product-info">
          <h3>ProtonVPN — 50% Off</h3>
          <div class="product-subtitle">Best for Privacy</div>
          <p>2-year plan at $3.99/month. Swiss-based, open source, independently audited. Also has a legitimate free tier (the only free VPN we recommend).</p>
          <p><strong>Score: 8.8/10</strong></p>
          <a href="#affiliate" class="btn-aff">Get This Deal →</a>
        </div>
      </div>

      <h2>Password Manager Deals</h2>

      <div class="product-box">
        <div class="product-rank">🔑</div>
        <div class="product-info">
          <h3>1Password — 14 Days Free</h3>
          <div class="product-subtitle">Best Password Manager</div>
          <p>$2.99/month after trial. Our top-rated password manager for individuals and families.</p>
          <a href="#affiliate" class="btn-aff">Start Free Trial →</a>
        </div>
      </div>

      <div class="product-box">
        <div class="product-rank">🆓</div>
        <div class="product-info">
          <h3>Bitwarden — Free Forever</h3>
          <div class="product-subtitle">Best Free Password Manager</div>
          <p>Free tier covers unlimited passwords on unlimited devices. Premium at $10/year adds TOTP and emergency access.</p>
          <a href="#affiliate" class="btn-aff">Get Bitwarden Free →</a>
        </div>
      </div>

      <h2>Antivirus Deals</h2>

      <div class="product-box">
        <div class="product-rank">🛡️</div>
        <div class="product-info">
          <h3>Bitdefender Total Security — 50% Off</h3>
          <div class="product-subtitle">Best Antivirus Overall</div>
          <p>$49.99/year for 5 devices (was $99.99). Top-rated protection with minimal performance impact.</p>
          <a href="#affiliate" class="btn-aff">Get This Deal →</a>
        </div>
      </div>

      <p style="margin-top:32px;padding:16px;background:rgba(0,229,160,0.08);border:1px solid rgba(0,229,160,0.2);border-radius:8px;font-size:13px;color:#00E5A0;">
        <strong>💡 Tip:</strong> Most VPN services offer a 30-day money-back guarantee. You can test the service risk-free and get a full refund if you're not satisfied.
      </p>
    `
  }
};
