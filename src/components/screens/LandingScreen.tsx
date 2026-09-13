import { Link } from "@tanstack/react-router";

/** Imported Stitch screen (2). Static content until its feature phase is implemented. */
export function LandingScreen() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-18rem)]">
      <div className="flex flex-col w-full">
        <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-primary/10 via-surface-container-high/40 to-tertiary-fixed-dim/20 blur-3xl opacity-70 rounded-full" />
          <div className="pointer-events-none absolute top-1/3 -right-32 w-80 h-80 bg-secondary-fixed/30 blur-2xl rounded-full" />
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-space-xs bg-surface-container-high text-primary px-space-md py-1.5 rounded-full shadow-sm">
                  <span className="text-base leading-none">✨</span>
                  <span className="font-label-md text-label-md tracking-tight">Learn. Teach. Exchange. Grow. • The #1 Peer Skill Platform</span>
                </div>
                <h1 className="mt-space-md font-display-xl text-display-xl-mobile sm:text-headline-lg lg:text-display-xl text-on-surface tracking-tight max-w-xl">Turn What You Know Into What You Want to Learn.</h1>
                <p className="mt-space-sm font-body-lg text-body-lg text-on-surface-variant max-w-lg">Connect with people, exchange skills, and grow together.</p>
                <div className="mt-space-lg flex flex-wrap items-center gap-space-md w-full sm:w-auto">
                  <Link to="/explore" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-headline-sm text-headline-sm px-7 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:bg-secondary transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <span>Find Your Skill Partner</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                  <Link to="/register" className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-surface-container-low transition-all">
                    <span className="material-symbols-outlined text-[20px] text-primary">verified</span>
                    <span>Offer Your Skills</span>
                  </Link>
                </div>
                <div className="mt-space-lg pt-space-sm flex flex-wrap items-center gap-space-sm sm:gap-space-md">
                  <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm shadow-sm">MK</div>
                    <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-sm text-label-sm shadow-sm">AL</div>
                    <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm shadow-sm">SC</div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">4.9</span>
                  </div>
                  <span className="text-outline-variant">•</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span>⚡</span>
                    <span>No currency needed • 100% peer barter • Free to join</span>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 relative mt-6 lg:mt-0">
                <div className="relative w-full max-w-xl mx-auto">
                  <div className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest p-2">
                    <img alt="Two peers exchanging design and coding knowledge at a table" className="w-full h-auto object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsMZ4yg63YullMtNrRsgWo-D3rFXctEgQcb9HAoeo4hLp1P3oNzNhfTe5GX4HhVT3woy-grmM33OmIaqdqsnIGGEJ3KWeqfv46u_QSMBWY_gWhZyURVNjM_t-LS0KPhEWeqmH0MLHxi6yozTn3eRyiD70eMxLAbkYsdphJSz7ha3rfZFpFZXHGqggkroeTZD7-UuzebZrf-yVXipL9H34bVtT16lvhLFrOIxZWX63QEg-CWC6nEdhlMA" />
                  </div>
                  <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-[22px]">draw</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-semibold">Offer: UI/UX Design</p>
                      <div className="inline-flex items-center gap-1 bg-surface-container-high text-primary px-2 py-0.5 rounded-full mt-0.5">
                        <span className="font-label-sm text-label-sm">⚡ 12 swap requests</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-tertiary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-semibold">Matched with Alex P.</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Python for Figma</p>
                    </div>
                    <div className="ml-2 bg-tertiary-container text-on-tertiary-container px-2.5 py-1 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping" />
                      <span className="font-label-sm text-label-sm font-semibold">95% Match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 lg:py-24 bg-surface-container-low/60">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">SIMPLE 4-STEP PROCESS</span>
              <h2 className="mt-2 font-headline-lg text-headline-lg text-on-surface">How SkillSwap Works</h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-surface-variant">Trading your knowledge is seamless, structured, and completely free.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-12">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg text-outline-variant group-hover:text-primary transition-colors">01</span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">account_circle</span>
                    </div>
                  </div>
                  <h3 className="mt-6 font-headline-sm text-headline-sm text-on-surface">Create Your Profile</h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">Showcase your background, learning goals, and schedule availability.</p>
                </div>
                <div className="mt-6 pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                  <span>Setup in 2 mins</span>
                  <span className="material-symbols-outlined text-[16px]">trending_flat</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg text-outline-variant group-hover:text-primary transition-colors">02</span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                    </div>
                  </div>
                  <h3 className="mt-6 font-headline-sm text-headline-sm text-on-surface">Add Your Skills</h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">List what you can teach (programming, languages, design) and what you want to master.</p>
                </div>
                <div className="mt-6 pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                  <span>Catalog your assets</span>
                  <span className="material-symbols-outlined text-[16px]">trending_flat</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg text-outline-variant group-hover:text-primary transition-colors">03</span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">hub</span>
                    </div>
                  </div>
                  <h3 className="mt-6 font-headline-sm text-headline-sm text-on-surface">Find Your Match</h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">Our smart algorithm pairs you with complementary partners who need what you offer.</p>
                </div>
                <div className="mt-6 pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                  <span>Algorithmic synergy</span>
                  <span className="material-symbols-outlined text-[16px]">trending_flat</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg text-outline-variant group-hover:text-primary transition-colors">04</span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">video_chat</span>
                    </div>
                  </div>
                  <h3 className="mt-6 font-headline-sm text-headline-sm text-on-surface">Start Your Swap</h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">Schedule 1-on-1 virtual sessions, share resources, and exchange feedback.</p>
                </div>
                <div className="mt-6 pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                  <span>Collaborate & thrive</span>
                  <span className="material-symbols-outlined text-[16px]">trending_flat</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">DISCOVER TOP DISCIPLINES</span>
                <h2 className="mt-2 font-headline-lg text-headline-lg text-on-surface">Popular Skills to Learn & Teach</h2>
                <p className="mt-2 font-body-lg text-body-lg text-on-surface-variant max-w-xl">Thousands of members are actively trading skills across these categories right now.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="filter-btn active bg-primary text-on-primary px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm" data-category="all">All Skills</button>
                <button className="filter-btn bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full font-label-md text-label-md transition-all" data-category="tech">Technology</button>
                <button className="filter-btn bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full font-label-md text-label-md transition-all" data-category="design">Design & Creative</button>
                <button className="filter-btn bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full font-label-md text-label-md transition-all" data-category="marketing">Marketing</button>
                <button className="filter-btn bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full font-label-md text-label-md transition-all" data-category="languages">Languages</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mt-10" id="skills-grid">
              <div className="skill-item tech bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">code</span>
                    </div>
                    <span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full">Popular</span>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Web Development</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">React, Next.js, Node.js</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary">group</span>
                    <span className="font-label-sm text-label-sm">320+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item design bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[24px]">palette</span>
                    </div>
                    <span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full">Trending</span>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Graphic Design</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Figma, Brand Identity, Illustration</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-secondary">group</span>
                    <span className="font-label-sm text-label-sm">280+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item tech bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[24px]">table_chart</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Excel & Data Analysis</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">VLOOKUP, Pivot Tables, PowerBI</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">group</span>
                    <span className="font-label-sm text-label-sm">190+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item marketing bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">campaign</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Digital Marketing</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">SEO, Growth, Content Strategy</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary">group</span>
                    <span className="font-label-sm text-label-sm">175+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item design bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[24px]">photo_camera</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Photography</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Lightroom, Portraiture, Composition</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-on-surface">group</span>
                    <span className="font-label-sm text-label-sm">140+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item design bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[24px]">movie_edit</span>
                    </div>
                    <span className="bg-surface-container text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full">High demand</span>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Video Editing</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Premiere Pro, DaVinci, Short-form</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-secondary">group</span>
                    <span className="font-label-sm text-label-sm">210+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item languages bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[24px]">translate</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Languages</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Spanish, Japanese, Conversational French</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">group</span>
                    <span className="font-label-sm text-label-sm">310+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="skill-item tech bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">terminal</span>
                    </div>
                    <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full">Top rated</span>
                  </div>
                  <h3 className="mt-4 font-headline-sm text-headline-sm text-on-surface">Programming</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Python, Algorithms, Backend APIs</p>
                  <div className="mt-4 flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary">group</span>
                    <span className="font-label-sm text-label-sm">420+ Mentors active</span>
                  </div>
                </div>
                <Link to="/explore" className="mt-6 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary group">
                  <span>View Swappers</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24 bg-surface-container-low/70">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">INTELLIGENT PAIRING</span>
              <h2 className="mt-2 font-headline-lg text-headline-lg text-on-surface">Smart Matching in Action</h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-surface-variant">You teach what they want to learn, and they teach what you want to learn.</p>
            </div>
            <div className="mt-12 bg-surface-container-lowest p-6 lg:p-10 rounded-3xl shadow-xl max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
                <div className="lg:col-span-4 bg-surface p-6 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary font-headline-md text-headline-md shadow-inner">SC</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">Sarah Chen</h3>
                        <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Graphic Designer & Illustrator</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="bg-surface-container-low p-3.5 rounded-xl">
                      <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider block">Offers</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="material-symbols-outlined text-[18px] text-primary">brush</span>
                        Figma & Branding
                      </span>
                    </div>
                    <div className="bg-tertiary-fixed/30 p-3.5 rounded-xl">
                      <span className="font-label-sm text-label-sm text-tertiary font-semibold uppercase tracking-wider block">Wants to Learn</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">code</span>
                        Python for Data Automation
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 flex flex-col items-center justify-center text-center py-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-24 h-24 bg-tertiary-fixed-dim/40 rounded-full blur-xl animate-pulse" />
                    <div className="relative bg-tertiary-container text-on-tertiary-container px-5 py-3 rounded-2xl shadow-lg flex flex-col items-center">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-ping" />
                        <span className="font-display-xl-mobile text-display-xl-mobile font-bold leading-none">95%</span>
                      </div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wide mt-1">Match Score</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[28px] animate-pulse">swap_horiz</span>
                  </div>
                  <span className="mt-1 font-label-md text-label-md text-tertiary font-semibold bg-tertiary-fixed px-3 py-1 rounded-full">Complementary Match Found!</span>
                </div>
                <div className="lg:col-span-4 bg-surface p-6 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary font-headline-md text-headline-md shadow-inner">DM</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">David Miller</h3>
                        <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Software Engineer</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="bg-surface-container-low p-3.5 rounded-xl">
                      <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider block">Offers</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
                        Python & React
                      </span>
                    </div>
                    <div className="bg-tertiary-fixed/30 p-3.5 rounded-xl">
                      <span className="font-label-sm text-label-sm text-tertiary font-semibold uppercase tracking-wider block">Wants to Learn</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">design_services</span>
                        UI/UX Design Systems
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 bg-surface-container-low/50 rounded-xl p-4 text-center">
                <p className="font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">savings</span>
                  <span>Both users save $80/hr on tutoring costs while building a lasting professional friendship.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-3xl shadow-md">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y-0">
                <div className="flex flex-col items-center">
                  <span className="font-display-xl text-display-xl-mobile sm:text-headline-lg lg:text-display-xl text-primary font-extrabold tracking-tight">1,200+</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Users</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Active community members</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display-xl text-display-xl-mobile sm:text-headline-lg lg:text-display-xl text-secondary font-extrabold tracking-tight">350+</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Skills</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Available across creative & tech fields</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display-xl text-display-xl-mobile sm:text-headline-lg lg:text-display-xl text-tertiary-container font-extrabold tracking-tight">580+</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Successful Swaps</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Completed peer-to-peer sessions</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-display-xl text-display-xl-mobile sm:text-headline-lg lg:text-display-xl text-on-surface font-extrabold tracking-tight">4.8</span>
                    <div className="flex items-center text-amber-500">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Average Rating</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Based on 850+ peer reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24 bg-surface-container-low/50">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">SUCCESS STORIES</span>
              <h2 className="mt-2 font-headline-lg text-headline-lg text-on-surface">Loved by Lifelong Learners</h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-surface-variant">See how SkillSwap is helping creators and students level up.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-12">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">“I traded my React knowledge for 6 weeks of conversational Spanish with a native speaker in Madrid. We both leveled up without spending a dime.”</p>
                </div>
                <div className="mt-8 pt-4 bg-surface rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-label-md text-label-md text-primary font-bold">MP</div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Maya Patel</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Computer Science Student at UC Berkeley</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                    <span>Swapped: Web Dev ⇄ Spanish</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">“Found an experienced financial analyst who taught me advanced Excel models in exchange for a full brand refresh of his portfolio. The mutual accountability was unmatched.”</p>
                </div>
                <div className="mt-8 pt-4 bg-surface rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-label-md text-label-md text-secondary font-bold">LT</div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Liam Thorne</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Freelance Brand Designer</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                    <span>Swapped: Design ⇄ Financial Modeling</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">“The smart matching paired me in less than 24 hours with a developer who wanted to understand SEO. The 95% match accuracy is real—our skill goals aligned seamlessly.”</p>
                </div>
                <div className="mt-8 pt-4 bg-surface rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-label-md text-label-md text-tertiary font-bold">ER</div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Elena Rostova</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Marketing Manager</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                    <span>Swapped: Growth Marketing ⇄ Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary rounded-3xl p-8 sm:p-14 lg:p-16 text-center shadow-2xl">
              <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 bg-on-tertiary-container/20 blur-3xl rounded-full" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 bg-secondary-container/30 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <h2 className="font-display-xl text-display-xl-mobile sm:text-headline-lg lg:text-display-xl font-extrabold tracking-tight">Ready to exchange your skills?</h2>
                <p className="mt-4 font-body-lg text-body-lg text-on-primary-container max-w-lg">Join over 1,200+ curious learners and professionals trading expertise today.</p>
                <Link to="/register" className="mt-8 inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-primary font-headline-sm text-headline-sm px-8 py-4 rounded-xl shadow-lg hover:bg-surface hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span>Get Started</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-on-primary-container font-label-md text-label-md">
                  <span>✓ No credit card required</span>
                  <span>✓ Takes 2 minutes to set up</span>
                  <span>✓ Free forever for peers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
