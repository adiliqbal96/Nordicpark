import { reactive, computed } from 'vue'

const state = reactive({
    locale: 'da'
})

const translations = {
    da: {
        nav: {
            home: 'Forside',
            solutions: 'Løsninger',
            why: 'Hvorfor os',
            process: 'Proces',
            contact: 'Kontakt',
            ticket: 'Afgift'
        },
        footer: {
            terms: 'Handelsbetingelser',
            parkingTerms: 'Parkeringsbetingelser',
            privacy: 'Privatlivspolitik',
            cookie: 'Cookiepolitik',
            copyright: '© {year} NordicPark · Professionel parkeringskontrol'
        },
        intro: {
            title: 'Velkommen til {name}',
            subtitle: 'Fair parkeringsservice for private, boligforeninger og erhverv.',
            subtitle2: 'Se dokumentation, betal afgift eller få en professionel P-løsning.',
            privateTitle: 'Har du fået en afgift?',
            privateDesc: 'Se dokumentation, indsend klage eller betal din afgift nemt og hurtigt.',
            privateCta: 'Gå til afgiftsside',
            businessTitle: 'Søger du en P-løsning?',
            businessDesc: 'Professionelle parkeringsløsninger til boligforeninger, erhverv og detail.',
            businessCta: 'Få et tilbud'
        },
        portal: {
            findTitle: 'Find din {type}',
            findSubtitle: 'Indtast dine oplysninger for at se din afgift og vælge handling.',
            ticketNum: 'Afgiftsnummer (Løbenummer)',
            ticketPlaceholder: 'F.eks. 123456',
            licensePlate: 'Nummerplade (Registreringsnummer)',
            licensePlatePlaceholder: 'AA 12 345',
            findBtn: 'Find afgift',
            actionTitle: 'Hvad ønsker du {action}?',
            foundVehicle: 'Vi har fundet oplysningerne på køretøj {plate}.',
            payNow: 'Betal din afgift nu',
            payDesc: 'Sikker betaling med MobilePay eller kort',
            otherOptions: 'Andre muligheder',
            docs: 'Se dokumentation',
            complaint: 'Indsend klage',
            findAnother: 'Find en anden afgift',
            backToOverview: 'Tilbage til overblik',
            payment: {
                title: 'Betal afgift',
                subtitle: 'Vælg beløbet på din afgift for at gå til betaling.',
                selectType: 'Vælg beløbstype',
                standard: 'Standard',
                handicap: 'Handicap',
                custom: 'Andet',
                customBtn: 'Custom',
                customLabel: 'Indtast beløb (DKK)',
                customPlaceholder: 'F.eks. 500',
                alert: 'Sikker betaling via Stripe. Dine oplysninger behandles fortroligt.',
                payBtn: 'Betal nu',
                editSelection: 'Tilbage',
                totalLabel: 'Total beløb at betale',
                subTotal: 'Parkeringsafgift',
                fee: 'Transaktionsgebyr',
                typeLabel: 'Afgiftstype',
                standard: 'Standard afgift',
                handicap: 'Handicapparkering',
                emergency: 'Brandvej / Spærrezone',
                stopping: 'Standsningsforbud',
                expired: 'Tidsbegrænsning',
                cardLabel: 'Kortoplysninger',
                processing: 'Behandler betaling...',
                success: 'Betaling gennemført! Tak.',
                error: 'Der opstod en fejl under betalingen. Prøv venligst igen.'
            },
            complaintForm: {
                title: 'Indsend klage',
                subtitle: 'Beskriv hvorfor du mener afgiften er uberettiget.',
                email: 'Din e-mail',
                emailPlaceholder: 'din@email.dk',
                desc: 'Beskrivelse',
                descPlaceholder: 'Skriv din begrundelse her...',
                upload: 'Vedhæft dokumentation (valgfrit)',
                uploadBtn: 'Klik for at uploade billeder',
                filesSelected: '{count} filer valgt',
                submitBtn: 'Indsend klage',
                sending: 'Sender...'
            },
            photoForm: {
                title: 'Se fotos',
                subtitle: 'Billeddokumentationen sendes direkte til din e-mail.',
                email: 'E-mail til modtagelse',
                emailPlaceholder: 'din@email.dk',
                submitBtn: 'Modtag billeder'
            },
            status: {
                successTitle: 'Modtaget!',
                errorTitle: 'Fejl',
                okBtn: 'Videre'
            }
        },
        business: {
            heroKicker: 'NordicPark · Professionel Parkeringskontrol',
            heroTitle: 'Professionel parkeringskontrol til boligforeninger og erhverv',
            heroSubtitle: 'Vi skaber tryghed og orden på jeres parkeringsarealer med fair kontrol, tydelig skiltning og god dialog.',
            heroCtaPrimary: 'Få et tilbud',
            heroCtaSecondary: 'Se vores ydelser',
            sectionBadge: 'Vores ydelser',
            solutionsTitle: 'Specialiserede løsninger',
            solutions: {
                residential: {
                    title: 'Boligforeninger',
                    desc: 'Få styr på gæsteparkering, beboerlicenser og uvedkommende parkering med en fair og overskuelig ordning.',
                    link: 'Læs mere →'
                },
                business: {
                    title: 'Erhverv & Retail',
                    desc: 'Skab bedre flow for kunder og medarbejdere med tydelig skiltning, kontrol og enkel administration.',
                    link: 'Læs mere →'
                },
                private: {
                    title: 'Privat kontrol',
                    desc: 'Beskyt private parkeringsarealer mod uvedkommende parkering med klare regler og dokumenteret kontrol.',
                    link: 'Læs mere →'
                }
            },
            whyTitle: 'Hvorfor vælge NordicPark?',
            whyCards: {
                traditional: {
                    title: 'Professionel kontrol',
                    desc: 'Synlig og nærværende parkeringskontrol udført af professionelle vagter.'
                },
                fair: {
                    title: 'Fair kontrol',
                    desc: 'Vi fokuserer på tydelige regler, dokumentation og dialog — ikke bøder for enhver pris.'
                },
                custom: {
                    title: 'Skræddersyede aftaler',
                    desc: 'Vi tilpasser løsningen til jeres beboere, gæster, kunder og parkeringsbehov.'
                }
            },
            whyHighlight: {
                title: 'Tryg parkering — uden ekstra arbejde',
                desc: 'Vi hjælper med alt fra skiltning og opsætning til løbende kontrol og dialog med bilisterne. I får en fast kontaktperson og et klart overblik over jeres P-plads.'
            },
            processBadge: 'Proces',
            processTitle: 'Sådan arbejder vi',
            processIntro: 'Fra første møde til løbende drift har I en fast kontaktperson og et klart overblik.',
            processSteps: {
                analysis: {
                    title: 'Analyse',
                    desc: 'Vi gennemgår jeres parkeringsområde, regler og behov, så I får en klar anbefaling.'
                },
                setup: {
                    title: 'Opsætning',
                    desc: 'Vi hjælper med skiltning, P-zoner og kommunikation til beboere, kunder eller brugere.'
                },
                operation: {
                    title: 'Løbende kontrol',
                    desc: 'Vi følger op, udfører kontrol og justerer ordningen efter behov.'
                }
            },
            ctaTitle: 'Klar til at få styr på parkeringen?',
            ctaDesc: 'Kontakt os for en uforpligtende gennemgang af jeres parkeringsbehov. Vi vender hurtigt tilbage med en konkret løsning.',
            ctaBtnPrimary: 'Kontakt os',
            ctaBtnSecondary: 'Se løsninger'
        },
        contact: {
            title: 'Kontakt NordicPark',
            subtitle: 'Udfyld formularen, hvis du vil være kunde, har spørgsmål til parkering eller ønsker et uforpligtende tilbud.',
            name: 'Navn',
            namePlaceholder: 'Dit navn',
            email: 'E-mail',
            emailPlaceholder: 'din@email.dk',
            phone: 'Telefon',
            openingHours: 'Åbningstider',
            openingHoursContent: 'Man-Fre: 09:00 - 16:00',
            company: 'Virksomhed / Forening',
            companyPlaceholder: 'Valgfrit',
            message: 'Besked',
            messagePlaceholder: 'Fortæl kort om dine behov',
            sendBtn: 'Send besked',
            sending: 'Sender...',
            success: 'Tak for din henvendelse! Vi vender tilbage hurtigst muligt.',
            error: 'Kunne ikke sende besked. Prøv venligst igen senere.'
        },
        services: {
            back: 'Til forsiden',
            hubTitle: 'Vores P-løsninger',
            hubIntro: 'NordicPark tilbyder professionelle løsninger til alle typer parkeringsarealer. Vælg nedenfor for at læse mere om vores specifikke ydelser.',
            hubLink: 'Se løsning →',
            residential: {
                title: 'Boligforeninger',
                intro: 'Vi skaber orden og tryghed for beboerne ved at sikre, at parkeringspladserne altid er tilgængelige for dem, der har ret til at holde der.',
                contentTitle: 'Professionel kontrol & administration',
                contentDesc: 'Beboernes tryghed er vores højeste prioritet. Vi sørger for, at uvedkommende ikke optager pladsen, og at reglerne håndhæves med respekt og dialog.',
                list: [
                    'Administration af beboer- og gæstelicenser via app',
                    'Kontrol af p-zoner og tidsbegrænsning',
                    'Tydelig skiltning der guider gæster korrekt',
                    'Nærhed og dialog med beboerne'
                ],
                ctaTitle: 'Skal vi hjælpe jeres boligforening?',
                ctaDesc: 'Vi tilbyder en uforpligtende gennemgang af jeres parkeringsarealer og giver et bud på en fair og effektiv løsning.',
                ctaBtn: 'Book en gratis besigtigelse'
            },
            business: {
                title: 'Erhverv & Retail',
                intro: 'Optimér pladsen for jeres kunder og undgå langtidsparkering med professionel og fair kontrol.',
                contentTitle: 'Skræddersyede løsninger til butik og erhverv',
                contentDesc: 'Vi ved, at hver parkeringsplads er unik. Derfor tilpasser vi altid kontrollen, så den matcher jeres åbningstider og kundegrupper.',
                list: [
                    'Tydelig skiltning der guider kunderne',
                    'P-skive kontrol eller digitale p-billetter',
                    'Fleksible løsninger til medarbejderparkering',
                    'Professionel og høflig kontakt med bilisterne'
                ],
                ctaTitle: 'Vil I høre mere om jeres muligheder?',
                ctaDesc: 'Vi tager gerne et kig på jeres p-plads og giver en vurdering af, hvordan vi bedst sikrer glade kunder og ledige pladser.',
                ctaBtn: 'Kontakt os for et møde'
            },
            private: {
                title: 'Privat kontrol',
                intro: 'Beskyt jeres private arealer mod uvedkommende parkering med tydelig skiltning og professionel kontrol.',
                contentTitle: 'Effektiv beskyttelse af privat grund',
                contentDesc: 'Vi hjælper med at sikre, at jeres private parkeringspladser ikke bliver misbrugt, så pladserne altid er ledige til dem, de er tiltænkt.',
                list: [
                    'Opsætning af lovpligtig skiltning',
                    'Effektiv kontrol af uvedkommende køretøjer',
                    'Sikkerhed for at reglerne overholdes',
                    'Hurtig udrykning ved behov'
                ],
                ctaTitle: 'Har I brug for hjælp til privat kontrol?',
                ctaDesc: 'Kontakt os for en uforpligtende snak om, hvordan vi bedst beskytter jeres område mod uønsket parkering.',
                ctaBtn: 'Hent et uforpligtende tilbud'
            }
        },
        faq: {
            header: 'Oftest Stillede Spørgsmål',
            intro: 'Hej! Her finder du svar på de mest almindelige spørgsmål.',
            footer: 'Fandt du ikke hvad du søgte?',
            contactLink: 'Kontakt os her',
            items: [
                {
                    question: "Hvilke parkeringsløsninger tilbyder I?",
                    answer: "Vi tilbyder skræddersyede løsninger med traditionel og fair parkeringskontrol, uniformeret vagtservice og tydelig skiltning baseret på din ejendoms behov."
                },
                {
                    question: "Koster det noget at få jer ud?",
                    answer: "Nej, vi tilbyder en gratis og uforpligtende gennemgang af dine parkeringsforhold, hvor vi vurderer potentialet for optimering."
                },
                {
                    question: "Hvordan håndteres en klage?",
                    answer: "Alle klager behandles professionelt gennem vores kundecenter. Bilisten kan nemt indsende en klage via vores hjemmeside med referencenummeret fra afgiften."
                },
                {
                    question: "Hvor hurtigt kan vi komme i gang?",
                    answer: "Fra vi har besigtiget arealet og aftalt rammerne, kan we typisk implementere løsningen og opsætte skiltning inden for 1-2 uger."
                },
                {
                    question: "Hvordan kan jeg se billeder af min parkering?",
                    answer: "Når du har modtaget en afgift, er overtrædelsen altid dokumenteret med billeder. Du kan se billederne af din bil ved at klikke ind på 'Har du fået en afgift?' her på hjemmesiden og indtaste dit kontrolafgifts- eller registreringsnummer."
                }
            ]
        },
        legal: {
            companyInfoTitle: 'Virksomhedsoplysninger',
            introParking: 'Parkering på området udgør en bindende civilretlig aftale. Ved parkering accepteres nedenstående vilkår.',
            feeTitle: 'Parkeringsafgift',
            feeAmount: '950 kr.',
            feeDue: 'Beløbet forfalder til betaling senest 10 dage fra udstedelsesdatoen via betalingsoplysninger angivet på opkrævningen.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            solutions: 'Solutions',
            why: 'Why us',
            process: 'Process',
            contact: 'Contact',
            ticket: 'Ticket'
        },
        footer: {
            terms: 'Terms of Service',
            parkingTerms: 'Parking Terms',
            privacy: 'Privacy Policy',
            cookie: 'Cookie Policy',
            copyright: '© {year} NordicPark · Professional parking control'
        },
        intro: {
            title: 'Welcome to {name}',
            subtitle: 'Fair parking service for individuals, housing associations, and businesses.',
            subtitle2: 'View documentation, pay a fine, or get a professional parking solution.',
            privateTitle: 'Received a parking fine?',
            privateDesc: 'View documentation, submit a complaint, or pay your fine easily and quickly.',
            privateCta: 'Go to ticket portal',
            businessTitle: 'Need a parking solution?',
            businessDesc: 'Professional parking solutions for housing associations, businesses, and retail.',
            businessCta: 'Get a quote'
        },
        portal: {
            findTitle: 'Find your {type}',
            findSubtitle: 'Enter your details to view your ticket and choose an action.',
            ticketNum: 'Ticket Number (Reference)',
            ticketPlaceholder: 'E.g. 123456',
            licensePlate: 'License Plate (Reg. Number)',
            licensePlatePlaceholder: 'AA 12 345',
            findBtn: 'Find Ticket',
            actionTitle: 'What would you like {action}?',
            foundVehicle: 'We found information for vehicle {plate}.',
            payNow: 'Pay your ticket now',
            payDesc: 'Secure payment via MobilePay or card',
            otherOptions: 'Other options',
            docs: 'View documentation',
            complaint: 'Submit complaint',
            findAnother: 'Find another ticket',
            backToOverview: 'Back to overview',
            payment: {
                title: 'Pay Ticket',
                subtitle: 'Select your ticket amount to proceed to payment.',
                selectType: 'Select amount type',
                standard: 'Standard',
                handicap: 'Handicap',
                custom: 'Other',
                customBtn: 'Custom',
                customLabel: 'Enter amount (DKK)',
                customPlaceholder: 'E.g. 500',
                alert: 'Secure payment via Stripe. Your information is processed confidentially.',
                payBtn: 'Pay Now',
                editSelection: 'Back',
                totalLabel: 'Total amount to pay',
                subTotal: 'Parking fine',
                fee: 'Transaction fee',
                typeLabel: 'Fine Type',
                standard: 'Standard Fine',
                handicap: 'Handicap Parking',
                emergency: 'Emergency Lane',
                stopping: 'No Stopping Zone',
                expired: 'Time Limit Exceeded',
                cardLabel: 'Card Details',
                processing: 'Processing payment...',
                success: 'Payment successful! Thank you.',
                error: 'An error occurred during payment. Please try again.'
            },
            complaintForm: {
                title: 'Submit Complaint',
                subtitle: 'Describe why you believe the ticket is unjustified.',
                email: 'Your email',
                emailPlaceholder: 'your@email.com',
                desc: 'Description',
                descPlaceholder: 'Write your reason here...',
                upload: 'Attach documentation (optional)',
                uploadBtn: 'Click to upload photos',
                filesSelected: '{count} files selected',
                submitBtn: 'Submit Complaint',
                sending: 'Sending...'
            },
            photoForm: {
                title: 'View Photos',
                subtitle: 'The photo documentation will be sent directly to your email.',
                email: 'Recipient email',
                emailPlaceholder: 'your@email.com',
                submitBtn: 'Receive Photos'
            },
            status: {
                successTitle: 'Received!',
                errorTitle: 'Error',
                okBtn: 'Next'
            }
        },
        business: {
            heroKicker: 'NordicPark · Professional Parking Control',
            heroTitle: 'Professional parking control for housing associations and businesses',
            heroSubtitle: 'We create safety and order on your parking areas with fair control, clear signage, and good dialogue.',
            heroCtaPrimary: 'Get a quote',
            heroCtaSecondary: 'See our services',
            sectionBadge: 'Our services',
            solutionsTitle: 'Specialized solutions',
            solutions: {
                residential: {
                    title: 'Housing Associations',
                    desc: 'Manage guest parking, resident permits, and unauthorized vehicles with a fair and straightforward arrangement.',
                    link: 'Read more →'
                },
                business: {
                    title: 'Business & Retail',
                    desc: 'Improve flow for customers and employees with clear signage, control, and simple administration.',
                    link: 'Read more →'
                },
                private: {
                    title: 'Private Control',
                    desc: 'Protect private parking areas from unauthorized vehicles with clear rules and documented control.',
                    link: 'Read more →'
                }
            },
            whyTitle: 'Why choose NordicPark?',
            whyCards: {
                traditional: {
                    title: 'Professional Control',
                    desc: 'Visible and present parking control performed by professional guards.'
                },
                fair: {
                    title: 'Fair Control',
                    desc: 'We focus on clear rules, documentation, and dialogue — not fines at any cost.'
                },
                custom: {
                    title: 'Tailored Agreements',
                    desc: 'We adapt the solution to your residents, guests, customers, and parking needs.'
                }
            },
            whyHighlight: {
                title: 'Safe parking — without extra work',
                desc: 'We handle everything from signage and setup to ongoing control and dialogue with drivers. You get one dedicated contact person and a clear overview of your parking area.'
            },
            processBadge: 'Process',
            processTitle: 'How we work',
            processIntro: 'From the first meeting to ongoing operations, you have a dedicated contact person and a clear overview.',
            processSteps: {
                analysis: {
                    title: 'Analysis',
                    desc: 'We review your parking area, rules, and needs so you get a clear recommendation.'
                },
                setup: {
                    title: 'Setup',
                    desc: 'We help with signage, parking zones, and communication to residents, customers, or users.'
                },
                operation: {
                    title: 'Ongoing Control',
                    desc: 'We follow up, carry out control, and adjust the arrangement as needed.'
                }
            },
            ctaTitle: 'Ready to take control of your parking?',
            ctaDesc: 'Contact us for a non-binding review of your parking needs. We will get back to you quickly with a concrete solution.',
            ctaBtnPrimary: 'Contact us',
            ctaBtnSecondary: 'See solutions'
        },
        contact: {
            title: 'Contact NordicPark',
            subtitle: 'Fill out the form if you want to become a customer, have questions about parking, or want a non-binding quote.',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            phone: 'Phone',
            openingHours: 'Opening Hours',
            openingHoursContent: 'Mon-Fri: 09:00 AM - 04:00 PM',
            company: 'Company / Association',
            companyPlaceholder: 'Optional',
            message: 'Message',
            messagePlaceholder: 'Briefly tell us about your needs',
            sendBtn: 'Send message',
            sending: 'Sending...',
            success: 'Thank you for your inquiry! We will get back to you as soon as possible.',
            error: 'Could not send message. Please try again later.'
        },
        services: {
            back: 'Back to home',
            hubTitle: 'Our Parking Solutions',
            hubIntro: 'NordicPark offers professional solutions for all types of parking areas. Choose below to read more about our specific services.',
            hubLink: 'See solution →',
            residential: {
                title: 'Housing Associations',
                intro: 'We create order and safety for residents by ensuring that parking spaces are always available to those who have the right to be there.',
                contentTitle: 'Professional control & administration',
                contentDesc: 'Resident safety is our top priority. We ensure that unauthorized persons do not occupy the space, and that rules are enforced with respect and dialogue.',
                list: [
                    'Administration of resident and guest permits via app',
                    'Control of parking zones and time limits',
                    'Clear signage that guides guests correctly',
                    'Proximity and dialogue with residents'
                ],
                ctaTitle: 'Can we help your housing association?',
                ctaDesc: 'We offer a non-binding review of your parking areas and provide a proposal for a fair and effective solution.',
                ctaBtn: 'Book a free inspection'
            },
            business: {
                title: 'Business & Retail',
                intro: 'Optimize space for your customers and avoid long-term parking with professional and fair control.',
                contentTitle: 'Tailored solutions for retail and business',
                contentDesc: 'We know that every parking lot is unique. That\'s why we always adapt the control to match your opening hours and customer groups.',
                list: [
                    'Clear signage that guides customers',
                    'Parking disc control or digital parking tickets',
                    'Flexible solutions for employee parking',
                    'Professional and polite contact with drivers'
                ],
                ctaTitle: 'Want to hear more about your options?',
                ctaDesc: 'We are happy to take a look at your parking lot and give an assessment of how we best ensure happy customers and available spaces.',
                ctaBtn: 'Contact us for a meeting'
            },
            private: {
                title: 'Private Control',
                intro: 'Protect your private areas from unauthorized parking with clear signage and professional control.',
                contentTitle: 'Effective protection of private land',
                contentDesc: 'We help ensure that your private parking spaces are not misused, so the spaces are always available for those they are intended for.',
                list: [
                    'Setup of statutory signage',
                    'Effective control of unauthorized vehicles',
                    'Assurance that rules are followed',
                    'Quick response when needed'
                ],
                ctaTitle: 'Do you need help with private control?',
                ctaDesc: 'Contact us for a non-binding chat about how we best protect your area against unwanted parking.',
                ctaBtn: 'Get a non-binding quote'
            }
        },
        faq: {
            header: 'Frequently Asked Questions',
            intro: 'Hi! Here you will find answers to the most common questions.',
            footer: 'Didn\'t find what you were looking for?',
            contactLink: 'Contact us here',
            items: [
                {
                    question: "What parking solutions do you offer?",
                    answer: "We offer tailored solutions with traditional and fair parking control, uniformed guard service, and clear signage based on your property's needs."
                },
                {
                    question: "Does it cost anything for an inspection?",
                    answer: "No, we offer a free and non-binding review of your parking conditions, where we assess the potential for optimization."
                },
                {
                    question: "How is a complaint handled?",
                    answer: "All complaints are handled professionally through our customer center. The driver can easily submit a complaint via our website using the reference number from the ticket."
                },
                {
                    question: "How quickly can we get started?",
                    answer: "From the time we have inspected the area and agreed on the framework, we can typically implement the solution and set up signage within 1-2 weeks."
                },
                {
                    question: "How can I see photos of my parking violation?",
                    answer: "Once you have received a ticket, the violation is always documented with photos. You can see the photos of your car by clicking on 'Received a ticket?' here on the website and entering your ticket or registration number."
                }
            ]
        },
        legal: {
            companyInfoTitle: 'Company Information',
            introParking: 'Parking in the area constitutes a binding civil law agreement. By parking, the following terms are accepted.',
            feeTitle: 'Parking Charge',
            feeAmount: '950 DKK',
            feeDue: 'The amount is due for payment no later than 10 days from the date of issue via the payment information provided on the charge notice.'
        }
    }
}

export const i18n = {
    t: (path, args = {}) => {
        const keys = path.split('.')
        let current = translations[state.locale]
        for (const key of keys) {
            if (!current[key]) return path
            current = current[key]
        }

        let text = current
        if (typeof text === 'string') {
            Object.keys(args).forEach(key => {
                text = text.replace(`{${key}}`, args[key])
            })
        }
        return text
    },
    setLocale: (l) => {
        state.locale = l
    },
    locale: computed(() => state.locale)
}
