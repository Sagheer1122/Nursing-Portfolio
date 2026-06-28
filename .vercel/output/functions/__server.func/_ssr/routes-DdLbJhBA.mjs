import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { a as Languages, c as Briefcase, i as Mail, l as Award, n as Phone, o as Heart, r as MapPin, s as GraduationCap, t as Stethoscope, u as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DdLbJhBA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nurse_hero_default = "/assets/nurse-hero-BbQQxQiv.jpg";
var staggerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: .1 } }
};
var staggerItem = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			ease: "easeOut"
		}
	}
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
				initial: {
					y: -40,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				className: "sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2 font-display text-xl text-plum hover:scale-105 transition-transform duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-5 h-5 text-rose fill-rose" }), " Nimra Noor"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
						children: [
							{
								href: "#about",
								label: "About"
							},
							{
								href: "#experience",
								label: "Experience"
							},
							{
								href: "#education",
								label: "Education"
							},
							{
								href: "#skills",
								label: "Skills"
							},
							{
								href: "#contact",
								label: "Contact"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "relative hover:text-rose transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-rose after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
							children: item.label
						}, item.href))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-blush via-background to-cream" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rose-soft/40 blur-3xl -z-10 animate-pulse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl -z-10 animate-pulse",
						style: { animationDelay: "1s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "visible",
							variants: staggerContainer,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									variants: staggerItem,
									className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-soft/40 text-plum text-xs font-medium tracking-wider uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Registered Nurse · ICU & BMT"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
									variants: staggerItem,
									className: "mt-6 font-display text-5xl md:text-7xl font-medium leading-[1.05] text-plum",
									children: [
										"Caring hands,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "text-rose",
											children: "steady heart."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: staggerItem,
									className: "mt-6 text-lg text-muted-foreground max-w-md leading-relaxed",
									children: "I'm Nimra — a self-driven Registered Nurse with over two years of critical care experience in Neuro ICU and Bone Marrow Transplant units, devoted to compassionate, evidence-based patient care."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: staggerItem,
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
										href: "#contact",
										whileHover: { scale: 1.05 },
										whileTap: { scale: .97 },
										className: "px-6 py-3 rounded-full bg-rose text-primary-foreground text-sm font-medium hover:bg-plum transition shadow-lg shadow-rose/20",
										children: "Get in touch"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
										href: "#experience",
										whileHover: { scale: 1.05 },
										whileTap: { scale: .97 },
										className: "px-6 py-3 rounded-full border border-rose/30 text-plum text-sm font-medium hover:bg-rose-soft/30 transition",
										children: "View experience"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									variants: staggerItem,
									className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
									children: [
										{
											n: "2+",
											l: "Years in ICU"
										},
										{
											n: "3",
											l: "Diplomas"
										},
										{
											n: "6+",
											l: "Specialty trainings"
										}
									].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 20
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											delay: .6 + i * .15,
											duration: .5,
											ease: "easeOut"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "font-display text-3xl text-rose",
											initial: { scale: .5 },
											animate: { scale: 1 },
											transition: {
												delay: .7 + i * .15,
												type: "spring",
												stiffness: 200,
												damping: 15
											},
											children: s.n
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: s.l
										})]
									}, s.l))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "relative",
							initial: {
								opacity: 0,
								x: 40
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: .9,
								ease: "easeOut",
								delay: .3
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "absolute inset-0 bg-gradient-to-tr from-rose/20 to-transparent rounded-[2.5rem] rotate-3",
									animate: { rotate: [
										3,
										1,
										3
									] },
									transition: {
										duration: 6,
										repeat: Infinity,
										ease: "easeInOut"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "relative rounded-[2.5rem] overflow-hidden border-4 border-card shadow-2xl shadow-rose/20",
									whileHover: { scale: 1.02 },
									transition: { duration: .4 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: nurse_hero_default,
										alt: "Illustrated portrait of Nimra Noor, Registered Nurse",
										width: 1280,
										height: 1600,
										className: "w-full h-auto"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border flex items-center gap-3",
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .8,
										duration: .6,
										ease: "easeOut"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full bg-rose-soft/50 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "w-5 h-5 text-rose" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium text-plum",
										children: "Nursing Officer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Pakistan Institute of Neurosciences"
									})] })]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "py-24 bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-3.5 h-3.5" }),
							text: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl text-plum leading-tight",
							children: [
								"A nurse devoted to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-rose",
									children: "precision and presence"
								}),
								" at the bedside."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-muted-foreground leading-relaxed",
							children: "With proven success delivering swift, precise assessments and maintaining composure under pressure, I collaborate closely with physicians and multidisciplinary teams to uphold the highest healthcare standards. I adapt to meet diverse patient needs in complex, evolving conditions — especially for Bone Marrow Transplant patients — bringing strong clinical knowledge, critical thinking, and a quality-focused approach to every shift."
						})
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experience",
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-3.5 h-3.5" }),
						text: "Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl text-plum",
						children: "Where I've served."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCard, {
							delay: 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
								role: "Nursing Officer — Neuro ICU",
								org: "Pakistan Institute of Neurosciences, Lahore",
								period: "Dec 2023 — Present",
								points: [
									"Specialized nursing care for critically ill patients with traumatic brain injuries, strokes, and neurosurgical interventions.",
									"Managed patients on mechanical ventilation, continuous EEG, and invasive monitoring systems.",
									"Administered medications, titrated drips, and performed advanced nursing procedures.",
									"Collaborated with neurologists, neurosurgeons, respiratory and physical therapists.",
									"Assisted with lumbar punctures, ventriculostomies, and brain monitoring devices.",
									"Educated and supported patients' families with empathy and clarity."
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCard, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
								role: "Nursing Officer — Bone Marrow Transplant",
								org: "Pakistan Kidney and Liver Institute & Research Centre, Lahore",
								period: "Sep 2022 — Jan 2024",
								points: [
									"Coordinated care with physicians to deliver high-dose chemotherapy and stem-cell infusion protocols safely.",
									"Monitored and documented vital signs, medication side effects, and recovery progress.",
									"Maintained composure and efficiency during rapid response situations and emergency codes.",
									"Performed blood product transfusions and acute symptom management.",
									"Assisted bedside bone marrow biopsies, lumbar punctures with intrathecal chemo, and skin biopsies.",
									"Fierce patient and caregiver advocate — emotional, psychological, and spiritual support."
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "education",
				className: "py-24 bg-blush/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "w-3.5 h-3.5" }),
							text: "Education"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl text-plum",
							children: "Qualifications & training."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "mt-12 grid md:grid-cols-2 gap-6",
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-80px"
							},
							variants: staggerContainer,
							children: [
								{
									t: "BS Nursing",
									s: "Khyber Medical University (KMU), Peshawar",
									n: "Ongoing"
								},
								{
									t: "Post RN / BSc Nursing",
									s: "Khyber Medical University, Peshawar",
									n: "Ongoing"
								},
								{
									t: "B.Sc. — Associate Degree Program",
									s: "Punjab University, Lahore",
									n: "Completed"
								},
								{
									t: "Diploma in General Nursing",
									s: "Children Hospital, Lahore",
									n: "3 years full-time"
								},
								{
									t: "Diploma in Midwifery Nursing",
									s: "Lady Willingdon Hospital, Lahore",
									n: "1 year, Gynecology"
								},
								{
									t: "F.Sc. Pre-Engineering",
									s: "Major in Biology",
									n: "Completed"
								}
							].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: staggerItem,
								whileHover: {
									y: -4,
									transition: { duration: .3 }
								},
								className: "bg-card rounded-2xl p-6 border border-border hover:border-rose/40 hover:shadow-lg hover:shadow-rose/10 transition-shadow duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-wider text-rose font-medium",
										children: e.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-xl text-plum",
										children: e.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mt-1",
										children: e.s
									})
								]
							}, e.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-16 font-display text-2xl text-plum",
								children: "Specialty Trainings"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "mt-6 grid md:grid-cols-3 gap-4",
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-80px"
							},
							variants: staggerContainer,
							children: [
								{
									t: "Bone Marrow Transplant",
									o: "AFBMTC, Rawalpindi",
									d: "Nov–Dec 2022 · 2 months"
								},
								{
									t: "Intensive Care Unit Nursing",
									o: "PKLI & RC",
									d: "Jan–Mar 2023 · 3 months"
								},
								{
									t: "Infection Prevention & Control",
									o: "PKLI & RC",
									d: "May 2023 · 1 month"
								}
							].map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: staggerItem,
								whileHover: {
									y: -4,
									transition: { duration: .3 }
								},
								className: "bg-card/70 rounded-xl p-5 border border-border transition-shadow duration-300 hover:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-plum",
										children: tr.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mt-1",
										children: tr.o
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-rose mt-2",
										children: tr.d
									})
								]
							}, tr.t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "skills",
				className: "py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }),
							text: "Key Skills"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl md:text-4xl text-plum",
							children: "Clinical strengths."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
							className: "mt-8 space-y-3",
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-80px"
							},
							variants: staggerContainer,
							children: [
								"Inpatient and outpatient care",
								"Nursing staff leadership",
								"Excellent assessment skills",
								"Strong patient management & relations",
								"Central Venous Catheter management",
								"Respectful team player",
								"Patient education from admission to discharge",
								"Adaptable across diverse environments"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								variants: staggerItem,
								className: "flex items-start gap-3 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 group-hover:scale-150 transition-transform duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/80",
									children: s
								})]
							}, s))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
						delay: .15,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-3.5 h-3.5" }),
								text: "Courses & Workshops"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl md:text-4xl text-plum",
								children: "Continued learning."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "mt-8 space-y-4",
								initial: "hidden",
								whileInView: "visible",
								viewport: {
									once: true,
									margin: "-80px"
								},
								variants: staggerContainer,
								children: [
									{
										t: "Basic Life Support (BLS)",
										d: "PKLI & RC · 1-day workshop · 2022"
									},
									{
										t: "Workplace Violence",
										d: "PKLI & RC · 1-day course · 2023"
									},
									{
										t: "Second Victim Support",
										d: "PKLI & RC · 1-day course · 2023"
									}
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: staggerItem,
									className: "border-l-2 border-rose pl-5 py-1 hover:pl-6 transition-all duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-plum",
										children: c.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mt-0.5",
										children: c.d
									})]
								}, c.t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "mt-10 p-6 rounded-2xl bg-blush/50 border border-rose-soft/40",
								initial: {
									opacity: 0,
									scale: .95
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: { once: true },
								transition: {
									delay: .3,
									duration: .6,
									ease: "easeOut"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-plum mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium uppercase tracking-wider",
										children: "Languages"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "flex flex-wrap gap-2",
									initial: "hidden",
									whileInView: "visible",
									viewport: { once: true },
									variants: staggerContainer,
									children: [
										"English",
										"Urdu",
										"Punjabi"
									].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										variants: staggerItem,
										whileHover: {
											scale: 1.08,
											y: -2
										},
										className: "px-3 py-1 rounded-full bg-card text-sm text-plum border border-border cursor-default",
										children: l
									}, l))
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "py-24 bg-gradient-to-br from-plum to-rose text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-medium tracking-wider uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-3.5 h-3.5" }), " Get in touch"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-6xl leading-tight",
							children: ["Let's connect — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-rose-soft",
								children: "I'd love to hear from you."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/80 max-w-xl mx-auto",
							children: "Available for nursing roles, collaborations, and professional opportunities across critical care and transplant nursing."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-12 grid sm:grid-cols-3 gap-4 text-left",
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-80px"
						},
						variants: staggerContainer,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: staggerItem,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5" }),
									label: "Location",
									value: "Lahore, Pakistan"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: staggerItem,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5" }),
									label: "Phone",
									value: "+92 304 3005080",
									href: "tel:+923043005080"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: staggerItem,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5" }),
									label: "Email",
									value: "nimranoor888@gmail.com",
									href: "mailto:nimranoor888@gmail.com"
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.footer, {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: { duration: .6 },
				className: "py-8 bg-plum text-white/60 text-center text-sm",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Nimra Noor · Registered Nurse · Crafted with care."
				]
			})
		]
	});
}
function AnimatedSection({ children, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 30
		},
		animate: isInView ? {
			opacity: 1,
			y: 0
		} : {
			opacity: 0,
			y: 30
		},
		transition: {
			duration: .7,
			ease: "easeOut",
			delay
		},
		children
	});
}
function AnimatedCard({ children, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 40,
			scale: .97
		},
		animate: isInView ? {
			opacity: 1,
			y: 0,
			scale: 1
		} : {
			opacity: 0,
			y: 40,
			scale: .97
		},
		transition: {
			duration: .7,
			ease: "easeOut",
			delay
		},
		children
	});
}
function SectionLabel({ icon, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-soft/30 text-rose text-xs font-medium tracking-wider uppercase",
		children: [
			icon,
			" ",
			text
		]
	});
}
function ExperienceCard({ role, org, period, points }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "bg-card rounded-3xl p-8 border border-border transition-shadow duration-300",
		whileHover: {
			boxShadow: "0 20px 40px -15px rgba(225, 120, 120, 0.15)",
			y: -2
		},
		transition: { duration: .3 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl text-plum",
				children: role
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-muted-foreground mt-1",
				children: org
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs px-3 py-1.5 rounded-full bg-rose-soft/30 text-rose font-medium whitespace-nowrap",
				children: period
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3",
			children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3 text-sm text-foreground/80 leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 w-1 h-1 rounded-full bg-rose flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
			}, p))
		})]
	});
}
function ContactCard({ icon, label, value, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 h-full",
		whileHover: {
			backgroundColor: "rgba(255,255,255,0.18)",
			scale: 1.02
		},
		transition: { duration: .3 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-rose-soft",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-wider",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 font-display text-xl",
			children: value
		})]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		children: inner
	}) : inner;
}
//#endregion
export { Index as component };
